import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink' | 'cyan' | 'rose' | 'emerald' | 'violet' | 'amber';
}

const gradientClasses = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-emerald-500 to-emerald-600',
  purple: 'from-violet-500 to-violet-600',
  orange: 'from-amber-500 to-amber-600',
  red: 'from-rose-500 to-rose-600',
  pink: 'from-pink-500 to-pink-600',
  cyan: 'from-cyan-500 to-cyan-600',
  rose: 'from-rose-500 to-rose-600',
  emerald: 'from-emerald-500 to-emerald-600',
  violet: 'from-violet-500 to-violet-600',
  amber: 'from-amber-500 to-amber-600',
};

const bgClasses = {
  blue: 'from-blue-50 to-blue-100',
  green: 'from-emerald-50 to-emerald-100',
  purple: 'from-violet-50 to-violet-100',
  orange: 'from-amber-50 to-amber-100',
  red: 'from-rose-50 to-rose-100',
  pink: 'from-pink-50 to-pink-100',
  cyan: 'from-cyan-50 to-cyan-100',
  rose: 'from-rose-50 to-rose-100',
  emerald: 'from-emerald-50 to-emerald-100',
  violet: 'from-violet-50 to-violet-100',
  amber: 'from-amber-50 to-amber-100',
};

const shadowClasses = {
  blue: 'shadow-blue-500/20',
  green: 'shadow-emerald-500/20',
  purple: 'shadow-violet-500/20',
  orange: 'shadow-amber-500/20',
  red: 'shadow-rose-500/20',
  pink: 'shadow-pink-500/20',
  cyan: 'shadow-cyan-500/20',
  rose: 'shadow-rose-500/20',
  emerald: 'shadow-emerald-500/20',
  violet: 'shadow-violet-500/20',
  amber: 'shadow-amber-500/20',
};

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = 'blue' 
}: StatCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      {/* Background gradient decoration */}
      <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${bgClasses[color]} rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mt-2 group-hover:scale-105 transition-transform duration-300 origin-left">
              {value}
            </p>
            {trend && (
              <div className={`flex items-center gap-2 mt-3 text-sm font-medium ${
                trend.isPositive ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                <div className={`p-1.5 rounded-lg ${trend.isPositive ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                  {trend.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                </div>
                <span>{Math.abs(trend.value)}%</span>
                <span className="text-gray-400 font-normal">vs last month</span>
              </div>
            )}
          </div>
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${bgClasses[color]} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${shadowClasses[color]}`}>
            <Icon size={28} className={`bg-gradient-to-br ${gradientClasses[color]} bg-clip-text text-transparent`} />
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClasses[color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
}
