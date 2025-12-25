import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", key: "home" },
    { label: "About Us", key: "about" },
    { label: "Solutions", key: "services" },
    { label: "Technology", key: "technology" },
    { label: "Careers", key: "careers" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <span className="text-white">Drivomate </span>
          <span className="text-green-400">Technologies</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`text-sm font-medium transition ${
                currentPage === item.key
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onNavigate(item.key);
                setOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-gray-300 hover:bg-gray-900 hover:text-green-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
