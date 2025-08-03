"use client";

import Link from "next/link";
import { Calendar, FileText, MessageSquare } from "lucide-react";
import { Project } from "@/lib/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <Card hover className="p-6">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {project.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <FileText size={16} />
              <span>{project.files.length} files</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>Updated {formatDate(project.lastAccessed)}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-4 border-t border-gray-100">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Link href={`/projects/${project.id}/chat`}>
            <Button variant="primary" className="flex items-center space-x-1">
              <MessageSquare size={16} />
              <span>Chat</span>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
