import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { createVehicle } from "../services/vehicleApi";

const normalizeVehiclePayload = (vehicleData) => ({
  ...vehicleData,
  maxLoadCapacity: Number(vehicleData.maxLoadCapacity) || 0,
  odometer: Number(vehicleData.odometer) || 0,
  acquisitionCost: Number(vehicleData.acquisitionCost) || 0,
});

const AddVehicle = () => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleAddVehicle = async (vehicleData) => {
    try {
      setSaving(true);
      setError("");
      await createVehicle(normalizeVehiclePayload(vehicleData));

      alert("Vehicle Added Successfully!");
      navigate("/vehicles");
    } catch (err) {
      setError(err.message || "Failed to add vehicle.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Add Vehicle
            </h1>

            <p className="text-gray-500 mt-1">
              Register a new vehicle to the fleet.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          {saving && (
            <div className="mb-6 rounded-lg bg-white px-4 py-3 text-gray-600 shadow-sm">
              Saving vehicle...
            </div>
          )}

          <VehicleForm onSubmit={handleAddVehicle} />
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
