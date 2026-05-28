import { Link } from "react-router-dom";

import Container from "../common/Container";

const navLinks = [
  { label: "Flights", path: "/flights" },
  { label: "Hotels", path: "/hotels" },
  { label: "Villas", path: "/villas" },
  { label: "Car Rentals", path: "/car-rentals" },
  { label: "Cabs", path: "/cabs" },
  { label: "Tours", path: "/tours" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="text-4xl font-black tracking-tight text-[#2563EB]"
          >
            NexTrip
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="
                  text-[16px]
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-[#2563EB]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="
              rounded-full
              bg-[#2563EB]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Sign In
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;