import { create } from "zustand";
import { mockProjects } from "../lib/mockData";
import { Project } from "../lib/types";

interface AppState {
  projects: Project[];
  currentProject: Project | null;
  // Actions
  setCurrentProject: (project: Project | null) => void;
}

export const useChatStore = create<AppState>((set, get) => ({
  projects: mockProjects,
  currentProject: null,
  setCurrentProject: (project) => set({ currentProject: project }),
}));
