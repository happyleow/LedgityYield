"use client";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui";
import Logo from "@/components/ui/Logo";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { DotsMenu } from "../DotsMenu";

const SiteHeader: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);
  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="pb-[97px] relative z-50">
      <nav
        className={twMerge(
          "fixed flex items-center px-6 py-6 w-screen sm:backdrop-blur-md sm:justify-between justify-center",
          scrollY > 0 && "backdrop-blur-md",
        )}
      >
        <Logo className="sm:ml-2 ml-0" />
        <div className="static flex gap-6">
          <Link href="/app">
            <Button size="large" className="sm:block hidden">
              Enter app
            </Button>
          </Link>

          <DotsMenu className="sm:static absolute top-6 right-6" />
        </div>
      </nav>
    </header>
  );
};
export default SiteHeader;
