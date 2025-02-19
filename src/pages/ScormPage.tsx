import React from 'react'

const ScormPage: React.FC = () => {
  const scormPackages = [
    { id: 1, name: 'SCORM Package 1', version: '1.2' },
    { id: 2, name: 'SCORM Package 2', version: '2004' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">SCORM Packages</h1>
      <p className="mb-4 text-gray-700">Manage and upload SCORM packages.</p>

      <ul>
        {scormPackages.map(pkg => (
          <li key={pkg.id} className="bg-white shadow rounded-md p-4 mb-4">
            <h2 className="font-semibold text-gray-800 mb-2">{pkg.name}</h2>
            <p className="text-gray-600">Version: {pkg.version}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Launch SCORM
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScormPage
