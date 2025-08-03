import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

function Security() {
  return (
    <div className="space-y-6">
      {/* Password */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Password & Security
        </h3>
        <div className="space-y-4">
          <Input
            label="Current Password"
            type="password"
            placeholder="Enter your current password"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="New Password"
              type="password"
              placeholder="Enter new password"
            />
            <Input
              label="Confirm New Password"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
          <div className="flex justify-end">
            <Button>Update Password</Button>
          </div>
        </div>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Two-Factor Authentication
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">
              Two-Factor Authentication
            </p>
            <p className="text-xs text-gray-600">
              Add an extra layer of security to your account
            </p>
          </div>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </Card>

      {/* Session Management */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Active Sessions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Current Session
              </p>
              <p className="text-xs text-gray-600">
                Chrome on Windows • Bengaluru, Karnataka
              </p>
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Mobile Session
              </p>
              <p className="text-xs text-gray-600">
                Safari on iPhone • 2 hours ago
              </p>
            </div>
            <Button variant="outline" size="sm">
              Revoke
            </Button>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200">
        <h3 className="text-lg font-semibold text-red-900 mb-6">Danger Zone</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-900">Delete Account</p>
              <p className="text-xs text-red-600">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Button
              variant="outline"
              className="text-red-600 border-red-300 hover:bg-red-50"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Security;
