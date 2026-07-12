import { apiRequest } from "./apiClient";

// Dashboard Report
export const getDashboardReport = async () => {
  return await apiRequest("/dashboard");
};

// Operational Summary Report
export const getOperationalReport = async () => {
  return await apiRequest("/reports");
};
