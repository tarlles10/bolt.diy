import React from 'react'

const MediaPage: React.FC = () => {
  const mediaItems = [
    { id: 1, name: 'Document 1.pdf', type: 'document' },
    { id: 2, name: 'Image 1.jpg', type: 'image' },
    { id: 3, name: 'Video 1.mp4', type: 'video' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Media Library</h1>
      <p className="mb-4 text-gray-700">Manage your media files here.</p>

      <ul>
        {mediaItems.map(item => (
          <li key={item.id} className="bg-white shadow rounded-md p-4 mb-4">
            <h2 className="font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600">Type: {item.type}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Media
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MediaPage
