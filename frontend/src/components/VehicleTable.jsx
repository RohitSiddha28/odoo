import { FaEdit, FaTrash } from "react-icons/fa";

const VehicleTable = ({
  vehicles = [],
  onEdit,
  onDelete,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-700";

      case "ON_TRIP":
        return "bg-blue-100 text-blue-700";

      case "IN_SHOP":
        return "bg-yellow-100 text-yellow-700";

      case "RETIRED":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="px-6 py-3 text-left">
                Registration
              </th>

              <th className="px-6 py-3 text-left">
                Vehicle Name
              </th>

              <th className="px-6 py-3 text-left">
                Type
              </th>

              <th className="px-6 py-3 text-left">
                Capacity
              </th>

              <th className="px-6 py-3 text-left">
                Odometer
              </th>

              <th className="px-6 py-3 text-left">
                Region
              </th>

              <th className="px-6 py-3 text-left">
                Status
              </th>

              <th className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {vehicles.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-8 text-gray-500"
                >
                  No Vehicles Found
                </td>

              </tr>

            ) : (

              vehicles.map((vehicle) => (

                <tr
                  key={vehicle._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-6 py-4">
                    {vehicle.registrationNumber}
                  </td>

                  <td className="px-6 py-4">
                    {vehicle.vehicleName}
                  </td>

                  <td className="px-6 py-4">
                    {vehicle.vehicleType}
                  </td>

                  <td className="px-6 py-4">
                    {vehicle.maxLoadCapacity} kg
                  </td>

                  <td className="px-6 py-4">
                    {vehicle.odometer} km
                  </td>

                  <td className="px-6 py-4">
                    {vehicle.region}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        vehicle.status
                      )}`}
                    >
                      {vehicle.status.replace("_", " ")}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => onEdit(vehicle)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => onDelete(vehicle._id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default VehicleTable;
