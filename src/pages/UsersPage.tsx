import React from 'react'

const UsersPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">User Management</h1>
      <p className="mb-4 text-gray-700">Manage users and their roles here.</p>

      <div className="bg-white shadow rounded-md p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Users List</h2>
        {/* User list will be displayed here */}
        <p className="text-gray-600">No users yet.</p>
      </div>
    </div>
  )
}

export default UsersPage
