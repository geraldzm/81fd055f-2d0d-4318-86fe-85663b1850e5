import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-tokio-100 text-gray-800">
      <div className="bg-tokio-200 p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">TODO App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 flex-1 bg-tokio-50"
            placeholder="Enter new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            className="ml-2 bg-tokio-300 hover:bg-tokio-400 text-gray-800 px-4 py-2 rounded"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center bg-tokio-50 p-2 rounded">
              <span>{todo}</span>
              <button
                className="ml-2 bg-tokio-300 hover:bg-tokio-400 text-gray-800 px-2 py-1 rounded"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}