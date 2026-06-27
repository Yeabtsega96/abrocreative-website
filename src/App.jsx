import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "./layout/MainLayout";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const FAQsPage = lazy(() => import("./pages/FAQsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/**
 * Reusable wrapper for lazy loading pages
 */
const Loadable = (Component) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

function App() {
  return (
    <>
      {/* Global toast system */}
      <Toaster richColors position="top-right" />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={Loadable(HomePage)} />
          <Route path="/about" element={Loadable(AboutPage)} />
          <Route path="/services" element={Loadable(ServicePage)} />
          <Route path="/pricing" element={Loadable(PricingPage)} />
          <Route path="/portfolio" element={Loadable(PortfolioPage)} />
          <Route path="/faqs" element={Loadable(FAQsPage)} />
          <Route path="/contact" element={Loadable(ContactPage)} />
          <Route path="*" element={Loadable(NotFoundPage)} />
        </Route>
      </Routes>
    </>
  );
}

export default App;