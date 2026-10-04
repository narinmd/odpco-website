"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SERVICES } from "@/components/services/data";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Menu,
  ChevronDown,
  GalleryVerticalEnd,
  LogIn,
  User,
} from "lucide-react";

export default function MobileNavigation() {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="flex h-20 items-center justify-between border-b border-border bg-background p-5">
      <Link href="/">
        <Image
          src="/images/odpco-logo-en.png"
          alt="orange data processing company logo"
          className="w-32"
          width={300}
          height={100}
          title="ODPCO"
        />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button className="rounded-sm p-2 hover:cursor-pointer">
            <Menu strokeWidth={1.5} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-[85vw] max-w-[400px] flex-col bg-white p-6"
        >
          <SheetTitle className="sr-only ">Menu</SheetTitle>

          <nav className="mt-8 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/projects"
                  className="block rounded-sm p-3 font-[var(--fw-medium)] text-foreground transition-colors hover:bg-[var(--brand-light-gray)]"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-sm p-3 font-[var(--fw-medium)] text-foreground transition-all duration-300 hover:bg-[var(--brand-light-gray)]">
                    <span>Services</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <ul className="mb-2 ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[var(--brand-light-gray)] pl-4">
                      {SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="flex flex-col items-start justify-center gap-1 rounded-sm p-3 transition-colors hover:bg-[var(--brand-light-gray)]"
                            >
                              <div className="flex items-center gap-2 font-[var(--fw-medium)] text-foreground">
                                <Icon size={18} strokeWidth={1.5} />
                                <span>{service.navLink}</span>
                              </div>
                              {/* <p className="line-clamp-2 mt-1 text-sm leading-snug text-[var(--brand-gray)]">
                                {service.navDescription}
                              </p> */}
                            </Link>
                          </li>
                        );
                      })}

                      <li>
                        <Link
                          href="/services"
                          className="flex flex-col items-start justify-center gap-1 rounded-sm p-3 transition-colors hover:bg-[var(--brand-light-gray)]"
                        >
                          <div className="flex items-center gap-2 font-[var(--fw-medium)] text-foreground">
                            <GalleryVerticalEnd size={18} strokeWidth={1.5} />
                            <span>All Services</span>
                          </div>
                          {/* <p className="line-clamp-2 mt-1 text-sm leading-snug text-[var(--brand-gray)]">
                            Explore all our IT services
                          </p> */}
                        </Link>
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="block rounded-sm p-3 font-[var(--fw-medium)] text-foreground transition-colors hover:bg-[var(--brand-light-gray)]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="block rounded-sm p-3 font-[var(--fw-medium)] text-foreground transition-colors hover:bg-[var(--brand-light-gray)]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto border-t border-border pt-6 pb-2">
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--brand-orange)] py-3 px-4 font-[var(--fw-medium)] text-white transition duration-300 hover:bg-[var(--brand-orange-hover)]"
            >
              {isLoggedIn ? (
                <User strokeWidth={1.5} size={20} />
              ) : (
                <LogIn strokeWidth={1.5} size={20} />
              )}
              <span>{isLoggedIn ? "Dashboard" : "Login"}</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
