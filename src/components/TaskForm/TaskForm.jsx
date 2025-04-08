import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editingTask) {
      setTasks(tasks.map(task => (task.id === editingTask.id ? { ...task, title, description } : task)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: uuidv4(), title, description, completed: false, createdAt: new Date() }]);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la tarea"
        className="border border-gray-300 rounded p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción de la tarea"
        className="border border-gray-300 rounded p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600 transition duration-200">
        {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

export default TaskForm;