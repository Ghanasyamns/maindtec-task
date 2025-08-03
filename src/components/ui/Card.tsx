import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 ${
        hover
          ? "hover:shadow-lg hover:border-maindtec-blue/20 transition-all duration-200"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
