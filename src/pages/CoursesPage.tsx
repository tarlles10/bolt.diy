import React from 'react'

const CoursesPage: React.FC = () => {
  const courses = [
    { id: 1, title: 'React Fundamentals', description: 'Learn the basics of React development.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into advanced JavaScript concepts.' },
    { id: 3, title: 'Tailwind CSS Masterclass', description: 'Master styling with Tailwind CSS.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Courses</h1>
      <p className="mb-4 text-gray-700">Explore our wide range of courses.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow rounded-md p-4">
            <h2 className="font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
