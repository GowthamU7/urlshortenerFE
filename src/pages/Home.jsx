import { useState } from "react";
import api from "../services/api";
import UrlForm from "../components/UrlForm";
import ResultCard from "../components/ResultCard";

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShorten = async (payload) => {
    try {
      setLoading(true);
      const response = await api.post("/shorten", payload);
      setResult(response.data);
    } catch (error) {
      alert(error?.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
            Production-Style Backend Project
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Shorten URLs with
            <span className="block text-blue-700">Analytics, Caching, and Scale</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Build, manage, and analyze short links with a modern FastAPI backend,
            PostgreSQL persistence, Redis caching, and rate limiting.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <UrlForm onSubmit={handleShorten} loading={loading} />
            <ResultCard result={result} />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-bold text-slate-900">
                Why this app stands out
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                This project is more than a simple CRUD app. It demonstrates real backend
                engineering decisions such as cache-aside redirects, Base62 short code generation,
                background analytics logging, and Redis-backed rate limiting.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Redis Caching</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Frequently accessed short links are served quickly using cached mappings.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Detailed Analytics</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Track click counts, recent events, IP addresses, user agents, and referrers.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Abuse Protection</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Redis-backed rate limiting protects shorten and redirect endpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <FeatureCard
                title="FastAPI"
                description="Modern Python API framework with clean route design and strong validation."
              />
              <FeatureCard
                title="PostgreSQL"
                description="Reliable relational storage for URL mappings and analytics events."
              />
              <FeatureCard
                title="Redis"
                description="Used for cache-aside redirects and rate limiting at the API layer."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}