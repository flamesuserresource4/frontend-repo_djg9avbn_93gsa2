import { useMemo, useState } from 'react';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import CartPanel from './components/CartPanel';
import RolePanels from './components/RolePanels';

function App() {
  const [role, setRole] = useState('student');
  const [cart, setCart] = useState([]);
  const [notifications] = useState(2);

  const orders = useMemo(() => (
    [
      { id: 1024, items: 3, status: 'In Progress', eta: 12 },
      { id: 1025, items: 1, status: 'Ready', eta: 0 },
      { id: 1026, items: 2, status: 'Queued', eta: 18 },
    ]
  ), []);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const checkout = () => {
    // In this sandbox, simulate UPI/QR by opening a modal-like alert.
    alert('Payment simulated. In production, integrate UPI intent (Android), dynamic QR, or Razorpay/Stripe checkout.');
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <TopNav role={role} setRole={setRole} cartCount={cart.length} notifications={notifications} />
      <Hero />
      <MenuGrid onAdd={addToCart} />
      <CartPanel cart={cart} onRemove={removeFromCart} onClear={clearCart} onCheckout={checkout} />
      <RolePanels role={role} orders={orders} />

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-neutral-500">
        Built for a smooth campus canteen experience with role-based views and a simulated QR/UPI checkout. Connect to your backend for real-time orders, Socket.io, and payments.
      </footer>
    </div>
  );
}

export default App;
