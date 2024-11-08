import React, { useState, useEffect } from 'react';

const TodoForm = ({ task, onSave, onCancel }) => {
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (task) {
      setTaskText(task.text); // pre-fill text if editing
    }
  }, [task]);

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSave = () => {
    if (taskText.trim() !== "") {
      onSave(taskText);
      setTaskText(""); // Clear the input after saving
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder={task ? "Edit task" : "Add a new task"}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSave}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {task ? "Save Task" : "Add Task"}
      </button>
      {task && (
        <button
          onClick={onCancel}
          className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default TodoForm;
