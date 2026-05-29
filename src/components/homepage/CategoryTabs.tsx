import {
  Plane,
  Hotel,
  Building2,
  CarFront,
  Car,
  Map,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function CategoryTabs() {
  const navigate = useNavigate();

  const categories = [
    {
      label: "Flights",
      icon: Plane,
      path: "/flights",
    },
    {
      label: "Hotels",
      icon: Hotel,
      path: "/hotels",
    },
    {
      label: "Villas",
      icon: Building2,
      path: "/villas",
    },
    {
      label: "Car Rentals",
      icon: Car,
      path: "/car-rentals",
    },
    {
      label: "Cabs",
      icon: CarFront,
      path: "/cabs",
    },
    {
      label: "Tours",
      icon: Map,
      path: "/tours",
    },
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

        return (
          <button
            key={category.label}
            onClick={() => navigate(category.path)}
            className="
              flex
              items-center
              gap-3

              rounded-2xl
              bg-slate-100

              px-6
              py-4

              font-semibold
              text-slate-700

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-gradient-to-r
              hover:from-[#2563EB]
              hover:to-[#14B8A6]
              hover:text-white
              hover:shadow-xl
            "
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