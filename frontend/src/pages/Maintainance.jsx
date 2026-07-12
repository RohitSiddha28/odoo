import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import MaintenanceForm from "../components/MaintainanceForm";
import MaintenanceTable from "../components/MaintenanceTable";
import SearchBar from "../components/SearchBar";
import PageHeader from "../components/PageHeader";

import {
  getMaintenances,
  createMaintenance,
} from "../services/maintenanceApi";

const Maintenance = () => {
  const [maintenances, setMaintenances] = useState([]);
  const [filteredMaintenances, setFilteredMaintenances] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMaintenances = async () => {
    try {
      setLoading(true);

      const res = await getMaintenances();

      setMaintenances(res.data.maintenances);
      setFilteredMaintenances(res.data.maintenances);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch maintenance records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaintenances();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredMaintenances(maintenances);
      return;
    }

    const filtered = maintenances.filter((item) => {
      const vehicleName =
        item.vehicle?.vehicleName ||
        item.vehicle?.registrationNumber ||
        "";

      return vehicleName
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setFilteredMaintenances(filtered);
  }, [search, maintenances]);

  const handleAddMaintenance = async (formData) => {
    try {
      await createMaintenance(formData);

      fetchMaintenances();

      alert("Maintenance Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to create maintenance");
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#101010] text-white p-8">

        <PageHeader title="Maintenance" />

        <div className="my-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="xl:col-span-1">

            <MaintenanceForm
              onSubmit={handleAddMaintenance}
            />

          </div>

          {/* RIGHT */}

          <div className="xl:col-span-2">

            {loading ? (
              <div className="bg-[#181818] rounded-xl p-10 text-center text-lg">
                Loading...
              </div>
            ) : (
              <MaintenanceTable
                data={filteredMaintenances}
              />
            )}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default Maintenance;