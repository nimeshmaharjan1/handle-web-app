import { Outlet } from "react-router-dom";
import DashboardHeader from "./_components/layout/header";
import DashboardSidebar from "./_components/layout/sidebar";

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex flex-col">
        <DashboardHeader></DashboardHeader>
        <main className="flex container mx-auto flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
