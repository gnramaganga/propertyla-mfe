import DashboardInsights from "./components/DashboardInsights";
import DashboardLayout from "@/layouts/DashboardLayout";
import StatsCardGrid from "./components/StatsCardGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "foreigners buying property in Malaysia rules",
};

export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <StatsCardGrid />
        <DashboardInsights />
      </DashboardLayout>
    </>
  );
}
