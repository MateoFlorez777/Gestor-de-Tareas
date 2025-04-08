import React from 'react';

const TaskItem = ({ task, setTasks, setEditingTask }) => {
  const handleToggle = () => {
    setTasks(prevTasks => 
      prevTasks.map(t => 
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleEdit = () => {
    setEditingTask(task);
  };

  const handleDelete = () => {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  return (
    <li className={`flex justify-between items-center p-4 border rounded ${task.completed ? 'bg-green-100' : 'bg-white'} shadow`}>
      <div>
        <h3 className={`font-bold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={handleToggle} 
          className="bg-yellow-500 text-white rounded p-2 hover:bg-yellow-600 transition duration-200"
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button 
          onClick={handleEdit} 
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
        >
          Editar
        </button>
        <button 
          onClick={handleDelete} 
          className="bg-red-500 text-white rounded p-2 hover:bg-red-600 transition duration-200"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;