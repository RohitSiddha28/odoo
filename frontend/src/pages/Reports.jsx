import React from "react";
import {
  FaGasPump,
  FaMoneyBillWave,
  FaChartLine,
  FaTruck,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";

const Reports = () => {
  const reports = [
    {
      title: "Fuel Efficiency",
      value: "12.8 km/L",
      subtitle: "Average fuel efficiency",
      icon: <FaGasPump />,
      color: "green",
    },
    {
      title: "Operational Cost",
      value: "₹1,25,000",
      subtitle: "Fuel + Maintenance",
      icon: <FaMoneyBillWave />,
      color: "red",
    },
    {
      title: "Fleet Utilization",
      value: "82%",
      subtitle: "Vehicles currently active",
      icon: <FaTruck />,
      color: "blue",
    },
    {
      title: "Vehicle ROI",
      value: "24%",
      subtitle: "Average Return on Investment",
      icon: <FaChartLine />,
      color: "purple",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Reports & Analytics
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor fleet performance, operational costs, and overall
              transport efficiency.
            </p>
          </div>

          {/* Report Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {reports.map((report, index) => (
              <ReportCard
                key={index}
                title={report.title}
                value={report.value}
                subtitle={report.subtitle}
                icon={report.icon}
                color={report.color}
              />
            ))}
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Chart 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Fuel Consumption
              </h2>

              <div className="h-72 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">
                  Fuel Consumption Chart
                </p>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Fleet Utilization
              </h2>

              <div className="h-72 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">
                  Fleet Utilization Chart
                </p>
              </div>
            </div>

          </div>

          {/* Summary Table */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-xl font-semibold mb-4">
              Vehicle Report Summary
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full">

                <thead className="bg-blue-600 text-white">

                  <tr>
                    <th className="px-4 py-3 text-left">
                      Vehicle
                    </th>

                    <th className="px-4 py-3 text-left">
                      Fuel Cost
                    </th>

                    <th className="px-4 py-3 text-left">
                      Maintenance
                    </th>

                    <th className="px-4 py-3 text-left">
                      Operational Cost
                    </th>

                    <th className="px-4 py-3 text-left">
                      ROI
                    </th>
                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">Van-05</td>
                    <td className="px-4 py-3">₹15,000</td>
                    <td className="px-4 py-3">₹5,000</td>
                    <td className="px-4 py-3">₹20,000</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">
                      25%
                    </td>
                  </tr>

                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">Truck-02</td>
                    <td className="px-4 py-3">₹24,000</td>
                    <td className="px-4 py-3">₹7,500</td>
                    <td className="px-4 py-3">₹31,500</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">
                      18%
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Mini Truck-01</td>
                    <td className="px-4 py-3">₹12,500</td>
                    <td className="px-4 py-3">₹4,000</td>
                    <td className="px-4 py-3">₹16,500</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">
                      30%
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Reports;