import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/Home/HomePage';
import FlightsPage from '../pages/Flights/FlightsPage';
import HotelsPage from '../pages/Hotels/HotelsPage';

import CheckoutPage from "../pages/Checkout/CheckoutPage";
import BookingSuccessPage from "../pages/Checkout/BookingSuccessPage";

/**
 * Central application routing system.
 * All major pages are registered here.
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/booking-success" element={<BookingSuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;