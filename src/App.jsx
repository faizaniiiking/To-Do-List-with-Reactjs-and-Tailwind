import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from "./components/TodoForm"

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Add task
  const addTask = (taskText) => {
    const newTask = { text: taskText, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  // Edit task
  const editTaskItem = (task) => {
    setEditTask(task); // Set the task to be edited
  };

  // Save edited task
  const saveTask = (taskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTask.id ? { ...task, text: taskText } : task
    );
    setTasks(updatedTasks);
    setEditTask(null); // Reset edit task state
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-3xl text-center font-bold mb-4">To-Do List</h1>

      {/* Todo Form for adding or editing tasks */}
      <TodoForm
        task={editTask}
        onSave={editTask ? saveTask : addTask}
        onCancel={() => setEditTask(null)} // Reset the edit task state
      />

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onEdit={editTaskItem}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
