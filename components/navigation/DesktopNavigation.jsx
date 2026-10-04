"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/components/services/data";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { GalleryVerticalEnd, LogIn, User } from "lucide-react";
import { useSession } from "next-auth/react";

export default function DesktopNavigation() {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";
  return (
    <nav className="h-20 flex items-center p-5 border-b justify-between">
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
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
          </NavigationMenuLink>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150 ">
                {SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <ListItem
                      key={service.id}
                      icon={<Icon size={18} strokeWidth={1.5} />}
                      title={service.navLink}
                      href={`/services/${service.slug}`}
                      className="hover:bg-[var(--brand-light-gray)] rounded-sm"
                    >
                      {service.navDescription}
                    </ListItem>
                  );
                })}

                <ListItem
                  title="All Services"
                  icon={<GalleryVerticalEnd size={18} strokeWidth={1.5} />}
                  href="/services"
                  className="hover:bg-[var(--brand-light-gray)] rounded-sm"
                  linkFullWidth="col-span-full"
                >
                  Explore all our IT services
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about-us">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact-us">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href={isLoggedIn ? "/dashboard" : "/login"}
        className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] text-white py-2 px-4 rounded  justify-center transition duration-300 font-[var(--fw-medium)] flex gap-2 "
      >
        {isLoggedIn ? <User strokeWidth={1.5} /> : <LogIn strokeWidth={1.5} />}

        <span> {isLoggedIn ? "Dashboard" : "Login"}</span>
      </Link>
    </nav>
  );
}

function ListItem({
  title,
  icon,
  children,
  href,
  className,
  linkFullWidth,
  ...props
}) {
  return (
    <li className={linkFullWidth}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`flex flex-col items-start justify-center select-none p-3 leading-none no-underline outline-none transition-colors ${className}`}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none text-black">
            {icon && icon}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-[var(--brand-gray)] mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
