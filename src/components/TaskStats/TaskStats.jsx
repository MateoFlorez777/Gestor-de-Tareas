import React from 'react';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="mb-4 p-4 bg-gray-200 rounded">
      <h2 className="font-bold">Estadísticas de Tareas</h2>
      <p>Total de tareas: {totalTasks}</p>
      <p>Tareas completadas: {completedTasks}</p>
    </div>
  );
};

export default TaskStats;