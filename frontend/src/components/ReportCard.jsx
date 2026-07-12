import React from "react";

const ReportCard = ({
  title,
  value,
  subtitle,
  icon,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    red: "bg-red-100 text-red-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">
            {title}
          </h3>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          {subtitle && (
            <p className="text-sm text-gray-500 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${colorClasses[color]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;