import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-60"
        }`}
      >
        <Header collapsed={collapsed} />

        <main className="mt-14 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
              <p className="text-sm text-gray-500">
                Manage users, orders and dispatch in one place.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                + New Order
              </button>
              <button className="px-3 py-2 rounded-md bg-white text-gray-700 text-sm font-medium shadow hover:bg-gray-50">
                Export
              </button>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-sm text-gray-500">Today’s Orders</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">128</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-sm text-gray-500">Pending Refunds</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">7</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-sm text-gray-500">Dispatch Ready</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">54</p>
            </div>
          </section>

          <section className="mt-4 bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-800">
                Recent Activity
              </h2>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <p className="text-sm text-gray-800 font-medium">
                      Order #10421 accepted
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">2 mins ago</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <p className="text-sm text-gray-800 font-medium">
                      Dispatch scheduled for Order #10418
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">24 mins ago</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <p className="text-sm text-gray-800 font-medium">
                      Refund request received
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
