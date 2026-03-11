export default function EventsTable({ events }) {
  return (
    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 overflow-x-auto">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">Recent Click Events</h2>
        <p className="mt-1 text-sm text-slate-500">
          Detailed analytics captured for recent redirects.
        </p>
      </div>

      <table className="w-full min-w-[700px] text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-500">
            <th className="py-3 pr-4 font-semibold">Timestamp</th>
            <th className="py-3 pr-4 font-semibold">IP Address</th>
            <th className="py-3 pr-4 font-semibold">User Agent</th>
            <th className="py-3 pr-4 font-semibold">Referrer</th>
          </tr>
        </thead>
        <tbody>
          {events?.length ? (
            events.map((event, index) => (
              <tr key={index} className="border-b border-slate-100 align-top">
                <td className="py-4 pr-4 text-slate-700">{event.clicked_at}</td>
                <td className="py-4 pr-4 text-slate-700">{event.ip_address || "-"}</td>
                <td className="py-4 pr-4 break-all text-slate-700">{event.user_agent || "-"}</td>
                <td className="py-4 pr-4 text-slate-700">{event.referrer || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-10 text-center text-slate-400">
                No click events found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}