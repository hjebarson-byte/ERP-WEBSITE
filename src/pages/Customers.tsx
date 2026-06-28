import { useState } from 'react';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';
import { Plus, Search, Filter, Download, Users, TrendingUp, UserPlus, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';

const customersData = [
  { id: 'CUST001', name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', location: 'New York, USA', orders: 12, spent: 2399.88 },
  { id: 'CUST002', name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8901', location: 'Los Angeles, USA', orders: 8, spent: 1599.92 },
  { id: 'CUST003', name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8902', location: 'Chicago, USA', orders: 15, spent: 2999.85 },
  { id: 'CUST004', name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 8903', location: 'Houston, USA', orders: 5, spent: 999.95 },
  { id: 'CUST005', name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 8904', location: 'Phoenix, USA', orders: 20, spent: 3999.80 },
  { id: 'CUST006', name: 'Diana Lee', email: 'diana@example.com', phone: '+1 234 567 8905', location: 'Philadelphia, USA', orders: 3, spent: 599.97 },
  { id: 'CUST007', name: 'Edward Davis', email: 'edward@example.com', phone: '+1 234 567 8906', location: 'San Antonio, USA', orders: 10, spent: 1999.90 },
  { id: 'CUST008', name: 'Fiona Garcia', email: 'fiona@example.com', phone: '+1 234 567 8907', location: 'San Diego, USA', orders: 7, spent: 1399.93 },
];

export default function Customers() {
  const [showAddModal, setShowAddModal] = useState(false);

  const columns = [
    { key: 'id', label: 'Customer ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'orders', label: 'Orders' },
    { 
      key: 'spent', 
      label: 'Total Spent',
      render: (value: number) => `$${value.toFixed(2)}`
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Users className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Customer Management</h1>
          </div>
          <p className="text-gray-500 ml-11">Manage customer relationships and track interactions efficiently</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-medium"
        >
          <Plus size={20} />
          Add Customer
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Customers"
          value={customersData.length}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Active Customers"
          value={customersData.filter(c => c.orders > 5).length}
          icon={TrendingUp}
          color="emerald"
        />
        <StatCard
          title="New This Month"
          value={24}
          icon={UserPlus}
          color="pink"
        />
        <StatCard
          title="Avg. Order Value"
          value={`$${(customersData.reduce((sum, c) => sum + c.spent, 0) / customersData.reduce((sum, c) => sum + c.orders, 0)).toFixed(2)}`}
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
                placeholder="Search customers..."
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

        <DataTable columns={columns} data={customersData} searchable={false} />
      </div>

      {/* Add Customer Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New Customer">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="Enter full name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="email@example.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="+1 234 567 8900" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300" placeholder="City, Country" />
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
            Add Customer
          </button>
        </div>
      </Modal>
    </div>
  );
}
