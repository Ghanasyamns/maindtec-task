import { Project, User, Message } from "./types";

export const mockUser: User = {
  id: "1",
  name: "Sam John",
  email: "samjohn@example.com",
  avatar: "/api/placeholder/40/40",
};

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    createdAt: new Date("2024-01-15"),
    lastAccessed: new Date("2024-08-01"),
    files: [
      {
        id: "1",
        name: "README.md",
        type: "markdown",
        size: 2048,
        lastModified: new Date("2024-07-30"),
        content:
          "# E-commerce Platform\n\nA modern e-commerce solution built with React and Node.js...",
      },
      {
        id: "2",
        name: "package.json",
        type: "json",
        size: 1024,
        lastModified: new Date("2024-07-28"),
        content: '{\n  "name": "ecommerce-platform",\n  "version": "1.0.0"\n}',
      },
      {
        id: "3",
        name: "app.tsx",
        type: "typescript",
        size: 4096,
        lastModified: new Date("2024-07-29"),
        content:
          'import React from "react";\n\nfunction App() {\n  return <div>Hello World</div>;\n}',
      },
    ],
  },
  {
    id: "2",
    name: "Mobile App Design",
    description: "UI/UX design system for mobile application",
    createdAt: new Date("2024-02-10"),
    lastAccessed: new Date("2024-07-28"),
    files: [
      {
        id: "4",
        name: "design-system.md",
        type: "markdown",
        size: 3072,
        lastModified: new Date("2024-07-25"),
        content:
          "# Design System\n\nColor palette, typography, and component guidelines...",
      },
      {
        id: "5",
        name: "components.css",
        type: "css",
        size: 2560,
        lastModified: new Date("2024-07-26"),
        content:
          ".button {\n  background: linear-gradient(180deg, #073C83, #7A2357, #D20F35);\n}",
      },
    ],
  },
  {
    id: "3",
    name: "AI Chat Bot",
    description: "Intelligent chatbot with natural language processing",
    createdAt: new Date("2024-03-05"),
    lastAccessed: new Date("2024-07-30"),
    files: [
      {
        id: "6",
        name: "bot.py",
        type: "python",
        size: 5120,
        lastModified: new Date("2024-07-29"),
        content:
          "import openai\n\nclass ChatBot:\n    def __init__(self):\n        self.client = openai.OpenAI()\n",
      },
      {
        id: "7",
        name: "requirements.txt",
        type: "text",
        size: 512,
        lastModified: new Date("2024-07-28"),
        content: "openai==1.0.0\nfastapi==0.104.1\nuvicorn==0.24.0\n",
      },
    ],
  },
];

export const mockMessages: Message[] = [
  {
    id: "1",
    content:
      "Hello! I can help you understand your project files. What would you like to know?",
    sender: "ai",
    timestamp: new Date("2024-08-01T10:00:00"),
    projectId: "1",
  },
  {
    id: "2",
    content: "Can you explain the structure of this e-commerce project?",
    sender: "user",
    timestamp: new Date("2024-08-01T10:01:00"),
    projectId: "1",
  },
  {
    id: "3",
    content:
      "This e-commerce project follows a modern architecture with React frontend and Node.js backend. The README.md provides an overview, package.json lists dependencies, and app.tsx is the main React component. Would you like me to dive deeper into any specific file?",
    sender: "ai",
    timestamp: new Date("2024-08-01T10:01:30"),
    projectId: "1",
  },
];
