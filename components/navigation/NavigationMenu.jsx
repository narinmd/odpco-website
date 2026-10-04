import React from "react";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function NavigationMenu() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session;
  return (
    <>
      <>
        <div className="lg:hidden">
          <MobileNavigation />
        </div>

        <div className="hidden lg:block">
          <DesktopNavigation />
        </div>
      </>
    </>
  );
}
