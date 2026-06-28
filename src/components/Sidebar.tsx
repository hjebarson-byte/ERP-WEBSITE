import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  UserCheck, 
  BarChart3, 
  Settings,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', gradient: 'from-blue-500 to-blue-600' },
  { icon: Package, label: 'Inventory', path: '/inventory', gradient: 'from-emerald-500 to-emerald-600' },
  { icon: ShoppingCart, label: 'Sales', path: '/sales', gradient: 'from-violet-500 to-violet-600' },
  { icon: Users, label: 'Customers', path: '/customers', gradient: 'from-pink-500 to-pink-600' },
  { icon: DollarSign, label: 'Finance', path: '/finance', gradient: 'from-amber-500 to-amber-600' },
  { icon: UserCheck, label: 'HR', path: '/hr', gradient: 'from-cyan-500 to-cyan-600' },
  { icon: BarChart3, label: 'Reports', path: '/reports', gradient: 'from-rose-500 to-rose-600' },
  { icon: Settings, label: 'Settings', path: '/settings', gradient: 'from-slate-500 to-slate-600' },
];

export default function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-500 ease-in-out z-50 shadow-2xl ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">ERP Pro</h1>
                  <p className="text-xs text-slate-400">Enterprise Management</p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2.5 hover:bg-slate-700/50 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            {isCollapsed ? <Menu size={20} className="group-hover:text-blue-400 transition-colors" /> : <X size={20} className="group-hover:text-blue-400 transition-colors" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? 'text-white shadow-xl'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
              }`}
            >
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-90`} />
              )}
              <div className={`relative z-10 flex items-center gap-3 ${isActive ? 'text-white' : ''}`}>
                <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-white/20' : 'group-hover:bg-slate-600/50'}`}>
                  <Icon size={20} className={isActive ? 'text-white' : 'group-hover:text-white transition-colors'} />
                </div>
                {!isCollapsed && (
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                )}
              </div>
              {!isCollapsed && isActive && (
                <ChevronRight size={16} className="ml-auto text-white/80" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-600/30 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
            </div>
            <button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
              View Profile
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
