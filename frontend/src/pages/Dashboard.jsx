import { useEffect, useMemo, useState } from "react";
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
import { getDashboardReport, getOperationalReport } from "../services/reportApi";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setError("");
        const [dashboardRes, reportRes] = await Promise.all([
          getDashboardReport(),
          getOperationalReport(),
        ]);

        setDashboard(dashboardRes.dashboard);
        setReport(reportRes.report);
      } catch (err) {
        setError(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const stats = useMemo(
    () => [
      {
        title: "Active Vehicles",
        value: dashboard?.activeVehicles ?? 0,
        icon: <FaTruck />,
        color: "blue",
        change: "On trip",
      },
      {
        title: "Available",
        value: dashboard?.availableVehicles ?? 0,
        icon: <FaCheckCircle />,
        color: "green",
        change: "Ready",
      },
      {
        title: "In Shop",
        value: dashboard?.vehiclesInMaintenance ?? 0,
        icon: <FaTools />,
        color: "yellow",
        change: "Maintenance",
      },
      {
        title: "Active Trips",
        value: dashboard?.activeTrips ?? 0,
        icon: <FaRoute />,
        color: "purple",
        change: `${dashboard?.pendingTrips ?? 0} pending`,
      },
    ],
    [dashboard]
  );

  const reports = useMemo(
    () => [
      {
        title: "Fuel Cost",
        value: formatCurrency(report?.totalFuelCost),
        subtitle: "Total fuel spend",
        icon: <FaGasPump />,
        color: "green",
      },
      {
        title: "Operational Cost",
        value: formatCurrency(report?.totalOperationalCost),
        subtitle: "Fuel + expenses",
        icon: <FaMoneyBillWave />,
        color: "red",
      },
      {
        title: "Fleet Utilization",
        value: `${dashboard?.fleetUtilization ?? 0}%`,
        subtitle: "Vehicles currently active",
        icon: <FaChartPie />,
        color: "blue",
      },
      {
        title: "Total Drivers",
        value: report?.totalDrivers ?? 0,
        subtitle: `${dashboard?.driversOnDuty ?? 0} on duty`,
        icon: <FaChartLine />,
        color: "purple",
      },
    ],
    [dashboard, report]
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome to TransitOps Fleet Management System
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="mb-6 rounded-lg bg-white px-4 py-3 text-gray-600 shadow-sm">
              Loading dashboard data...
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {stats.map((item) => (
              <StatCard
                key={item.title}
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
                change={item.change}
              />
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-5">
            Fleet Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {reports.map((item) => (
              <ReportCard
                key={item.title}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Fleet Analytics
            </h2>

            <div className="h-72 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 text-lg">
                Live chart visualizations can be added once chart endpoints are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
