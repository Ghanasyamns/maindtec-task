import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { mockUser } from "@/lib/mockData";
import { Bell, Download, SettingsIcon } from "lucide-react";
import React, { useState } from "react";

const user = mockUser;

function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    autoSave: true,
    darkMode: false,
    updates: true,
  });
  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Profile Settings
        </h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              defaultValue={user.name}
              placeholder="Enter your full name"
            />
            <Input
              label="Email Address"
              type="email"
              defaultValue={user.email}
              placeholder="Enter your email"
            />
          </div>
          <Input
            label="Bio"
            placeholder="Tell us about yourself"
            defaultValue="AI enthusiast and developer passionate about creating innovative solutions."
          />
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </Card>

      {/* Notification Preferences */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Email Notifications
                </p>
                <p className="text-xs text-gray-600">
                  Receive updates about your projects and conversations
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification("email")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.email ? "bg-maindtec-blue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.email ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Download size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Auto-save Conversations
                </p>
                <p className="text-xs text-gray-600">
                  Automatically save your chat history
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification("autoSave")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.autoSave ? "bg-maindtec-blue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.autoSave ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SettingsIcon size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Product Updates
                </p>
                <p className="text-xs text-gray-600">
                  Get notified about new features and improvements
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleNotification("updates")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.updates ? "bg-maindtec-blue" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.updates ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Appearance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Dark Mode</p>
              <p className="text-xs text-gray-600">
                Switch to dark theme interface
              </p>
            </div>
            <button
              onClick={() => toggleNotification("darkMode")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.darkMode ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Settings;
