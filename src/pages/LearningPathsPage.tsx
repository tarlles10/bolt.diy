import React from 'react'

const LearningPathsPage: React.FC = () => {
  const learningPaths = [
    { id: 1, title: 'Web Development Path', description: 'Become a full-stack web developer.' },
    { id: 2, title: 'Frontend Mastery', description: 'Master the art of frontend development.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Learning Paths</h1>
      <p className="mb-4 text-gray-700">Structured paths to guide your learning journey.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningPaths.map(path => (
          <div key={path.id} className="bg-white shadow rounded-md p-4">
            <h2 className="font-semibold text-gray-800 mb-2">{path.title}</h2>
            <p className="text-gray-600">{path.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Path
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LearningPathsPage
