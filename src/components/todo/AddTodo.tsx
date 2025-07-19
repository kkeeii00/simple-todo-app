'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface AddTodoProps {
  onAdd: (title: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={title}
        onChange={setTitle}
        placeholder="新しいタスクを入力..."
        className="flex-1"
      />
      <Button type="submit" disabled={!title.trim()}>
        追加
      </Button>
    </form>
  );
};