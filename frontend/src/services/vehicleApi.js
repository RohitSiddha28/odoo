import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/vehicles",
});

// Get all vehicles
export const getVehicles = async () => {
  return await API.get("/");
};

// Get vehicle by ID
export const getVehicleById = async (id) => {
  return await API.get(`/${id}`);
};

// Create vehicle
export const createVehicle = async (vehicleData) => {
  return await API.post("/", vehicleData);
};

// Update vehicle
export const updateVehicle = async (id, vehicleData) => {
  return await API.put(`/${id}`, vehicleData);
};

// Delete vehicle
export const deleteVehicle = async (id) => {
  return await API.delete(`/${id}`);
};

// Update vehicle status
export const updateVehicleStatus = async (id, status) => {
  return await API.patch(`/${id}/status`, {
    status,
  });
};

// Search vehicles
export const searchVehicles = async (keyword) => {
  return await API.get(`/search?keyword=${keyword}`);
};

// Filter vehicles
export const filterVehicles = async (params) => {
  return await API.get("/", {
    params,
  });
};