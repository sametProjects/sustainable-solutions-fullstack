"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setDarkMode(theme === "dark");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemPrefersDark);
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-surface shadow-md shadow-content/10 transition-colors duration-200">
      <div className="w-full lg:w-4/5 mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold text-primary">🔫</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-content hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Anasayfa
              </Link>
              <Link
                href="/blog"
                className="text-content hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-content hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                İletişim
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface text-content hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-primary" />
              ) : (
                <Moon size={20} className="text-primary" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface text-content hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary mr-2"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-primary" />
              ) : (
                <Moon size={20} className="text-primary" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-surface text-content hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface border-t border-secondary/20">
            <Link
              href="/"
              className="block text-content hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            >
              Anasayfa
            </Link>
            <Link
              href="/blog"
              className="block text-content hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-content hover:text-primary px-3 py-2 rounded-md text-base font-medium"
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
