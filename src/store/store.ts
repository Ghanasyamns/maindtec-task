import { create } from "zustand";
import { mockProjects } from "../lib/mockData";
import { Project } from "../lib/types";

interface AppState {
  projects: Project[];
}

export const useChatStore = create<AppState>((set, get) => ({
  projects: mockProjects,
}));
