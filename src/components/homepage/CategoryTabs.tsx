import {
  Building2,
  Car,
  CarFront,
  Hotel,
  Ship,
  Plane,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { label: "Flights", icon: Plane, path: "/flights" },
    { label: "Hotels", icon: Hotel, path: "/hotels" },
    { label: "Villas", icon: Building2, path: "/villas" },
    { label: "Car Rentals", icon: Car, path: "/car-rentals" },
    { label: "Cabs", icon: CarFront, path: "/cabs" },
    { label: "Cruises", icon: Ship, path: "/cruises" },
  ];

  return (
    <div
      className="
        flex
        flex-nowrap
        items-center
        gap-3
        overflow-x-auto
        rounded-[28px]
        bg-white/95
        p-3
        shadow-2xl
        backdrop-blur-xl
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        md:flex-wrap
        md:overflow-visible
        md:gap-4
        md:rounded-[32px]
        md:p-4
      "
    >
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive =
          location.pathname === category.path ||
          location.pathname.startsWith(`${category.path}/`);

        return (
          <button
            key={category.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => navigate(category.path)}
            className={`
              inline-flex
              min-w-max
              shrink-0
              items-center
              gap-2.5
              rounded-2xl
              px-4
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              sm:px-5
              sm:py-4
              sm:text-base
              md:px-6
              ${
                isActive
                  ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#14B8A6] hover:text-white"
              }
            `}
          >
            <Icon size={18} className="sm:size-5" />
            <span className="whitespace-nowrap">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;