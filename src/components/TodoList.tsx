import React from 'react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export function TodoList({ todos, onDelete, onEdit }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-8">
        No todos yet. Add one to get started!
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}