import StatCard from '../components/StatCard';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Target
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <Sparkles className="text-white" size={24} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Dashboard</h1>
        </div>
        <p className="text-gray-500 ml-11">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$124,563"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Total Orders"
          value="1,234"
          icon={ShoppingCart}
          trend={{ value: 8.2, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Total Customers"
          value="892"
          icon={Users}
          trend={{ value: 5.3, isPositive: true }}
          color="purple"
        />
        <StatCard
          title="Products in Stock"
          value="456"
          icon={Package}
          trend={{ value: 2.1, isPositive: false }}
          color="rose"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg font-medium">Monthly</button>
              <button className="px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Yearly</button>
            </div>
          </div>
          <div className="h-72 flex items-end justify-between gap-3 px-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
              const heights = [60, 75, 45, 90, 70, 85];
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="relative w-full">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-xl transition-all duration-500 group-hover:from-blue-600 group-hover:to-blue-500 shadow-lg shadow-blue-500/20"
                      style={{ height: `${heights[index]}%` }}
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg">
                      ${heights[index]}K
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors">{month}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'New order received', detail: 'Order #1234 - $450', time: '2 min ago', icon: ShoppingCart, color: 'emerald' },
              { action: 'Customer registered', detail: 'John Doe joined', time: '15 min ago', icon: Users, color: 'blue' },
              { action: 'Payment processed', detail: 'Invoice #567 - $1,200', time: '1 hour ago', icon: DollarSign, color: 'violet' },
              { action: 'Low stock alert', detail: 'Product XYZ - 5 units left', time: '2 hours ago', icon: Package, color: 'amber' },
              { action: 'Target achieved', detail: 'Monthly sales goal reached', time: '3 hours ago', icon: Target, color: 'pink' },
            ].map((activity, index) => {
              const Icon = activity.icon;
              const colorClasses = {
                emerald: 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600',
                blue: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600',
                violet: 'bg-gradient-to-br from-violet-100 to-violet-200 text-violet-600',
                amber: 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600',
                pink: 'bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600',
              };
              return (
                <div key={index} className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-300 group cursor-pointer">
                  <div className={`p-3 rounded-xl ${colorClasses[activity.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-1 rounded-full">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Products and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Selling Products</h2>
          <div className="space-y-3">
            {[
              { name: 'Premium Wireless Headphones', sales: 234, revenue: '$23,400', growth: 12 },
              { name: 'Smart Watch Pro', sales: 189, revenue: '$18,900', growth: 15 },
              { name: 'Laptop Stand Ergonomic', sales: 156, revenue: '$7,800', growth: 8 },
              { name: 'USB-C Hub Multiport', sales: 143, revenue: '$4,290', growth: 22 },
              { name: 'Wireless Charging Pad', sales: 128, revenue: '$3,840', growth: 18 },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 rounded-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-yellow-400 to-orange-500' : index === 1 ? 'from-gray-300 to-gray-400' : index === 2 ? 'from-amber-600 to-amber-700' : 'from-gray-200 to-gray-300'} rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{product.revenue}</p>
                  <div className="flex items-center gap-1 text-emerald-600 justify-end">
                    <ArrowUpRight size={14} />
                    <span className="text-sm font-medium">{product.growth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl shadow-blue-500/30 p-6 text-white hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: 'Add New Product', icon: Package, desc: 'Create new inventory item' },
              { label: 'Create Invoice', icon: DollarSign, desc: 'Generate new invoice' },
              { label: 'Add Customer', icon: Users, desc: 'Register new customer' },
              { label: 'Generate Report', icon: TrendingUp, desc: 'View analytics' },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{action.label}</p>
                    <p className="text-xs text-white/70">{action.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
