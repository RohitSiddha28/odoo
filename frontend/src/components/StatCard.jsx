import React from "react";

const StatCard = ({
  title,
  value,
  icon,
  color = "blue",
  change = "",
}) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    red: "bg-red-100 text-red-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          {change && (
            <p className="text-sm text-green-600 mt-2">
              {change}
            </p>
          )}
        </div>

        {/* Right */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${colorClasses[color]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;