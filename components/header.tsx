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
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      className="fixed top-0 left-0 w-full h-14 md:h-screen bg-white bg-opacity-80 shadow-md z-50 transition-opacity duration-1000 ease-in-out" 
    >
      <nav className="flex h-full justify-evenly md:justify-center items-center md:space-y-8"> 
        {navItems.map((item) => (
          <div key={item.id} 
            className="group"
          >
            <Link
              href={item.href}
              className="flex text-lg md:text-xl font-semibold group-hover:text-sky-800 transition-colors duration-200"
              onClick={() => setActiveSection(item.id)}
            >
              <div className="hidden md:flex w-8 h-8 rounded-full mr-2 border-2 border-black bg-transparent items-center justify-center group-hover:border-sky-800 transition-colors duration-200">
                {activeSection === item.id && <div className="w-4 h-4 rounded-full bg-black group-hover:bg-sky-800 transition-colors duration-200"></div>}
              </div>
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}