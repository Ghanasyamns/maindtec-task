export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: Date;
  content?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  files: FileItem[];
  createdAt: Date;
  lastAccessed: Date;
}

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  projectId?: string;
  fileId?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  currentContext: "project" | "file";
  contextId: string;
}
