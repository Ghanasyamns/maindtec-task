import Card from "@/components/ui/Card";
import React from "react";

export const FileProps = ({
  value,
  property,
  icon,
}: {
  value: number;
  property: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 maindtec-gradient rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-600">{property}</p>
        </div>
      </div>
    </Card>
  );
};
