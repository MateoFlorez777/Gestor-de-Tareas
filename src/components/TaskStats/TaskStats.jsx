import React from 'react';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Estadísticas</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-sm text-blue-600 font-medium">Total</p>
          <p className="text-2xl font-bold text-blue-800">{totalTasks}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-sm text-green-600 font-medium">Completadas</p>
          <p className="text-2xl font-bold text-green-800">{completedTasks}</p>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg text-center">
          <p className="text-sm text-amber-600 font-medium">Pendientes</p>
          <p className="text-2xl font-bold text-amber-800">{pendingTasks}</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <p className="text-center text-sm mt-2 text-gray-600 font-medium">
        {completionPercentage}% completado
      </p>
    </div>
  );
};

export default TaskStats;