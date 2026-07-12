import { useEffect, useMemo, useState } from "react";
import {
  FaGasPump,
  FaMoneyBillWave,
  FaChartLine,
  FaTruck,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";
import { getOperationalReport } from "../services/reportApi";
import { getVehicles } from "../services/vehicleApi";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

const Reports = () => {
  const [report, setReport] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        setError("");
        const [reportRes, vehicleRes] = await Promise.all([
          getOperationalReport(),
          getVehicles(),
        ]);

        setReport(reportRes.report);
        setVehicles(vehicleRes.vehicles || []);
      } catch (err) {
        setError(err.message || "Failed to load reports.");
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const fleetUtilization = useMemo(() => {
    const totalVehicles = report?.totalVehicles || 0;
    const activeTrips = report?.activeTrips || 0;

    if (!totalVehicles) return 0;

    return ((activeTrips / totalVehicles) * 100).toFixed(2);
  }, [report]);

  const reports = [
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
      value: `${fleetUtilization}%`,
      subtitle: "Active trips against total vehicles",
      icon: <FaTruck />,
      color: "blue",
    },
    {
      title: "Available Vehicles",
      value: report?.availableVehicles ?? 0,
      subtitle: `${report?.totalVehicles ?? 0} total vehicles`,
      icon: <FaChartLine />,
      color: "purple",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Reports & Analytics
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor fleet performance, operational costs, and overall
              transport efficiency.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="mb-6 rounded-lg bg-white px-4 py-3 text-gray-600 shadow-sm">
              Loading reports...
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Cost Breakdown
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Fuel</span>
                    <span>{formatCurrency(report?.totalFuelCost)}</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-gray-100">
                    <div className="h-3 rounded-full bg-green-500" style={{ width: "55%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Expenses</span>
                    <span>{formatCurrency(report?.totalExpense)}</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-gray-100">
                    <div className="h-3 rounded-full bg-red-500" style={{ width: "35%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Fleet Snapshot
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm text-blue-700">Total Vehicles</p>
                  <p className="mt-2 text-2xl font-bold text-blue-900">
                    {report?.totalVehicles ?? 0}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm text-green-700">Total Drivers</p>
                  <p className="mt-2 text-2xl font-bold text-green-900">
                    {report?.totalDrivers ?? 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Vehicle Report Summary
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Vehicle</th>
                    <th className="px-4 py-3 text-left">Registration</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Odometer</th>
                    <th className="px-4 py-3 text-left">Acquisition Cost</th>
                  </tr>
                </thead>

                <tbody>
                  {vehicles.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                        No vehicle data available.
                      </td>
                    </tr>
                  ) : (
                    vehicles.map((vehicle) => (
                      <tr key={vehicle._id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">{vehicle.vehicleName || "-"}</td>
                        <td className="px-4 py-3">{vehicle.registrationNumber}</td>
                        <td className="px-4 py-3">{vehicle.status}</td>
                        <td className="px-4 py-3">{vehicle.odometer || 0} km</td>
                        <td className="px-4 py-3">
                          {formatCurrency(vehicle.acquisitionCost)}
                        </td>
                      </tr>
                    ))
                  )}
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
