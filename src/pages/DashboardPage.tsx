import React, { useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import db from '../lib/db'

const DashboardPage: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await db.execute('SELECT 1');
        console.log('Database connected successfully', rs.rows);
      } catch (e) {
        console.error('Database connection error', e)
      }
    }

    fetchData()
  }, [])

  const courseProgressData = [
    { name: 'In Progress', value: 3 },
    { name: 'Completed', value: 7 },
    { name: 'Not Started', value: 2 },
  ]

  const learningPathProgressData = [
    { name: 'In Progress', value: 1 },
    { name: 'Completed', value: 4 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  const recentActivity = [
    'Enrolled in "React Fundamentals" course.',
    'Completed "JavaScript Basics" module.',
    'Started "Advanced CSS Techniques" course.',
    'Achieved "Problem Solver" badge.',
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Courses Progress */}
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Courses Progress</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={courseProgressData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {courseProgressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Learning Paths Progress */}
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Learning Paths Progress</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={learningPathProgressData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {learningPathProgressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Achievements Overview */}
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Achievements Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={[ {badges: 12} ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="badges" fill="#82ca9d" name="Badges Earned" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-gray-600 mt-2">Total Badges: 12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white shadow rounded-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          {recentActivity.map((activity, index) => (
            <li key={index} className="text-gray-600">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DashboardPage
