import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';

const initialTasks = [
  {
    id: uuidv4(),
    title: "Actualizar:",
    description: "Editalo, eliminado y completa la tarea",
    completed: false,
    createdAt: new Date()
  }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Gestor de Tareas</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} editingTask={editingTask} setEditingTask={setEditingTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskStats tasks={tasks} />
      <TaskList tasks={tasks} filter={filter} setTasks={setTasks} setEditingTask={setEditingTask} />
    </div>
  );
}

export default App;