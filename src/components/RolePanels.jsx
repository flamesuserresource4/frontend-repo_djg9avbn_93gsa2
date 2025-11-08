import { useMemo } from 'react';

export default function RolePanels({ role, orders }) {
  const content = useMemo(() => {
    if (role === 'student') {
      return (
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold">Live Order Status</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {orders.slice(0, 3).map((o) => (
              <li key={o.id} className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                <div>
                  <div className="font-medium">Order #{o.id}</div>
                  <div className="text-xs text-neutral-600">{o.items} items • {o.status}</div>
                </div>
                <div className="text-xs font-medium text-emerald-700">ETA {o.eta}m</div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (role === 'staff') {
      return (
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold">Staff Dashboard</h3>
          <p className="mt-1 text-sm text-neutral-700">View incoming orders and update status.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {orders.map((o) => (
              <div key={o.id} className={`rounded-lg border p-3 ${o.status === 'Ready' ? 'border-emerald-300 bg-emerald-50' : 'border-neutral-200 bg-white'}`}>
                <div className="font-medium">Order #{o.id}</div>
                <div className="text-xs text-neutral-600">{o.items} items • ETA {o.eta}m</div>
                <div className="mt-2 inline-flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5">{o.status}</span>
                  <button className="rounded-full bg-emerald-600 px-2 py-0.5 text-white">Mark Ready</button>
                  <button className="rounded-full border px-2 py-0.5">Complete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <h3 className="text-lg font-semibold">Admin Panel</h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          <Metric label="Revenue (today)" value="₹12,450" />
          <Metric label="Orders" value="186" />
          <Metric label="Top Item" value="Iced Coffee" />
        </div>
        <p className="mt-3 text-sm text-neutral-600">Manage menus, users, offers and view analytics. This demo focuses on UI; connect it to your backend for real data.</p>
      </div>
    );
  }, [role, orders]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">{content}</section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-center">
      <div className="text-xs uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="mt-1 text-xl font-semibold text-neutral-900">{value}</div>
    </div>
  );
}
