import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "home", href: "/", label: "Home" },
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
      className="flex h-screen justify-center p-2 bg-white bg-opacity-80 shadow-md opacity-0 transition-opacity duration-1000 ease-in-out" 
    >
      <nav className="flex flex-col space-y-8 justify-center"> 
        {navItems.map((item) => (
          <div key={item.id} 
            className="group flex items-center space-x-2"
            onClick={() => setActiveSection(item.id)}
          >
            <div className="w-8 h-8 rounded-full border-2 border-black bg-transparent flex items-center justify-center group-hover:border-sky-800 transition-colors duration-200">
            {activeSection === item.id && <div className="w-4 h-4 rounded-full bg-black group-hover:bg-sky-800 transition-colors duration-200"></div>}
            </div>
            <Link
              href={item.href}
              className="text-xl font-semibold group-hover:text-sky-800 transition-colors duration-200"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}