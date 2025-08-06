import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState<{ task: string; done: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo.trim(), done: false }]);
      setNewTodo('');
    }
  };

  const toggleDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const activeTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">TODO App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-600 rounded px-3 py-2 flex-1 bg-gray-700"
            placeholder="Enter new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            className="ml-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <ul className="mb-4">
            {activeTodos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded mb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleDone(todos.indexOf(todo))}
                    className="mr-2"
                  />
                  <span className={todo.done ? 'line-through text-gray-400' : ''}>{todo.task}</span>
                </div>
                <button
                  className="ml-2 bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  onClick={() => deleteTodo(todos.indexOf(todo))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
          <ul>
            {completedTodos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-700 p-2 rounded mb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleDone(todos.indexOf(todo))}
                    className="mr-2"
                  />
                  <span className={todo.done ? 'line-through text-gray-400' : ''}>{todo.task}</span>
                </div>
                <button
                  className="ml-2 bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                  onClick={() => deleteTodo(todos.indexOf(todo))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}