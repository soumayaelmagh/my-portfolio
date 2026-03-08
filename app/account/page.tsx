import type { Metadata } from "next";
import Link from "next/link";

type Order = {
  number: string;
  date: string;
  items: string[];
  total: string;
  status: "Delivered" | "Processing" | "Shipped" | "Canceled";
  payment: string;
  delivery: string;
};

const orders: Order[] = [
  {
    number: "INV-2045",
    date: "Feb 02, 2025",
    items: ["Ecommerce UI Kit", "Custom Shopify theme"],
    total: "$1,240.00",
    status: "Delivered",
    payment: "Visa •••• 4242",
    delivery: "Digital delivery",
  },
  {
    number: "INV-2044",
    date: "Jan 18, 2025",
    items: ["Performance audit", "Headless checkout"],
    total: "$860.00",
    status: "Shipped",
    payment: "Mastercard •••• 3014",
    delivery: "Email + GitHub repo",
  },
  {
    number: "INV-2043",
    date: "Jan 02, 2025",
    items: ["UX refresh", "Landing page build"],
    total: "$540.00",
    status: "Processing",
    payment: "PayPal",
    delivery: "In progress",
  },
  {
    number: "INV-2042",
    date: "Dec 15, 2024",
    items: ["Maintenance retainer"],
    total: "$320.00",
    status: "Canceled",
    payment: "Visa •••• 1881",
    delivery: "N/A",
  },
];

const statusClass: Record<Order["status"], string> = {
  Delivered: "bg-green-500/15 text-green-300 border border-green-500/40",
  Shipped: "bg-blue-500/15 text-blue-200 border border-blue-500/40",
  Processing: "bg-yellow-400/15 text-yellow-300 border border-yellow-400/40",
  Canceled: "bg-red-500/15 text-red-300 border border-red-500/40",
};

export const metadata: Metadata = {
  title: "Account | Order History",
  description: "Review past orders, delivery details, and payments.",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Account
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-2">
              Order history
            </h1>
            <p className="text-gray-400 mt-2">
              Track purchases, delivery status, and download receipts.
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-gray-800 text-gray-200 border border-gray-700 hover:border-yellow-400/60 hover:text-white transition"
          >
            Back to home
          </Link>
        </header>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/60 shadow-xl divide-y divide-gray-800">
          <div className="px-6 py-4 flex items-center justify-between text-sm text-gray-400">
            <span>Recent orders</span>
            <span>{orders.length} total</span>
          </div>

          <ul className="divide-y divide-gray-800">
            {orders.map((order) => (
              <li key={order.number} className="px-6 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold">
                        Order {order.number}
                      </h2>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${statusClass[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Total</p>
                    <p className="text-lg font-semibold">{order.total}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-300">
                    {order.items.join(" • ")}
                  </p>
                </div>

                <dl className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-gray-300">
                  <div>
                    <dt className="text-gray-500">Payment</dt>
                    <dd className="mt-1">{order.payment}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Delivery</dt>
                    <dd className="mt-1">{order.delivery}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Support</dt>
                    <dd className="mt-1">
                      <Link
                        href="mailto:your.email@example.com"
                        className="text-yellow-300 hover:text-yellow-200"
                      >
                        Contact support
                      </Link>
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
