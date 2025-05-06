import { useEffect, useState } from "react";
// import { Users, DollarSign, Activity, TrendingUp } from "react-feather"; // Import icons
import Header from "./layout/Header";
import StatCard from "./StatCard";
import LineChartComponent from "./charts/LineChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import ActivityFeed from "./ActivityFeed";

import { Clock, TrendingUp, Users, DollarSign, Activity, RefreshCw } from 'lucide-react';

// Function to generate random data (replace with actual data generation logic)
const generateRandomData = () => {
  return {
    totalUsers: Math.floor(Math.random() * 10000),
    revenue: Math.floor(Math.random() * 500000),
    conversion: (Math.random() * 100).toFixed(1),
    growth: (Math.random() * 10).toFixed(1),
    salesData: [
      { name: "Jan", value: Math.floor(Math.random() * 1000) },
      { name: "Feb", value: Math.floor(Math.random() * 1000) },
      { name: "Mar", value: Math.floor(Math.random() * 1000) },
    ], // Mock data
    trafficData: [
      { name: "Organic", value: Math.floor(Math.random() * 1000) },
      { name: "Paid", value: Math.floor(Math.random() * 1000) },
      { name: "Referral", value: Math.floor(Math.random() * 1000) },
    ], // Mock data
    userActivityData: [
      { name: "Active", value: Math.floor(Math.random() * 1000) },
      { name: "Inactive", value: Math.floor(Math.random() * 1000) },
    ], // Mock data
  };
};

// Main Dashboard App
export default function Dashboard() {
  const [data, setData] = useState(generateRandomData());
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refreshData = () => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setData(generateRandomData());
      setLastUpdated(new Date());
      setLoading(false);
    }, 800);
  };

  // Auto refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(refreshData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with refresh button */}
        <Header lastUpdated={lastUpdated} refreshData={refreshData} loading={loading} />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Users"
            value={data.totalUsers.toLocaleString()}
            icon={Users}
            trend={3.2}
            color="blue"
          />
          <StatCard
            title="Total Revenue"
            value={`$${data.revenue.toLocaleString()}`}
            icon={DollarSign}
            trend={2.4}
            color="green"
          />
          <StatCard
            title="Conversion Rate"
            value={`${data.conversion}%`}
            icon={Activity}
            trend={-0.5}
            color="yellow"
          />
          <StatCard
            title="Growth Rate"
            value={`${data.growth}%`}
            icon={TrendingUp}
            trend={1.8}
            color="purple"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <LineChartComponent data={data.salesData} title="Sales Overview" />
          <PieChartComponent data={data.trafficData} title="Traffic Sources" />
        </div>

        {/* Charts Row 2 */}
        <BarChartComponent data={data.userActivityData} title="User Activity" />

        {/* Recent Updates Panel */}
        <ActivityFeed Users={Users} />
      </div>
    </div>
  );
}
