import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4 flex justify-center">
      <button 
        onClick={() => setFilter('all')} 
        className={`mr-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Todas
      </button>
      <button 
        onClick={() => setFilter('active')} 
        className={`mr-2 px-4 py-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Activas
      </button>
      <button 
        onClick={() => setFilter('completed')} 
        className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completadas
      </button>
    </div>
  );
};

export default TaskFilter;