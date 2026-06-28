import { useState } from 'react';
import DataTable from '../components/DataTable';
import { Plus, Search, Filter, Download, TrendingUp, TrendingDown } from 'lucide-react';

const transactionsData = [
  { id: 'TXN001', type: 'Income', category: 'Sales', description: 'Order #1234', amount: 450.00, date: '2024-01-15', status: 'Completed' },
  { id: 'TXN002', type: 'Expense', category: 'Inventory', description: 'Stock purchase', amount: 1200.00, date: '2024-01-14', status: 'Completed' },
  { id: 'TXN003', type: 'Income', category: 'Sales', description: 'Order #1235', amount: 890.00, date: '2024-01-14', status: 'Completed' },
  { id: 'TXN004', type: 'Expense', category: 'Operations', description: 'Office supplies', amount: 150.00, date: '2024-01-13', status: 'Pending' },
  { id: 'TXN005', type: 'Income', category: 'Sales', description: 'Order #1236', amount: 320.00, date: '2024-01-13', status: 'Completed' },
  { id: 'TXN006', type: 'Expense', category: 'Payroll', description: 'Employee salaries', amount: 5000.00, date: '2024-01-12', status: 'Completed' },
  { id: 'TXN007', type: 'Income', category: 'Services', description: 'Consulting fee', amount: 750.00, date: '2024-01-12', status: 'Pending' },
  { id: 'TXN008', type: 'Expense', category: 'Marketing', description: 'Ad campaign', amount: 400.00, date: '2024-01-11', status: 'Completed' },
];

const invoicesData = [
  { id: 'INV001', customer: 'John Doe', amount: 450.00, dueDate: '2024-01-30', status: 'Paid' },
  { id: 'INV002', customer: 'Jane Smith', amount: 890.00, dueDate: '2024-02-15', status: 'Pending' },
  { id: 'INV003', customer: 'Bob Johnson', amount: 1200.00, dueDate: '2024-01-25', status: 'Overdue' },
  { id: 'INV004', customer: 'Alice Brown', amount: 320.00, dueDate: '2024-02-01', status: 'Pending' },
  { id: 'INV005', customer: 'Charlie Wilson', amount: 750.00, dueDate: '2024-01-20', status: 'Paid' },
];

export default function Finance() {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'invoices'>('overview');
  const [showAddModal, setShowAddModal] = useState(false);

  const transactionColumns = [
    { key: 'id', label: 'Transaction ID' },
    { key: 'type', label: 'Type' },
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' },
    { 
      key: 'amount', 
      label: 'Amount',
      render: (value: number, row: any) => (
        <span className={row.type === 'Income' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
          {row.type === 'Income' ? '+' : '-'}${value.toFixed(2)}
        </span>
      )
    },
    { key: 'date', label: 'Date' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          'Completed': 'bg-green-100 text-green-800',
          'Pending': 'bg-yellow-100 text-yellow-800',
          'Overdue': 'bg-red-100 text-red-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
  ];

  const invoiceColumns = [
    { key: 'id', label: 'Invoice ID' },
    { key: 'customer', label: 'Customer' },
    { 
      key: 'amount', 
      label: 'Amount',
      render: (value: number) => `$${value.toFixed(2)}`
    },
    { key: 'dueDate', label: 'Due Date' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          'Paid': 'bg-green-100 text-green-800',
          'Pending': 'bg-yellow-100 text-yellow-800',
          'Overdue': 'bg-red-100 text-red-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
  ];

  const totalIncome = transactionsData.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactionsData.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
  const netProfit = totalIncome - totalExpense;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Finance & Accounting</h1>
          <p className="text-gray-600 mt-2">Manage finances, transactions, and invoices</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          New Transaction
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex border-b border-gray-200">
          {['overview', 'transactions', 'invoices'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600">Total Income</p>
              <p className="text-3xl font-bold text-green-600 mt-2">${totalIncome.toFixed(2)}</p>
              <div className="flex items-center gap-1 text-green-600 mt-2">
                <TrendingUp size={16} />
                <span className="text-sm">+12.5%</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-3xl font-bold text-red-600 mt-2">${totalExpense.toFixed(2)}</p>
              <div className="flex items-center gap-1 text-red-600 mt-2">
                <TrendingDown size={16} />
                <span className="text-sm">+8.2%</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600">Net Profit</p>
              <p className={`text-3xl font-bold mt-2 ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${netProfit.toFixed(2)}
              </p>
              <div className={`flex items-center gap-1 mt-2 ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {netProfit >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span className="text-sm">{netProfit >= 0 ? '+15.3%' : '-5.1%'}</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600">Pending Invoices</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">
                {invoicesData.filter(i => i.status === 'Pending').length}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ${invoicesData.filter(i => i.status === 'Pending').reduce((sum, i) => sum + i.amount, 0).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Income vs Expenses</h2>
              <div className="h-64 flex items-end justify-between gap-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
                  const incomeHeights = [45, 60, 55, 70, 65, 80];
                  const expenseHeights = [30, 40, 35, 45, 40, 50];
                  return (
                    <div key={month} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex gap-1 h-full">
                        <div 
                          className="flex-1 bg-green-500 rounded-t-lg transition-all hover:bg-green-600"
                          style={{ height: `${incomeHeights[index]}%` }}
                        />
                        <div 
                          className="flex-1 bg-red-500 rounded-t-lg transition-all hover:bg-red-600"
                          style={{ height: `${expenseHeights[index]}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{month}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded" />
                  <span className="text-sm text-gray-600">Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded" />
                  <span className="text-sm text-gray-600">Expenses</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {transactionsData.slice(0, 5).map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{txn.description}</p>
                      <p className="text-sm text-gray-600">{txn.category}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${txn.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                        {txn.type === 'Income' ? '+' : '-'}${txn.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">{txn.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'transactions' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} />
                Filter
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={20} />
              Export
            </button>
          </div>

          <DataTable columns={transactionColumns} data={transactionsData} searchable={false} />
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} />
                Filter
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={20} />
              Export
            </button>
          </div>

          <DataTable columns={invoiceColumns} data={invoicesData} searchable={false} />
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Transaction</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                  <option>Sales</option>
                  <option>Inventory</option>
                  <option>Operations</option>
                  <option>Payroll</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input type="number" step="0.01" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-20" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
