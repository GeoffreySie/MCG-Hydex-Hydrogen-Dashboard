import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { cn } from "@/lib/utils";
import DppDashboard from "@/components/ProductPassport";
import AddRouteContainer from "@/components/AddRouteContainer";
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Home() {
  return (
  <ProtectedRoute>
    <main className="">
      <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
      >
        <SidebarMenu/>
        <AddRouteContainer />
      </div>
    </main>
  </ProtectedRoute>
  );
}