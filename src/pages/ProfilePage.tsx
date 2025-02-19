import React from 'react'

const ProfilePage: React.FC = () => {
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    enrolledSince: 'January 2023',
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
      <p className="mb-4 text-gray-700">View and update your profile information.</p>

      <div className="bg-white shadow rounded-md p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Personal Information</h2>
        <p className="text-gray-600 mb-2"><strong>Name:</strong> {profileData.name}</p>
        <p className="text-gray-600 mb-2"><strong>Email:</strong> {profileData.email}</p>
        <p className="text-gray-600"><strong>Enrolled Since:</strong> {profileData.enrolledSince}</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
