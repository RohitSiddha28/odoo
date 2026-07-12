import React, { useState, useEffect } from "react";

const VehicleForm = ({
  initialData = {},
  onSubmit,
  isEdit = false,
}) => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    vehicleName: "",
    vehicleType: "",
    maxLoadCapacity: "",
    odometer: "",
    acquisitionCost: "",
    status: "AVAILABLE",
    region: "",
  });

  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        registrationNumber: initialData.registrationNumber || "",
        vehicleName: initialData.vehicleName || "",
        vehicleType: initialData.vehicleType || "",
        maxLoadCapacity: initialData.maxLoadCapacity || "",
        odometer: initialData.odometer || "",
        acquisitionCost: initialData.acquisitionCost || "",
        status: initialData.status || "AVAILABLE",
        region: initialData.region || "",
      });
    }
  }, [initialData, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.registrationNumber ||
      !formData.vehicleName ||
      !formData.vehicleType
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isEdit ? "Edit Vehicle" : "Add New Vehicle"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Registration Number */}
        <div>
          <label className="block mb-2 font-medium">
            Registration Number *
          </label>

          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            disabled={isEdit}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Vehicle Name */}
        <div>
          <label className="block mb-2 font-medium">
            Vehicle Name *
          </label>

          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block mb-2 font-medium">
            Vehicle Type
          </label>

          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="">Select</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Mini Truck">Mini Truck</option>
            <option value="Pickup">Pickup</option>
          </select>
        </div>

        {/* Capacity */}
        <div>
          <label className="block mb-2 font-medium">
            Max Load Capacity (kg)
          </label>

          <input
            type="number"
            name="maxLoadCapacity"
            value={formData.maxLoadCapacity}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Odometer */}
        <div>
          <label className="block mb-2 font-medium">
            Odometer
          </label>

          <input
            type="number"
            name="odometer"
            value={formData.odometer}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Acquisition Cost */}
        <div>
          <label className="block mb-2 font-medium">
            Acquisition Cost
          </label>

          <input
            type="number"
            name="acquisitionCost"
            value={formData.acquisitionCost}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Region */}
        <div>
          <label className="block mb-2 font-medium">
            Region
          </label>

          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="AVAILABLE">Available</option>
            <option value="ON_TRIP">On Trip</option>
            <option value="IN_SHOP">In Shop</option>
            <option value="RETIRED">Retired</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            type="reset"
            className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isEdit ? "Update Vehicle" : "Add Vehicle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;