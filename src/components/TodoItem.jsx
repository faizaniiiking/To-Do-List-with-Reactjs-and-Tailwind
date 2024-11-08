import React from 'react';

const TodoItem = ({ task, onEdit, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm">
      <span>{task.text}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
