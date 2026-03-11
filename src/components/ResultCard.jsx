export default function ResultCard({ result }) {
  if (!result) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result.short_url);
    alert("Short URL copied!");
  };

  return (
    <div className="mt-6 rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl shadow-slate-200/50">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            URL Created Successfully
          </span>
          <h3 className="mt-3 text-xl font-bold text-slate-900">
            Your short link is ready
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Original URL
          </p>
          <p className="mt-2 break-all text-sm text-slate-800">{result.original_url}</p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Short URL
          </p>
          <a
            href={result.short_url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-base font-semibold text-blue-700 underline"
          >
            {result.short_url}
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={handleCopy}
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Copy URL
        </button>

        <a
          href={result.short_url}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Open Link
        </a>
      </div>
    </div>
  );
}