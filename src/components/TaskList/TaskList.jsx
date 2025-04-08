import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, filter, setTasks, setEditingTask }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <ul className="space-y-2">
      {filteredTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          setTasks={setTasks} 
          setEditingTask={setEditingTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;