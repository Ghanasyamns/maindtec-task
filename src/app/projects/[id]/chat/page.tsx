"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Folder } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useChatStore } from "@/store/store";
import ChatInterface from "@/components/ChatInterface";

export default function ProjectChatPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const { projects, setCurrentProject, currentProject } = useChatStore();

  useEffect(() => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setCurrentProject(project);
    } else {
      router.push("/projects");
    }
  }, [projectId, projects, setCurrentProject, router]);

  if (!currentProject) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-maindtec-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Link href={`/projects/${projectId}`}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <ArrowLeft size={16} />
              <span>Back to Project</span>
            </Button>
          </Link>
          <div className="flex items-center space-x-2 text-gray-600">
            <Folder size={16} />
            <span className="font-medium">{currentProject.name}</span>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-lg shadow-lg">
        <ChatInterface
          contextId={projectId}
          contextType="project"
          contextName={currentProject.name}
        />
      </div>
    </div>
  );
}
