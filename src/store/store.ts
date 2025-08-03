import { create } from "zustand";
import { mockMessages, mockProjects } from "../lib/mockData";
import { ChatState, Message, Project } from "../lib/types";

interface AppState {
  projects: Project[];
  currentProject: Project | null;
  currentFile: string | null;

  chatStates: Record<string, ChatState>;
  // Actions
  setCurrentProject: (project: Project | null) => void;
  addMessage: (
    contextId: string,
    message: Omit<Message, "id" | "timestamp">
  ) => void;
  getChatState: (
    contextId: string,
    contextType: "project" | "file"
  ) => ChatState;
  setLoading: (contextId: string, loading: boolean) => void;
}

export const useChatStore = create<AppState>((set, get) => ({
  projects: mockProjects,
  currentProject: null,
  setCurrentProject: (project) => set({ currentProject: project }),
  currentFile: null,
  chatStates: {
    "project-1": {
      messages: mockMessages,
      isLoading: false,
      currentContext: "project",
      contextId: "1",
    },
  },
  addMessage: (contextId, message) =>
    set((state) => {
      const chatKey = `${message.projectId ? "project" : "file"}-${contextId}`;
      const newMessage: Message = {
        ...message,
        id: Date.now().toString(),
        timestamp: new Date(),
      };

      return {
        chatStates: {
          ...state.chatStates,
          [chatKey]: {
            ...state.chatStates[chatKey],
            messages: [
              ...(state.chatStates[chatKey]?.messages || []),
              newMessage,
            ],
          },
        },
      };
    }),
  getChatState: (contextId, contextType) => {
    const chatKey = `${contextType}-${contextId}`;
    const state = get().chatStates[chatKey];

    if (!state) {
      return {
        messages: [],
        isLoading: false,
        currentContext: contextType,
        contextId,
      };
    }

    return state;
  },
  setLoading: (contextId, loading) =>
    set((state) => {
      const existingState = Object.values(state.chatStates).find(
        (chat) => chat.contextId === contextId
      );

      if (!existingState) return state;

      const chatKey = `${existingState.currentContext}-${contextId}`;

      return {
        chatStates: {
          ...state.chatStates,
          [chatKey]: {
            ...state.chatStates[chatKey],
            isLoading: loading,
          },
        },
      };
    }),
}));
