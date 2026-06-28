import { useState } from 'react';
import { Download, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react';

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">View comprehensive business reports and analytics</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={20} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Revenue Growth</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">+24.5%</p>
          <p className="text-sm text-green-600 mt-2">vs last period</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Total Sales</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">$124.5K</p>
          <p className="text-sm text-green-600 mt-2">+12.3% increase</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <PieChart className="text-purple-600" size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Profit Margin</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">32.8%</p>
          <p className="text-sm text-green-600 mt-2">+5.2% increase</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="text-orange-600" size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Orders</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-green-600 mt-2">+8.7% increase</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales Performance</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
              const heights = [45, 60, 55, 75, 70, 85];
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500"
                    style={{ height: `${heights[index]}%` }}
                  />
                  <span className="text-xs text-gray-600">{month}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Revenue by Category</h2>
          <div className="space-y-4">
            {[
              { name: 'Electronics', value: 45, color: 'bg-blue-500' },
              { name: 'Accessories', value: 25, color: 'bg-green-500' },
              { name: 'Clothing', value: 15, color: 'bg-purple-500' },
              { name: 'Home & Garden', value: 10, color: 'bg-orange-500' },
              { name: 'Others', value: 5, color: 'bg-gray-500' },
            ].map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-600">{category.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${category.color} h-3 rounded-full transition-all`}
                    style={{ width: `${category.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Wireless Headphones', sales: 234, revenue: '$23,400' },
              { name: 'Smart Watch Pro', sales: 189, revenue: '$18,900' },
              { name: 'Laptop Stand', sales: 156, revenue: '$7,800' },
              { name: 'USB-C Hub', sales: 143, revenue: '$4,290' },
              { name: 'Wireless Charger', sales: 128, revenue: '$3,840' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                    <p className="text-xs text-gray-600">{product.sales} sold</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{product.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Segments</h2>
          <div className="space-y-4">
            {[
              { segment: 'New Customers', count: 234, percentage: 35, color: 'bg-blue-500' },
              { segment: 'Returning', count: 312, percentage: 45, color: 'bg-green-500' },
              { segment: 'VIP', count: 89, percentage: 13, color: 'bg-purple-500' },
              { segment: 'Inactive', count: 45, percentage: 7, color: 'bg-gray-500' },
            ].map((item) => (
              <div key={item.segment} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.segment}</p>
                    <p className="text-xs text-gray-600">{item.count} customers</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Geographic Distribution</h2>
          <div className="space-y-4">
            {[
              { region: 'North America', count: 456, percentage: 52, color: 'bg-blue-500' },
              { region: 'Europe', count: 234, percentage: 27, color: 'bg-green-500' },
              { region: 'Asia', count: 123, percentage: 14, color: 'bg-purple-500' },
              { region: 'Others', count: 67, percentage: 7, color: 'bg-gray-500' },
            ].map((item) => (
              <div key={item.region} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.region}</p>
                    <p className="text-xs text-gray-600">{item.count} orders</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Sales Report', description: 'Detailed sales analysis and trends', icon: '📊' },
            { title: 'Inventory Report', description: 'Stock levels and movement', icon: '📦' },
            { title: 'Customer Report', description: 'Customer behavior and insights', icon: '👥' },
            { title: 'Financial Report', description: 'Revenue, expenses, and profit', icon: '💰' },
            { title: 'Employee Report', description: 'HR metrics and performance', icon: '👔' },
            { title: 'Custom Report', description: 'Build your own report', icon: '⚙️' },
          ].map((report, index) => (
            <button
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{report.icon}</span>
                <h3 className="font-semibold text-gray-900">{report.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{report.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
