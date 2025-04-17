import React from 'react';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

const DashboardHome = () => {
  const stats = [
    { name: 'Total Skills', value: '24', icon: AcademicCapIcon },
    { name: 'Progress', value: '85%', icon: ChartBarIcon },
    { name: 'Rank', value: '#12', icon: UserGroupIcon },
    { name: 'Improvement', value: '+15%', icon: ArrowTrendingUpIcon },
  ];

  const quickActions = [
    {
      title: 'View Leaderboard',
      description: 'See where you stand among your peers',
      href: '/dashboard/leaderboard',
      icon: UserGroupIcon,
    },
    {
      title: 'Compare Skills',
      description: 'Compare your skills with other students',
      href: '/dashboard/comparison',
      icon: ChartBarIcon,
    },
    {
      title: 'Update Profile',
      description: 'Manage your personal information',
      href: '/dashboard/profile',
      icon: AcademicCapIcon,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-6 bg-white rounded-lg shadow dark:bg-gray-800"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => (
          <a
            key={action.title}
            href={action.href}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow dark:bg-gray-800"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
                <action.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {action.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {action.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-900 dark:text-white">
                Completed Python Programming Assessment
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-900 dark:text-white">
                Moved up 3 positions in the leaderboard
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 day ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 