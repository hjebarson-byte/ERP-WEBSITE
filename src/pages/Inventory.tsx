import { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Plus, Search, Filter, Download, Package, TrendingUp, AlertCircle } from 'lucide-react';
import StatCard from '../components/StatCard';

const inventoryData = [
  { id: 'PRD001', name: 'Wireless Headphones', category: 'Electronics', stock: 45, price: 99.99, status: 'In Stock' },
  { id: 'PRD002', name: 'Smart Watch', category: 'Electronics', stock: 23, price: 199.99, status: 'In Stock' },
  { id: 'PRD003', name: 'Laptop Stand', category: 'Accessories', stock: 8, price: 49.99, status: 'Low Stock' },
  { id: 'PRD004', name: 'USB-C Hub', category: 'Accessories', stock: 0, price: 39.99, status: 'Out of Stock' },
  { id: 'PRD005', name: 'Wireless Charger', category: 'Electronics', stock: 67, price: 29.99, status: 'In Stock' },
  { id: 'PRD006', name: 'Bluetooth Speaker', category: 'Electronics', stock: 34, price: 79.99, status: 'In Stock' },
  { id: 'PRD007', name: 'Phone Case', category: 'Accessories', stock: 156, price: 19.99, status: 'In Stock' },
  { id: 'PRD008', name: 'Screen Protector', category: 'Accessories', stock: 5, price: 9.99, status: 'Low Stock' },
];

export default function Inventory() {
  const [showAddModal, setShowAddModal] = useState(false);

  const columns = [
    { key: 'id', label: 'Product ID' },
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    { key: 'stock', label: 'Stock' },
    { 
      key: 'price', 
      label: 'Price',
      render: (value: number) => `$${value.toFixed(2)}`
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          'In Stock': 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 border border-emerald-300',
          'Low Stock': 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 border border-amber-300',
          'Out of Stock': 'bg-gradient-to-r from-rose-100 to-rose-200 text-rose-700 border border-rose-300',
        };
        return (
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
              <Package className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Inventory Management</h1>
          </div>
          <p className="text-gray-500 ml-11">Manage your product inventory and stock levels efficiently</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-medium"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Products"
          value={inventoryData.length}
          icon={Package}
          color="blue"
        />
        <StatCard
          title="In Stock"
          value={inventoryData.filter(p => p.status === 'In Stock').length}
          icon={TrendingUp}
          color="emerald"
        />
        <StatCard
          title="Low Stock"
          value={inventoryData.filter(p => p.status === 'Low Stock').length}
          icon={AlertCircle}
          color="amber"
        />
        <StatCard
          title="Out of Stock"
          value={inventoryData.filter(p => p.status === 'Out of Stock').length}
          icon={AlertCircle}
          color="rose"
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
                placeholder="Search products..."
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

        <DataTable columns={columns} data={inventoryData} searchable={false} />
      </div>

      {/* Add Product Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New Product">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name</label>
            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Enter product name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300">
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Clothing</option>
              <option>Home & Garden</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Stock</label>
              <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price</label>
              <input type="number" step="0.01" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="0.00" />
            </div>
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
            Add Product
          </button>
        </div>
      </Modal>
    </div>
  );
}
