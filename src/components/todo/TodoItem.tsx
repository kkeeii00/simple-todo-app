import { Todo } from '@/lib/types';
import { Button } from '@/components/ui/Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
      />
      
      <span
        className={`flex-1 ${
          todo.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-900'
        }`}
      >
        {todo.title}
      </span>
      
      <Button
        variant="danger"
        onClick={() => onDelete(todo.id)}
        className="text-sm px-3 py-1"
      >
        削除
      </Button>
    </div>
  );
};