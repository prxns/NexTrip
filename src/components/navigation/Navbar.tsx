import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import CurrencySelector from "../common/CurrencySelector";

const navLinks = [
  { label: "Flights", path: "/flights" },
  { label: "Hotels", path: "/hotels" },
  { label: "Villas", path: "/villas" },
  { label: "Car Rentals", path: "/car-rentals" },
  { label: "Cabs", path: "/cabs" },
  { label: "Cruises", path: "/cruises" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-[#2563EB] sm:text-4xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            NexTrip
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `
                    text-[16px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-[#2563EB]"
                        : "text-slate-600 hover:text-[#2563EB]"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <CurrencySelector />
            <button className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              Sign In
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 pb-4 pt-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#2563EB]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3">
              <CurrencySelector />
              <button className="w-full rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01]">
                Sign In
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;