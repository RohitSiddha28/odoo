import { apiRequest } from "./apiClient";

// Get all vehicles
export const getVehicles = async () => {
  return await apiRequest("/vehicles");
};

// Get vehicle by ID
export const getVehicleById = async (id) => {
  return await apiRequest(`/vehicles/${id}`);
};

// Create vehicle
export const createVehicle = async (vehicleData) => {
  return await apiRequest("/vehicles", {
    method: "POST",
    body: JSON.stringify(vehicleData),
  });
};

// Update vehicle
export const updateVehicle = async (id, vehicleData) => {
  return await apiRequest(`/vehicles/${id}`, {
    method: "PUT",
    body: JSON.stringify(vehicleData),
  });
};

// Delete vehicle
export const deleteVehicle = async (id) => {
  return await apiRequest(`/vehicles/${id}`, {
    method: "DELETE",
  });
};

// Update vehicle status
export const updateVehicleStatus = async (id, status) => {
  return await apiRequest(`/vehicles/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};

// Search vehicles
export const searchVehicles = async (keyword) => {
  return await apiRequest(`/vehicles/search?keyword=${encodeURIComponent(keyword)}`);
};

// Filter vehicles
export const filterVehicles = async (params) => {
  const searchParams = new URLSearchParams(params).toString();
  return await apiRequest(`/vehicles${searchParams ? `?${searchParams}` : ""}`);
};
