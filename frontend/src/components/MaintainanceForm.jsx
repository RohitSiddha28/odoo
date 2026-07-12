import React, { useState } from "react";

const MaintenanceForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    vehicle: "",
    serviceType: "",
    cost: "",
    date: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);

    setForm({
      vehicle: "",
      serviceType: "",
      cost: "",
      date: "",
      status: "Active",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#171717] rounded-xl p-6 shadow-md space-y-5"
    >
      <h2 className="text-xl font-semibold text-white">
        Log Service Record
      </h2>

      <div>
        <label className="text-gray-300">Vehicle</label>

        <input
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full mt-2 bg-[#252525] border border-gray-700 rounded-lg p-3 text-white"
        />
      </div>

      <div>
        <label className="text-gray-300">
          Service Type
        </label>

        <input
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="w-full mt-2 bg-[#252525] border border-gray-700 rounded-lg p-3 text-white"
        />
      </div>

      <div>
        <label className="text-gray-300">
          Cost
        </label>

        <input
          type="number"
          name="cost"
          value={form.cost}
          onChange={handleChange}
          className="w-full mt-2 bg-[#252525] border border-gray-700 rounded-lg p-3 text-white"
        />
      </div>

      <div>
        <label className="text-gray-300">
          Date
        </label>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mt-2 bg-[#252525] border border-gray-700 rounded-lg p-3 text-white"
        />
      </div>

      <div>
        <label className="text-gray-300">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full mt-2 bg-[#252525] border border-gray-700 rounded-lg p-3 text-white"
        >
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>

      <button
        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg text-white font-semibold"
      >
        Save Record
      </button>
    </form>
  );
};

export default MaintenanceForm;