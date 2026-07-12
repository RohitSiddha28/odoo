import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTruck,
  FaChartBar,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/",
    },
    {
      name: "Vehicles",
      icon: <FaTruck />,
      path: "/vehicles",
    },
    {
      name: "Add Vehicle",
      icon: <FaPlusCircle />,
      path: "/vehicles/add",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/reports",
    },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          TransitOps
        </h1>
        <p className="text-xs text-gray-400 mt-1">
          Smart Transport Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white border-r-4 border-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
