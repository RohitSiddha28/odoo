import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getVehicleById, updateVehicle } from "../services/vehicleApi";

const normalizeVehiclePayload = (vehicleData) => ({
  ...vehicleData,
  maxLoadCapacity: Number(vehicleData.maxLoadCapacity) || 0,
  odometer: Number(vehicleData.odometer) || 0,
  acquisitionCost: Number(vehicleData.acquisitionCost) || 0,
});

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setError("");
        const res = await getVehicleById(id);
        setVehicle(res.vehicle);
      } catch (err) {
        setError(err.message || "Failed to load vehicle.");
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const handleUpdateVehicle = async (updatedVehicle) => {
    try {
      setSaving(true);
      setError("");
      await updateVehicle(id, normalizeVehiclePayload(updatedVehicle));

      alert("Vehicle Updated Successfully!");
      navigate("/vehicles");
    } catch (err) {
      setError(err.message || "Failed to update vehicle.");
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
              Edit Vehicle
            </h1>

            <p className="text-gray-500 mt-1">
              Update vehicle details.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="rounded-lg bg-white px-4 py-8 text-center text-gray-600 shadow-sm">
              Loading vehicle...
            </div>
          )}

          {saving && (
            <div className="mb-6 rounded-lg bg-white px-4 py-3 text-gray-600 shadow-sm">
              Saving vehicle...
            </div>
          )}

          {!loading && vehicle && (
            <VehicleForm
              initialData={vehicle}
              isEdit={true}
              onSubmit={handleUpdateVehicle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditVehicle;
