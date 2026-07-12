import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VehicleTable from "../components/VehicleTable";

const Vehicles = () => {
  const navigate = useNavigate();

  // Dummy Data (Replace with API later)
  const [vehicles, setVehicles] = useState([
    {
      _id: "1",
      registrationNumber: "WB74AB1234",
      vehicleName: "Van-05",
      vehicleType: "Van",
      maxLoadCapacity: 500,
      odometer: 12000,
      acquisitionCost: 900000,
      status: "AVAILABLE",
      region: "North",
    },
    {
      _id: "2",
      registrationNumber: "WB74CD5678",
      vehicleName: "Truck-02",
      vehicleType: "Truck",
      maxLoadCapacity: 1500,
      odometer: 28000,
      acquisitionCost: 1800000,
      status: "ON_TRIP",
      region: "South",
    },
    {
      _id: "3",
      registrationNumber: "WB74EF9876",
      vehicleName: "Mini Truck-01",
      vehicleType: "Mini Truck",
      maxLoadCapacity: 900,
      odometer: 17000,
      acquisitionCost: 1100000,
      status: "IN_SHOP",
      region: "East",
    },
  ]);

  // Edit Vehicle
  const handleEdit = (vehicle) => {
    navigate(`/vehicles/edit/${vehicle._id}`);
  };

  // Delete Vehicle
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vehicle?"
    );

    if (!confirmDelete) return;

    // Later replace with API call
    setVehicles((prev) => prev.filter((v) => v._id !== id));

    alert("Vehicle deleted successfully.");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        <div className="p-6">

          {/* Heading */}
          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Vehicles
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all fleet vehicles.
              </p>
            </div>

            {/* Add Vehicle Button */}
            <button
              onClick={() => navigate("/vehicles/add")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <FaPlus />
              Add Vehicle
            </button>

          </div>

          {/* Vehicle Table */}
          <VehicleTable
            vehicles={vehicles}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

      </div>

    </div>
  );
};

export default Vehicles;