import React, { useEffect, useState } from "react";
import { IconHome, IconUser } from "@tabler/icons-react";
import { VscSymbolKeyword } from "react-icons/vsc";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import { HiOutlineArrowUp } from "react-icons/hi";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell(props: AppShellProps) {
  const { children } = props;

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Promissum",
      link: "/promissum",
      icon: (
        <VscSymbolKeyword className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <FloatingNav className="font-urbanist" navItems={navItems} />
      {children}
      {isVisible && (
          <Link
            href="#navbar"
            className="bg-black text-yellow rounded-full border border-zinc-600 p-3 text-xl fixed bottom-5 right-5 cursor-pointer"
          >
            <HiOutlineArrowUp />
          </Link>
        )}
      <footer
        className="bg-yellow shadow dark:bg-gray-800 font-lora"
        style={{ boxShadow: "-0.5px -0.5px 3px #000" }}
      >
        <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-black sm:text-center ml-10">
            <a href="https://flowbite.com/" className="hover:underline">
              Muhammad MIfta © 2024
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0 mr-20">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
