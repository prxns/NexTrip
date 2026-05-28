import { Link, NavLink } from 'react-router-dom';
import Container from '../common/Container';

const navItems = [
  {
    label: 'Flights',
    path: '/flights',
  },
  {
    label: 'Hotels',
    path: '/hotels',
  },
  {
    label: 'Villas',
    path: '/villas',
  },
  {
    label: 'Cars',
    path: '/cars',
  },
  {
    label: 'Tours',
    path: '/tours',
  },
];

/**
 * Global top navigation bar.
 */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
      <Container className="h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-[#2563EB]"
        >
          NexTrip
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? 'text-[#2563EB]'
                      : 'text-[#64748B] hover:text-[#2563EB]'
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="
            bg-[#2563EB]
            hover:bg-[#1D4ED8]
            transition-colors
            text-white
            px-5
            py-2.5
            rounded-xl
            text-sm
            font-semibold
          "
        >
          Sign In
        </button>
      </Container>
    </header>
  );
}

export default Navbar;