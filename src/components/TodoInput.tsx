import React from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function TodoInput({ value, onChange, onSubmit }: TodoInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo..."
        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={onSubmit}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <PlusCircle size={20} />
        Add
      </button>
    </div>
  );
}