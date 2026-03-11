import { useState } from "react";

export default function UrlForm({ onSubmit, loading }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      original_url: originalUrl,
      custom_alias: customAlias || null,
      expires_at: expiresAt || null,
    });
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60"
    >
      <div className="mb-6">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          Create Short URL
        </span>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          Turn long links into shareable short URLs
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Add an optional alias and expiration date, then generate a production-style short link.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Long URL
          </label>
          <input
            type="url"
            required
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="https://example.com/articles/very-long-url"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Custom Alias
            <span className="ml-2 text-xs font-normal text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            placeholder="gowtham"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Expiration Date
            <span className="ml-2 text-xs font-normal text-slate-400">(optional)</span>
          </label>
          <input
            type="datetime-local"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating Short URL..." : "Shorten URL"}
      </button>
    </form>
  );
}