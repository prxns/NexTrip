import { Outlet } from 'react-router-dom';

import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

/**
 * Main shared application layout.
 * Navbar and footer persist across all pages.
 */
function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;