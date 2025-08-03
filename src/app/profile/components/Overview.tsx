import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { mockUser } from "@/lib/mockData";
import { Calendar, Globe, Mail, TrendingUp, User } from "lucide-react";
import React from "react";
const user = mockUser;

const stats = [
  { label: "Total Projects", value: "3", icon: "📁", trend: "+12%" },
  { label: "Total Files", value: "7", icon: "📄", trend: "+8%" },
  { label: "Conversations", value: "24", icon: "💬", trend: "+35%" },
  { label: "Days Active", value: "45", icon: "⚡", trend: "+2 days" },
];

const recentActivity = [
  {
    type: "chat",
    title: "Started conversation with E-commerce Platform",
    time: "2 hours ago",
    icon: "💬",
  },
  {
    type: "file",
    title: "Analyzed app.tsx in E-commerce Platform",
    time: "5 hours ago",
    icon: "📄",
  },
  {
    type: "project",
    title: "Created new project: AI Chat Bot",
    time: "1 day ago",
    icon: "📁",
  },
  {
    type: "chat",
    title: "Had conversation about Mobile App Design",
    time: "2 days ago",
    icon: "💬",
  },
  {
    type: "file",
    title: "Uploaded requirements.txt to AI Chat Bot",
    time: "2 days ago",
    icon: "📄",
  },
];

function Overview() {
  return (
    <div className="space-y-6">
      {/* Usage Statistics */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Usage Statistics
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp size={16} />
            <span>Last 30 days</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Account Overview */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Account Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Email Address
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Member Since
                </p>
                <p className="text-sm text-gray-600">January 15, 2024</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Account Type
                </p>
                <p className="text-sm text-gray-600">Pro User</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Timezone</p>
                <p className="text-sm text-gray-600">UTC+05:30 (IST)</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Recent Activity
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 maindtec-gradient rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">{activity.icon}</span>
              </div>
              <div className="md:flex-1 md:min-w-0">
                <p className="text-sm font-medium text-gray-900 md:truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View All Activity
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Overview;
