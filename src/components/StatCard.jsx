const StatCard = ({ title, value, icon, trend, color }) => {
    const Icon = icon;
    
    return (
      <div className="bg-white rounded-lg shadow p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 font-medium">{title}</span>
          <Icon size={20} className={`text-${color}-500`} />
        </div>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
        </div>
      </div>
    );
  };
export default StatCard  