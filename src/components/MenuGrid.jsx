import { useMemo, useState } from 'react';
import { Search, Filter, Plus, Star } from 'lucide-react';

const sampleMenu = [
  { id: 1, name: 'Masala Dosa', price: 60, category: 'Breakfast', rating: 4.6, available: true },
  { id: 2, name: 'Paneer Roll', price: 70, category: 'Snacks', rating: 4.4, available: true },
  { id: 3, name: 'Iced Coffee', price: 45, category: 'Beverages', rating: 4.2, available: true },
  { id: 4, name: 'Veg Thali', price: 120, category: 'Meals', rating: 4.7, available: false },
  { id: 5, name: 'Maggi', price: 40, category: 'Snacks', rating: 4.1, available: true },
  { id: 6, name: 'Chai', price: 15, category: 'Beverages', rating: 4.8, available: true },
];

const categories = ['All', 'Breakfast', 'Snacks', 'Beverages', 'Meals'];

export default function MenuGrid({ onAdd }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const items = useMemo(() => {
    const q = query.toLowerCase();
    return sampleMenu.filter(i => (cat === 'All' || i.category === cat) && i.name.toLowerCase().includes(q));
  }, [query, cat]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-tight">Live Menu</h2>
        <div className="flex flex-1 items-center gap-2 sm:justify-end">
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search dishes" className="w-full rounded-full border border-neutral-300 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-emerald-200 focus:ring-2" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${cat === c ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-neutral-200 hover:bg-neutral-50'}`}>
                <Filter className="h-4 w-4" /> {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map(item => (
          <div key={item.id} className="group rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow">
            <div className="h-28 w-full rounded-lg bg-gradient-to-br from-emerald-100 to-amber-100" />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-neutral-900">{item.name}</div>
                <div className="text-xs text-neutral-600">{item.category} • ₹{item.price}</div>
                {!item.available && (
                  <div className="mt-1 inline-flex items-center rounded bg-rose-50 px-2 py-0.5 text-[10px] font-medium text-rose-700">Out of stock</div>
                )}
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-amber-400" />
                <span className="text-sm font-medium text-neutral-700">{item.rating}</span>
              </div>
            </div>
            <button disabled={!item.available} onClick={() => onAdd(item)} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-300">
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
