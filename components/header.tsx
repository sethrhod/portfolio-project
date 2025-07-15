import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "home", href: "/", label: "Home" },
  { id: "aboutme", href: "/#aboutme", label: "About Me" },
  { id: "mobileapp", href: "/#mobileapp", label: "ATC App" },
  { id: "blog", href: "/#blog", label: "Blog" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in effect
    if (headerRef.current) {
      // Use a slight delay to ensure rendering before transition
      setTimeout(() => {
        headerRef.current?.classList.replace("opacity-0", "opacity-100");
      }, 100);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 w-full md:items-center md:right-0 md:left-auto md:w-1/5 bg-white bg-opacity-80 shadow-md z-50 transition-opacity duration-1000 ease-in-out h-16 md:h-screen" 
    >
      <nav className="flex h-full justify-evenly items-center md:items-center md:flex-col md:justify-center md:space-y-6 px-2">
        {navItems.map((item) => (
          <div key={item.id} 
            className="group"
          >
            <Link
              href={item.href}
              className="flex text-lg md:text-xl font-semibold px-2 py-1 md:px-3 md:py-2 text-center justify-center items-center group-hover:text-sky-800 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}