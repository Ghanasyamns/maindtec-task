"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { mockUser } from "@/lib/mockData";
import { Activity, LogOut, SettingsIcon, Shield, User } from "lucide-react";
import { useState } from "react";
import Overview from "./components/Overview";
import Security from "./components/Security";
import Settings from "./components/Settings";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const user = mockUser;

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "settings", label: "Settings", icon: SettingsIcon },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-3 md:p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 maindtec-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mt-2">
                Pro User
              </span>
            </div>

            {/* Navigation Tabs */}
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "maindtec-gradient text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full flex items-center space-x-2 text-red-600 border-red-300 hover:bg-red-50"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "overview" && <Overview />}

          {activeTab === "settings" && <Settings />}

          {activeTab === "security" && <Security />}
        </div>
      </div>
    </div>
  );
}
