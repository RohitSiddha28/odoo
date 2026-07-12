import React from "react";
import { useNavigate } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";

const AddVehicle = () => {
  const navigate = useNavigate();

  const handleAddVehicle = async (vehicleData) => {
    try {
      // TODO: Replace with API call
      console.log("Vehicle Data:", vehicleData);

      /*
      Example:
      await axios.post(
        "http://localhost:5000/api/vehicles",
        vehicleData
      );
      */

      alert("Vehicle Added Successfully!");

      navigate("/vehicles");
    } catch (error) {
      console.error(error);
      alert("Failed to add vehicle.");
    }
  };

  return (
    <div className="p-6">

      {/* Heading */}
      <div className="mb-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Add Vehicle
        </h1>

        <p className="text-gray-500 mt-1">
          Register a new vehicle to the fleet.
        </p>

      </div>

      {/* Vehicle Form */}
      <VehicleForm
        onSubmit={handleAddVehicle}
      />

    </div>
  );
};

export default AddVehicle;