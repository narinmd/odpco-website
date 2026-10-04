import { Suspense } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Suspense fallback={<div className="p-6">Loading Dashboard...</div>}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="flex-1 w-full min-h-screen bg-[var(--brand-light-gray)] p-6">
          <SidebarTrigger className="mb-6 bg-white border border-[var(--brand-gray-border-form)]" />

          <div className="w-full">{children}</div>
        </main>
      </SidebarProvider>
    </Suspense>
  );
}
