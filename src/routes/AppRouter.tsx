import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import FlightsPage from "../pages/Flights/FlightsPage";
import HotelsPage from "../pages/Hotels/HotelsPage";

import CheckoutPage from "../pages/Checkout/CheckoutPage";
import BookingSuccessPage from "../pages/Checkout/BookingSuccessPage";

import HotelDetailsPage from "../pages/Hotels/HotelDetailsPage";
import HotelCheckoutPage from "../pages/Hotels/HotelCheckoutPage";
import SupportPage from "../pages/Support/SupportPage";
import AboutPage from "../pages/About/AboutPage";
import CareersPage from "../pages/Careers/CareersPage";
import PressPage from "../pages/Press/PressPage";

import PrivacyPolicyPage from "../pages/Legal/PrivacyPolicyPage";
import TermsPage from "../pages/Legal/TermsPage";
import CookiePolicyPage from "../pages/Legal/CookiePolicyPage";
import AccessibilityPage from "../pages/Legal/AccessibilityPage";

import CarRentalsPage from "../pages/CarRentals/CarRentalsPage";
import CarRentalDetailsPage from "../pages/CarRentals/CarRentalDetailsPage";
import CarRentalCheckoutPage from "../pages/CarRentals/CarRentalCheckoutPage";

import CabsPage from "../pages/Cabs/CabsPage";
import CabBookingPage from "../pages/Cabs/CabBookingPage";

import ComingSoonPage from "../pages/ComingSoonPage";
import ScrollToTop from "../components/ScrollToTop";
import OfferDetailsPage from "../pages/Offers/OfferDetailsPage";

import DestinationPage from "../pages/Destinations/DestinationPage";

/**
 * Central application routing system.
 * All major pages are registered here.
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/flights"
            element={<FlightsPage />}
          />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route
            path="/hotels/:slug"
            element={<HotelDetailsPage />}
          />
          <Route
            path="/hotel-checkout"
            element={<HotelCheckoutPage />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/booking-success"
            element={<BookingSuccessPage />}
          />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route path="/terms" element={<TermsPage />} />
          <Route
            path="/cookie-policy"
            element={<CookiePolicyPage />}
          />
          <Route
            path="/accessibility"
            element={<AccessibilityPage />}
          />
          <Route
            path="/car-rentals"
            element={<CarRentalsPage />}
          />
          <Route
            path="/car-rentals/:slug"
            element={<CarRentalDetailsPage />}
          />
          <Route
            path="/car-rental-checkout"
            element={<CarRentalCheckoutPage />}
          />
          <Route path="/cabs" element={<CabsPage />} />
          <Route
            path="/cab-booking"
            element={<CabBookingPage />}
          />
          <Route
            path="/cars"
            element={<Navigate to="/car-rentals" replace />}
          />

          <Route
            path="/villas"
            element={
              <ComingSoonPage
                title="Luxury Villas"
                description="Browse premium villas, beachfront properties, and exclusive vacation homes."
              />
            }
          />

          <Route
            path="/offers/:offerId"
            element={<OfferDetailsPage />}
          />

          <Route
            path="/tours"
            element={
              <ComingSoonPage
                title="Tours & Experiences"
                description="Discover curated tours, local attractions, and unforgettable experiences."
              />
            }
          />

          <Route
            path="/destinations/:slug"
            element={<DestinationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;