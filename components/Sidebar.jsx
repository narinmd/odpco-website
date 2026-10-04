"use client";

import * as React from "react";
import { useState } from "react"; // اضافه شد
import Image from "next/image";
import { Home, User, Settings, LogOut, Loader2 } from "lucide-react"; // Loader2 اضافه شد
import { signOut } from "next-auth/react"; // تابع استاندارد خروج اضافه شد
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  {
    title: "Contact Management",
    url: "/dashboard/contact-management",
    icon: Settings,
  },
];

export function AppSidebar(props) {
  // استیت برای مدیریت انیمیشن خروج نرم
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoggingOut(true); // فعال کردن حالت لودینگ

    // یک تاخیر بسیار کوتاه (۳۰۰ میلی‌ثانیه) برای دیده شدن انیمیشن و جلوگیری از پرش ناگهانی
    await new Promise((resolve) => setTimeout(resolve, 300));

    // خروج از حساب و هدایت خودکار و نرم به صفحه اصلی
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader className=" p-5 border-b border-[var(--brand-gray-credit)] ">
        <Link href="/">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/favicon.png"
              className="w-[18px] h-[18px]"
              width={300}
              height={100}
              title="ODPCO"
              alt="orange data processing logo "
            />
            <h2 className="text-[length:var(--fs-h3)] text-center text-[var(--brand-orange)] font-[var(--fw-medium)]">
              ODPCO
            </h2>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="mt-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:text-[var(--brand-blue)] transition-colors"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 py-5 px-3"
                    >
                      <item.icon />
                      <span className="text-[length:var(--fs-body)] font-[var(--fw-medium)]">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              {/* تغییر <a> به <button> و اضافه کردن منطق لودینگ */}
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-3 py-5 px-3 w-full text-left disabled:opacity-50 cursor-pointer"
              >
                {isLoggingOut ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <LogOut />
                )}
                <span className="text-[length:var(--fs-body)] font-[var(--fw-medium)]">
                  {isLoggingOut ? "Logging out..." : "Log out"}
                </span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
