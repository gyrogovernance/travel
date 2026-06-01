import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <div className="container-content py-28 text-center">
      <Seo title="Page not found" path="/404" />
      <p className="font-display text-6xl text-ocean">404</p>
      <h1 className="font-display text-2xl text-ink mt-4">This path is off the map</h1>
      <p className="text-slate-600 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </div>
  );
}
