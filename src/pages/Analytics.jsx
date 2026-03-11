import { useState } from "react";
import api from "../services/api";
import StatsCard from "../components/StatsCard";
import EventsTable from "../components/EventsTable";

export default function Analytics() {
  const [shortCode, setShortCode] = useState("");
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);

  const fetchAnalytics = async () => {
    try {
      const analyticsRes = await api.get(`/analytics/${shortCode}`);
      const infoRes = await api.get(`/info/${shortCode}`);
      setData(analyticsRes.data);
      setInfo(infoRes.data);
    } catch (error) {
      alert(error?.response?.data?.detail || "Analytics not found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
            Analytics Dashboard
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">
            Monitor performance for your short links
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Search by short code to view metadata, total clicks, and recent activity.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Enter short code"
              value={shortCode}
              onChange={(e) => setShortCode(e.target.value)}
              className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <button
              onClick={fetchAnalytics}
              className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
            >
              Fetch Analytics
            </button>
          </div>
        </div>

        {data && info && (
          <>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatsCard title="Total Clicks" value={data.total_clicks} />
              <StatsCard title="Short Code" value={data.short_code} />
              <StatsCard title="Created At" value={info.created_at} />
              <StatsCard title="Expires At" value={info.expires_at || "No Expiry"} />
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <h2 className="text-xl font-bold text-slate-900">Link Details</h2>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Original URL
                  </p>
                  <p className="mt-2 break-all text-sm text-slate-800">{data.original_url}</p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Short URL
                  </p>
                  <a
                    href={`${import.meta.env.VITE_API_BASE_URL}/${data.short_code}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block break-all text-sm font-semibold text-blue-700 underline"
                  >
                    {`${import.meta.env.VITE_API_BASE_URL}/${data.short_code}`}
                  </a>
                </div>
              </div>
            </div>

            <EventsTable events={data.recent_events} />
          </>
        )}
      </div>
    </div>
  );
}