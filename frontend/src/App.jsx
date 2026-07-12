import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/add" element={<AddVehicle />} />
        <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;