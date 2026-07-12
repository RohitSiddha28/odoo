import React from "react";
import {
  FaTruck,
  FaCheckCircle,
  FaTools,
  FaRoute,
  FaGasPump,
  FaMoneyBillWave,
  FaChartLine,
  FaChartPie,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ReportCard from "../components/ReportCard";

const Dashboard = () => {
  // Dummy data (Replace with API later)

  const stats = [
    {
      title: "Active Vehicles",
      value: 24,
      icon: <FaTruck />,
      color: "blue",
      change: "+2 Today",
    },
    {
      title: "Available",
      value: 18,
      icon: <FaCheckCircle />,
      color: "green",
      change: "75%",
    },
    {
      title: "In Shop",
      value: 4,
      icon: <FaTools />,
      color: "yellow",
      change: "Scheduled",
    },
    {
      title: "On Trip",
      value: 12,
      icon: <FaRoute />,
      color: "purple",
      change: "Running",
    },
  ];

  const reports = [
    {
      title: "Fuel Efficiency",
      value: "12.4 km/L",
      subtitle: "Average",
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
      subtitle: "Vehicles in use",
      icon: <FaChartPie />,
      color: "blue",
    },
    {
      title: "ROI",
      value: "23%",
      subtitle: "Vehicle Return",
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
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome to TransitOps Fleet Management System
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
                change={item.change}
              />
            ))}
          </div>

          {/* Reports */}
          <h2 className="text-2xl font-semibold mb-5">
            Fleet Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {reports.map((item, index) => (
              <ReportCard
                key={index}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>

          {/* Placeholder for Charts */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Fleet Analytics
            </h2>

            <div className="h-72 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg">
                Charts will be displayed here (Recharts)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;