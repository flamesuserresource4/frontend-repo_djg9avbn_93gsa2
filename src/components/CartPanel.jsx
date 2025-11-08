import { useMemo } from 'react';
import { Trash2, Clock } from 'lucide-react';

export default function CartPanel({ cart, onRemove, onClear, onCheckout }) {
  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);

  return (
    <aside className="mx-auto max-w-6xl px-4 pb-12">
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClear} className="text-sm text-rose-600 hover:underline">Clear</button>
        </div>
        {cart.length === 0 ? (
          <p className="py-6 text-sm text-neutral-600">Your cart is empty. Add some delicious items!</p>
        ) : (
          <div className="mt-3 divide-y divide-neutral-200">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium text-neutral-800">{item.name}</div>
                  <div className="text-xs text-neutral-600">Qty: {item.qty} • ₹{item.price * item.qty}</div>
                </div>
                <button onClick={() => onRemove(item.id)} className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-neutral-700">Estimated pickup <Clock className="ml-1 inline h-4 w-4" /> 15-20 min</div>
          <div className="text-right">
            <div className="text-xs text-neutral-500">Total</div>
            <div className="text-lg font-semibold">₹{total}</div>
          </div>
        </div>
        <button
          onClick={onCheckout}
          disabled={cart.length === 0}
          className="mt-4 w-full rounded-full bg-emerald-600 py-2.5 text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          Proceed to Checkout (UPI/QR)
        </button>
        <p className="mt-2 text-xs text-neutral-500">
          Note: For demo purposes, payments are simulated. In production, integrate UPI intent/QR or Stripe/Razorpay checkout.
        </p>
      </div>
    </aside>
  );
}
