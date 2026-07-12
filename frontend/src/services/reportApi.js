import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/reports",
});

// Dashboard Report
export const getDashboardReport = async () => {
  return await API.get("/dashboard");
};

// Fuel Efficiency Report
export const getFuelEfficiency = async () => {
  return await API.get("/fuel-efficiency");
};

// Operational Cost Report
export const getOperationalCost = async () => {
  return await API.get("/operational-cost");
};

// Fleet Utilization Report
export const getFleetUtilization = async () => {
  return await API.get("/fleet-utilization");
};

// ROI Report
export const getROIReport = async () => {
  return await API.get("/roi");
};

// Vehicle Summary Report
export const getVehicleSummary = async () => {
  return await API.get("/vehicle-summary");
};

// Export CSV
export const exportCSV = async () => {
  return await API.get("/export/csv", {
    responseType: "blob",
  });
};