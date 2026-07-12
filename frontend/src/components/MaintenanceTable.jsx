import React from "react";
import StatusBadge from "./StatusBadge";

const MaintenanceTable = ({ data }) => {
  return (
    <div className="bg-[#171717] rounded-xl p-6 shadow-md overflow-auto">
      <h2 className="text-xl font-semibold text-white mb-5">
        Service Log
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="pb-3">Vehicle</th>
            <th>Service</th>
            <th>Cost</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className="border-b border-gray-800"
            >
              <td className="py-4 text-white">
                {item.vehicle}
              </td>

              <td className="text-gray-300">
                {item.serviceType}
              </td>

              <td className="text-gray-300">
                ₹{item.cost}
              </td>

              <td>
                <StatusBadge status={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceTable;