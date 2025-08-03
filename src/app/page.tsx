"use client";

import Link from "next/link";
import { ArrowRight, Zap, MessageSquare, Folder, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Conversations",
      description:
        "Chat with your entire project or individual files to get instant insights and explanations.",
    },
    {
      icon: Folder,
      title: "Project Management",
      description:
        "Organize and manage multiple projects with an intuitive file structure.",
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      description:
        "Get immediate feedback and analysis on your code, documentation, and project structure.",
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description:
        "Share insights and collaborate with your team through intelligent conversations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative maindtec-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your AI-Powered
              <br />
              <span className="text-yellow-300">Workspace</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your project files into interactive conversations. Get
              instant insights, explanations, and analysis from your codebase
              with the power of AI.
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="secondary"
                  className="flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white  hover:text-maindtec-blue"
                >
                  Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="maindtec-text-gradient">MAindTec</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of project management with AI-driven
              insights and seamless collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="maindtec-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers who are already using MAindTec to
            streamline their project management and boost productivity.
          </p>
          <Link href="/projects">
            <Button size="lg" className="flex items-center space-x-2 mx-auto">
              <span>Start Building</span>
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
