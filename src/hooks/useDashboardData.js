export const generateRandomData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    const salesData = months.map(name => ({
      name,
      sales: Math.floor(Math.random() * 1000) + 500,
      profit: Math.floor(Math.random() * 500) + 200,
    }));
  
    const trafficData = [
      { name: 'Direct', value: Math.floor(Math.random() * 1000) + 1000 },
      { name: 'Social', value: Math.floor(Math.random() * 1000) + 500 },
      { name: 'Referral', value: Math.floor(Math.random() * 1000) + 300 },
      { name: 'Organic', value: Math.floor(Math.random() * 1000) + 700 }
    ];
  
    const userActivityData = [
      { name: 'Mon', active: Math.floor(Math.random() * 500) + 300 },
      { name: 'Tue', active: Math.floor(Math.random() * 500) + 400 },
      { name: 'Wed', active: Math.floor(Math.random() * 500) + 600 },
      { name: 'Thu', active: Math.floor(Math.random() * 500) + 400 },
      { name: 'Fri', active: Math.floor(Math.random() * 500) + 500 },
      { name: 'Sat', active: Math.floor(Math.random() * 500) + 300 },
      { name: 'Sun', active: Math.floor(Math.random() * 500) + 200 }
    ];
    
    return {
      salesData,
      trafficData,
      userActivityData,
      totalUsers: Math.floor(Math.random() * 10000) + 25000,
      revenue: Math.floor(Math.random() * 50000) + 100000,
      conversion: (Math.random() * 5 + 2).toFixed(2),
      growth: (Math.random() * 10 - 2).toFixed(2)
    };
  };