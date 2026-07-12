import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with API call

    const dummyVehicle = {
      registrationNumber: "WB74AB1234",
      vehicleName: "Van-05",
      vehicleType: "Van",
      maxLoadCapacity: 500,
      odometer: 12000,
      acquisitionCost: 900000,
      status: "AVAILABLE",
      region: "North",
    };

    setVehicle(dummyVehicle);
    setLoading(false);

    /*
    Example API:

    const fetchVehicle = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/vehicles/${id}`
        );

        setVehicle(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
    */
  }, [id]);

  const handleUpdateVehicle = async (updatedVehicle) => {
    try {
      console.log("Updated Vehicle:", updatedVehicle);

      /*
      await axios.put(
        `http://localhost:5000/api/vehicles/${id}`,
        updatedVehicle
      );
      */

      alert("Vehicle Updated Successfully!");

      navigate("/vehicles");
    } catch (error) {
      console.error(error);
      alert("Failed to update vehicle.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">
          Loading Vehicle...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Heading */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Edit Vehicle
        </h1>

        <p className="text-gray-500 mt-1">
          Update vehicle details.
        </p>
      </div>

      {/* Vehicle Form */}

      <VehicleForm
        initialData={vehicle}
        isEdit={true}
        onSubmit={handleUpdateVehicle}
      />

    </div>
  );
};

export default EditVehicle;