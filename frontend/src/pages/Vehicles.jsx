import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VehicleTable from "../components/VehicleTable";
import { deleteVehicle, getVehicles } from "../services/vehicleApi";

const Vehicles = () => {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchVehicles = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await getVehicles();
      setVehicles(res.vehicles || []);
    } catch (err) {
      setError(err.message || "Failed to load vehicles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleEdit = (vehicle) => {
    navigate(`/vehicles/edit/${vehicle._id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vehicle?"
    );

    if (!confirmDelete) return;

    try {
      await deleteVehicle(id);
      setVehicles((prev) => prev.filter((v) => v._id !== id));
      alert("Vehicle deleted successfully.");
    } catch (err) {
      alert(err.message || "Failed to delete vehicle.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Vehicles
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all fleet vehicles.
              </p>
            </div>

            <button
              onClick={() => navigate("/vehicles/add")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <FaPlus />
              Add Vehicle
            </button>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          {loading ? (
            <div className="rounded-lg bg-white px-4 py-8 text-center text-gray-600 shadow-sm">
              Loading vehicles...
            </div>
          ) : (
            <VehicleTable
              vehicles={vehicles}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
