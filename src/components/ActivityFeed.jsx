import { Clock, TrendingUp, Users, DollarSign, Activity, RefreshCw } from 'lucide-react';

const ActivityItem = ({ icon, color, title, time }) => {
    const Icon = icon;
    
    return (
      <div className="flex items-center p-2 hover:bg-gray-50 rounded">
        <div className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center mr-3`}>
          <Icon size={20} className={`text-${color}-600`} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
    );
  };
  
  const ActivityFeed = ({Users}) => {
    const activities = [
      {
        icon: Users,
        color: 'green',
        title: 'New user registration spike',
        time: '10 minutes ago'
      },
      {
        icon: DollarSign,
        color: 'blue',
        title: 'Revenue goal reached',
        time: '2 hours ago'
      },
      {
        icon: Activity,
        color: 'yellow',
        title: 'Unusual traffic detected',
        time: '5 hours ago'
      }
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Recent Updates</h2>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <ActivityItem 
              key={index}
              icon={activity.icon}
              color={activity.color}
              title={activity.title}
              time={activity.time}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ActivityFeed