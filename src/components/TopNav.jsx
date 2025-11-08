import { Utensils, Bell, User, ChefHat, Shield } from 'lucide-react';

export default function TopNav({ role, setRole, cartCount = 0, notifications = 0 }) {
  const roles = [
    { key: 'student', label: 'Student', icon: User },
    { key: 'staff', label: 'Staff', icon: ChefHat },
    { key: 'admin', label: 'Admin', icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-emerald-600" />
          <span className="font-semibold tracking-tight">Campus Canteen</span>
        </div>

        <nav className="flex items-center gap-2">
          {roles.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setRole(key)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${role === key ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-neutral-200 hover:bg-neutral-50'}`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="h-5 w-5 text-neutral-600" />
            {notifications > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-medium text-white">
                {notifications}
              </span>
            )}
          </div>
          <div className="relative text-sm text-neutral-700">
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-3 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-1 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
