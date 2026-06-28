import { useState } from 'react';
import DataTable from '../components/DataTable';
import { Plus, Search, Filter, Download } from 'lucide-react';

const employeesData = [
  { id: 'EMP001', name: 'Sarah Johnson', email: 'sarah@company.com', phone: '+1 234 567 8900', department: 'Engineering', position: 'Senior Developer', salary: 95000, status: 'Active', joinDate: '2022-03-15' },
  { id: 'EMP002', name: 'Michael Chen', email: 'michael@company.com', phone: '+1 234 567 8901', department: 'Marketing', position: 'Marketing Manager', salary: 85000, status: 'Active', joinDate: '2021-08-20' },
  { id: 'EMP003', name: 'Emily Davis', email: 'emily@company.com', phone: '+1 234 567 8902', department: 'Sales', position: 'Sales Representative', salary: 65000, status: 'Active', joinDate: '2023-01-10' },
  { id: 'EMP004', name: 'James Wilson', email: 'james@company.com', phone: '+1 234 567 8903', department: 'Engineering', position: 'Junior Developer', salary: 55000, status: 'Active', joinDate: '2023-06-01' },
  { id: 'EMP005', name: 'Lisa Anderson', email: 'lisa@company.com', phone: '+1 234 567 8904', department: 'HR', position: 'HR Specialist', salary: 60000, status: 'Active', joinDate: '2022-11-05' },
  { id: 'EMP006', name: 'Robert Taylor', email: 'robert@company.com', phone: '+1 234 567 8905', department: 'Finance', position: 'Accountant', salary: 70000, status: 'On Leave', joinDate: '2021-04-12' },
  { id: 'EMP007', name: 'Jennifer Martinez', email: 'jennifer@company.com', phone: '+1 234 567 8906', department: 'Operations', position: 'Operations Manager', salary: 80000, status: 'Active', joinDate: '2020-09-18' },
  { id: 'EMP008', name: 'David Brown', email: 'david@company.com', phone: '+1 234 567 8907', department: 'Engineering', position: 'Tech Lead', salary: 110000, status: 'Active', joinDate: '2019-02-28' },
];

export default function HR() {
  const [showAddModal, setShowAddModal] = useState(false);

  const columns = [
    { key: 'id', label: 'Employee ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
    { key: 'position', label: 'Position' },
    { 
      key: 'salary', 
      label: 'Salary',
      render: (value: number) => `$${value.toLocaleString()}`
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const statusColors = {
          'Active': 'bg-green-100 text-green-800',
          'On Leave': 'bg-yellow-100 text-yellow-800',
          'Inactive': 'bg-red-100 text-red-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    },
    { key: 'joinDate', label: 'Join Date' },
  ];

  const departmentStats = [
    { name: 'Engineering', count: 3, avgSalary: 86667 },
    { name: 'Marketing', count: 1, avgSalary: 85000 },
    { name: 'Sales', count: 1, avgSalary: 65000 },
    { name: 'HR', count: 1, avgSalary: 60000 },
    { name: 'Finance', count: 1, avgSalary: 70000 },
    { name: 'Operations', count: 1, avgSalary: 80000 },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Human Resources</h1>
          <p className="text-gray-600 mt-2">Manage employees, payroll, and HR operations</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Total Employees</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{employeesData.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Active</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {employeesData.filter(e => e.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">On Leave</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {employeesData.filter(e => e.status === 'On Leave').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm font-medium text-gray-600">Total Payroll</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            ${(employeesData.reduce((sum, e) => sum + e.salary, 0) / 1000).toFixed(0)}K
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Department Overview</h2>
          <div className="space-y-4">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{dept.count}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{dept.name}</p>
                    <p className="text-sm text-gray-600">${dept.avgSalary.toLocaleString()} avg. salary</p>
                  </div>
                </div>
                <div className="w-48 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(dept.count / employeesData.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: 'Process Payroll', icon: '💰', color: 'blue' },
              { label: 'View Attendance', icon: '📊', color: 'green' },
              { label: 'Manage Leave', icon: '🏖️', color: 'purple' },
              { label: 'Performance Review', icon: '⭐', color: 'orange' },
            ].map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl">{action.icon}</span>
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search employees..."
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

        <DataTable columns={columns} data={employeesData} searchable={false} />
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Employee</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Operations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
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
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
