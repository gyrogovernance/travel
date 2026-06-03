import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { watchGoogleTranslateBanner } from "./utils/suppressGoogleTranslateBanner.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CookieNotice from "./components/CookieNotice.jsx";
import Home from "./pages/Home.jsx";
import Domain from "./pages/Domain.jsx";
import Guides from "./pages/Guides.jsx";
import Destinations from "./pages/Destinations.jsx";
import Destination from "./pages/Destination.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx";
import Resources from "./pages/Resources.jsx";
import Prompts from "./pages/Prompts.jsx";
import FlightSearch from "./pages/FlightSearch.jsx";
import Privacy from "./pages/Privacy.jsx";
import Cookies from "./pages/Cookies.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  useEffect(() => watchGoogleTranslateBanner(), []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ocean focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domains/:slug" element={<Domain />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<Post />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<Destination />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/search/flights" element={<FlightSearch />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
