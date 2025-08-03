"use client";

import { useChatStore } from "@/store/store";
import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Input from "./ui/Input";

const messageSchema = z.object({
  content: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1000, "Message too long"),
});

interface ChatInterfaceProps {
  contextId: string;
  contextType: "project" | "file";
  contextName: string;
}

export default function ChatInterface({
  contextId,
  contextType,
  contextName,
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { getChatState, addMessage, setLoading } = useChatStore();
  const chatState = getChatState(contextId, contextType);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const validatedMessage = messageSchema.parse({ content: input.trim() });

      // Add user message
      addMessage(contextId, {
        content: validatedMessage.content,
        sender: "user",
        ...(contextType === "project"
          ? { projectId: contextId }
          : { fileId: contextId }),
      });

      setInput("");
      setLoading(contextId, true);

      // Simulate AI response
      setTimeout(() => {
        const aiResponses = [
          `I can help you understand the ${contextName}. What specific aspect would you like to explore?`,
          `Based on the ${
            contextType === "project" ? "project structure" : "file content"
          }, here's what I found...`,
          `That's an interesting question about ${contextName}. Let me analyze this for you.`,
          `I see you're working with ${contextName}. Here are some insights that might help.`,
          `Great question! This ${contextType} has some interesting characteristics. Let me break it down for you.`,
          `I've analyzed the content and here's what stands out...`,
          `Is there a particular function or section you'd like me to explain?`,
          `I can help you refactor this code. What are your goals?`,
          `What do you want to know about this file/project?`,
          `Let's break down the logic together. Where should we start?`,
        ];

        const randomResponse =
          aiResponses[Math.floor(Math.random() * aiResponses.length)];

        addMessage(contextId, {
          content: randomResponse,
          sender: "ai",
          ...(contextType === "project"
            ? { projectId: contextId }
            : { fileId: contextId }),
        });

        setLoading(contextId, false);
      }, 1000 + Math.random() * 2000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.message);
      } else {
        setError("Failed to send message");
      }
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-200px)]">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 rounded-t-lg">
        <h3 className="font-semibold text-gray-900">
          Chatting with {contextType === "project" ? "Project" : "File"}:{" "}
          {contextName}
        </h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-[300px]">
        {chatState.messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <Bot size={48} className="mx-auto mb-4 text-gray-400" />
            <p>Start a conversation about {contextName}</p>
          </div>
        ) : (
          chatState.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "maindtec-gradient text-white"
                    : "bg-white text-gray-900 shadow-sm border border-gray-200"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "ai" && (
                    <Bot
                      size={16}
                      className="text-maindtec-blue mt-1 flex-shrink-0"
                    />
                  )}
                  {message.sender === "user" && (
                    <User size={16} className="text-white mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {chatState.isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 shadow-sm border border-gray-200 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <Bot size={16} className="text-maindtec-blue" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <Card className="p-4 border-t-0 rounded-t-none">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <div className="flex-1">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask about ${contextName}...`}
              error={error}
              disabled={chatState.isLoading}
              className="border-gray-300 focus:ring-maindtec-blue"
            />
          </div>
          <Button
            type="submit"
            disabled={!input.trim() || chatState.isLoading}
            className="flex items-center space-x-1"
          >
            <Send size={16} />
            <span className="hidden sm:inline">Send</span>
          </Button>
        </form>
      </Card>
    </div>
  );
}
