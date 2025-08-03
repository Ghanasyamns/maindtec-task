"use client";

import Link from "next/link";
import { FileText, MessageSquare, Calendar } from "lucide-react";
import Card from "../../../../components/ui/Card";
import Button from "../../../../components/ui/Button";
import { FileItem } from "@/lib/types";

interface FileListProps {
  files: FileItem[];
  projectId: string;
}

export default function FileList({ files, projectId }: FileListProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = () => {
    return <FileText size={20} className="text-maindtec-blue" />;
  };

  return (
    <div className="space-y-3">
      {files.map((file) => (
        <Card key={file.id} hover className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {getFileIcon()}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {file.name}
                </h4>
                <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                  <span>{file.type.toUpperCase()}</span>
                  <span>{formatFileSize(file.size)}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                      }).format(file.lastModified)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link href={`/projects/${projectId}/chat/file/${file.id}`}>
              <Button
                variant="primary"
                size="sm"
                className="flex items-center space-x-1"
              >
                <MessageSquare size={14} />
                <span className="hidden sm:inline">Chat</span>
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
