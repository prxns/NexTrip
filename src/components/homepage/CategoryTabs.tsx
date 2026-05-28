import {
  Plane,
  Hotel,
  Building2,
  Car,
  Bus,
  Train,
  Map,
} from 'lucide-react';

const categories = [
  {
    icon: Plane,
    label: 'Flights',
  },
  {
    icon: Hotel,
    label: 'Hotels',
  },
  {
    icon: Building2,
    label: 'Villas',
  },
  {
    icon: Car,
    label: 'Cars',
  },
  {
    icon: Bus,
    label: 'Buses',
  },
  {
    icon: Train,
    label: 'Trains',
  },
  {
    icon: Map,
    label: 'Tours',
  },
];

/**
 * Homepage booking category selector.
 */
function CategoryTabs() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-4
        inline-flex
        flex-wrap
        justify-center
        gap-3
      "
    >
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <button
            key={category.label}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              text-sm
              font-semibold
              transition-all
              bg-slate-100
              hover:bg-[#2563EB]
              hover:text-white
            "
          >
            <Icon size={18} />

            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;