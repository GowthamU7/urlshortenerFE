export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-2xl p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}