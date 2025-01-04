"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
// interfaces
import { MainNavProps } from "@/data/ui/main-nave.interface";
import { IRoute } from "@/data/ui/route.interface";
// utils
import { cn } from "@/lib/utils";

const MainNav = ({ scrolled, className, ...props }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();

  const routes: IRoute[] = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: "Menu",
      active: pathname === "/menu",
    },
    {
      href: "/orders",
      label: "Orders",
      active: pathname === "/orders",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className="ml-auto">
      <nav
        className={cn(
          "flex items-center space-x-4 lg:space-x-12 pl-6",
          className
        )}
      >
        {routes.map((r) => (
          <Link
            href={r.href}
            key={r.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              r.active
                ? `${
                    scrolled
                      ? "text-hero font-bold"
                      : "text-black dark:text-white"
                  }`
                : `${scrolled ? "text-black" : "text-white"}`
            )}
          >
            {r.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
