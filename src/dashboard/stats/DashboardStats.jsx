import NewCustomersChart from "./NewCustomersChart";
import StatsCards from "./StatsCards";
import SuccessRate from "./SuccessRate";

const DashboardStats = () => {
  return (
    <div className="flex justify-evenly items-center md:grid-cols-3 gap-6 mb-8">
      <NewCustomersChart />
      <SuccessRate />
      <StatsCards />
    </div>
  );
};

export default DashboardStats;