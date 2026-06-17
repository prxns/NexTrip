import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

/**
 * Main shared application layout.
 * Navbar and footer persist across all pages.
 */
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;