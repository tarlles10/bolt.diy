import React from 'react'

const MyCoursesPage: React.FC = () => {
  const myCourses = [
    { id: 1, title: 'React Fundamentals', progress: '50%' },
    { id: 2, title: 'JavaScript Basics', progress: '100%' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">My Courses</h1>
      <p className="mb-4 text-gray-700">Your enrolled courses and progress.</p>

      <ul>
        {myCourses.map(course => (
          <li key={course.id} className="bg-white shadow rounded-md p-4 mb-4">
            <h2 className="font-semibold text-gray-800 mb-2">{course.title}</h2>
            <div className="bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: course.progress }}></div>
            </div>
            <p className="text-gray-600">Progress: {course.progress}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue Learning
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyCoursesPage
