import {
  Building2,
  Car,
  CarFront,
  Hotel,
  Map,
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
    { label: "Tours", icon: Map, path: "/tours" },
  ];

  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-4
        rounded-[32px]
        bg-white/95
        p-4
        shadow-2xl
        backdrop-blur-xl
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
              flex
              items-center
              gap-3
              rounded-2xl
              px-6
              py-4
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              ${
                isActive
                  ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#14B8A6] hover:text-white"
              }
            `}
          >
            <Icon size={20} />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;