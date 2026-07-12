import React from "react";

const colors = {
  Available: "bg-green-500",
  Completed: "bg-green-600",
  "In Shop": "bg-orange-500",
  Active: "bg-orange-500",
  Pending: "bg-yellow-500",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-md text-white text-sm font-medium ${
        colors[status] || "bg-gray-500"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;