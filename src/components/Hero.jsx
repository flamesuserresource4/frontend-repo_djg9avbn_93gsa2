import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-amber-100 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 sm:items-center"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Order smarter. Skip the queue.
            </h1>
            <p className="mt-4 text-neutral-700">
              Campus Canteen brings real-time menus, live order tracking, and seamless payments to your campus. Fresh food, right on time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">
                Start Ordering
              </button>
              <button className="rounded-full border border-neutral-300 px-5 py-2.5 text-neutral-800 hover:bg-neutral-50">
                Explore Menu
              </button>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
              <Sparkles className="h-4 w-4 text-amber-500" /> AI recommendations personalize your meals
            </p>
          </div>
          <div className="aspect-video rounded-xl border border-neutral-200 bg-white/70 p-4 backdrop-blur">
            <div className="grid h-full grid-cols-2 gap-3">
              {["Masala Dosa","Iced Coffee","Veg Burger","Chowmein"].map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
                  <div className="h-20 w-full rounded-md bg-gradient-to-br from-amber-200 to-emerald-200" />
                  <div className="mt-2 text-sm font-medium text-neutral-800">{item}</div>
                  <div className="text-xs text-neutral-600">Available • 15-20 min</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
