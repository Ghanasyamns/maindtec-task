"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, MessageSquare, Calendar, FileText } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useChatStore } from "@/store/store";
import FileList from "@/app/projects/[id]/components/FileList";
import { formatDate } from "@/lib/utils";
import { FileProps } from "./components/FileProps";

export default function ProjectDetailsPage() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="flex items-center space-x-4 mb-6">
        <Link href="/projects">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Button>
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {currentProject.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4 max-w-3xl">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FileText size={16} />
                <span>{currentProject.files.length} files</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>Created {formatDate(currentProject.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>
                  Last accessed {formatDate(currentProject.lastAccessed)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <Link href={`/projects/${projectId}/chat`}>
              <Button size="lg" className="flex items-center space-x-2">
                <MessageSquare size={20} />
                <span>Chat with Project</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <FileProps
          icon={<FileText size={24} className="text-white" />}
          value={currentProject.files.length}
          property="Files"
        />
        <FileProps
          icon={<MessageSquare size={24} className="text-white" />}
          value={12}
          property="Conversations"
        />

        <FileProps
          value={Math.ceil(
            (Date.now() - currentProject.createdAt.getTime()) /
              (1000 * 60 * 60 * 24)
          )}
          property="Days Active"
          icon={<Calendar size={24} className="text-white" />}
        />
      </div>

      {/* Files Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Project Files</h2>
        </div>

        {currentProject.files.length > 0 ? (
          <FileList files={currentProject.files} projectId={projectId} />
        ) : (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No files yet
            </h3>
            <p className="text-gray-600 mb-4">
              Add some files to start chatting with your project
            </p>
            <Button>Add Files</Button>
          </div>
        )}
      </Card>
    </div>
  );
}
