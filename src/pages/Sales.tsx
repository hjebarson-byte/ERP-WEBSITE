import { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Plus, Search, Filter, Download, Eye, ShoppingCart, TrendingUp, Clock, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';

const salesData = [
  { id: 'ORD001', customer: 'John Doe', date: '2024-01-15', items: 3, total: 299.97, status: 'Completed' },
  { id: 'ORD002', customer: 'Jane Smith', date: '2024-01-15', items: 1, total: 199.99, status: 'Processing' },
  { id: 'ORD003', customer: 'Bob Johnson', date: '2024-01-14', items: 5, total: 499.95, status: 'Completed' },
  { id: 'ORD004', customer: 'Alice Brown', date: '2024-01-14', items: 2, total: 149.98, status: 'Shipped' },
  { id: 'ORD005', customer: 'Charlie Wilson', date: '2024-01-13', items: 4, total: 399.96, status: 'Pending' },
  { id: 'ORD006', customer: 'Diana Lee', date: '2024-01-13', items: 1, total: 99.99, status: 'Completed' },
  { id: 'ORD007', customer: 'Edward Davis', date: '2024-01-12', items: 3, total: 279.97, status: 'Cancelled' },
  { id: 'ORD008', customer: 'Fiona Garcia', date: '2024-01-12', items: 2, total: 179.98, status: 'Completed' },
];

export default function Sales() {
  const [showAddModal, setShowAddModal] = useState(false);

  const columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'date', label: 'Date' },
    { key: 'items', label: 'Items' },
    { 
      key: 'total', 
      label: 'Total',
      render: (value: number) => `$${value.toFixed(2)}`
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          'Completed': 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 border border-emerald-300',
          'Processing': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300',
          'Shipped': 'bg-gradient-to-r from-violet-100 to-violet-200 text-violet-700 border border-violet-300',
          'Pending': 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 border border-amber-300',
          'Cancelled': 'bg-gradient-to-r from-rose-100 to-rose-200 text-rose-700 border border-rose-300',
        };
        return (
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
          <Eye size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
        </button>
      )
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Sales & Orders</h1>
          </div>
          <p className="text-gray-500 ml-11">Manage sales orders and track shipments efficiently</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-medium"
        >
          <Plus size={20} />
          New Order
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Orders"
          value={salesData.length}
          icon={ShoppingCart}
          color="blue"
        />
        <StatCard
          title="Completed"
          value={salesData.filter(o => o.status === 'Completed').length}
          icon={TrendingUp}
          color="emerald"
        />
        <StatCard
          title="Processing"
          value={salesData.filter(o => o.status === 'Processing').length}
          icon={Clock}
          color="violet"
        />
        <StatCard
          title="Total Revenue"
          value={`$${salesData.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`}
          icon={DollarSign}
          color="amber"
        />
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search orders..."
                className="pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm w-72"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
              <Filter size={20} />
              Filter
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
            <Download size={20} />
            Export
          </button>
        </div>

        <DataTable columns={columns} data={salesData} searchable={false} />
      </div>

      {/* Add Order Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Create New Order">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Customer</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300">
              <option>Select customer...</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
              <option>Bob Johnson</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Products</label>
            <textarea
              placeholder="Add products..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 h-24"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
            <textarea
              placeholder="Order notes..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 h-20"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowAddModal(false)}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowAddModal(false)}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
          >
            Create Order
          </button>
        </div>
      </Modal>
    </div>
  );
}
