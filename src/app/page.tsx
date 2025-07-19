'use client';

import { useState, useEffect } from 'react';
import { Todo } from '@/lib/types';
import { saveTodos, loadTodos, generateId } from '@/lib/storage';
import { AddTodo } from '@/components/todo/AddTodo';
import { TodoItem } from '@/components/todo/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Todo App
          </h1>
          <p className="text-gray-600">
            タスクを効率的に管理しましょう
          </p>
          {totalCount > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              {completedCount} / {totalCount} 完了
            </p>
          )}
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <AddTodo onAdd={addTodo} />
          
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              タスクがありません。新しいタスクを追加してください。
            </p>
          ) : (
            <div className="space-y-2">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}