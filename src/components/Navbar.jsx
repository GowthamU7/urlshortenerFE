import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navClass = (path) =>
    location.pathname === path
      ? "text-slate-900 font-semibold"
      : "text-slate-500 hover:text-slate-900 transition";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Scalable URL Shortener
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            FastAPI · PostgreSQL · Redis · Docker
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className={navClass("/")}>
            Home
          </Link>
          <Link to="/analytics" className={navClass("/analytics")}>
            Analytics
          </Link>
          <a
            href={`${import.meta.env.VITE_API_BASE_URL}/docs`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50 transition"
          >
            API Docs
          </a>
        </div>
      </div>
    </nav>
  );
}