import React, { useState } from 'react';
import { Trash2, Edit, Check } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-md"
          autoFocus
        />
      ) : (
        <p className="flex-1 text-white">{todo.text}</p>
      )}
      
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="p-2 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
          >
            <Check size={18} className="text-white" />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
          >
            <Edit size={18} className="text-white" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
        >
          <Trash2 size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}