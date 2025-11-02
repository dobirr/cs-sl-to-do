import { useEffect, useState } from 'react';
import todoService, { type Todo } from '../services/todoService.ts';
import { useParams } from 'react-router-dom';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { username } = useParams();
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    setTodos(todoService.getAll());
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">My Todos ({username})</h4>
              <select
                className="form-select w-auto"
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value as 'all' | 'completed' | 'pending')
                }
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="card-body">
              <ul className="list-group mb-3">
                {todos
                  .filter((todo) => {
                    if (filter === 'all') return true;
                    if (filter === 'completed') return todo.completed;
                    return !todo.completed;
                  })
                  .map((todo) => (
                    <li
                      key={todo.id}
                      className={`list-group-item d-flex justify-content-between align-items-center ${
                        todo.completed ? 'list-group-item-success' : ''
                      }`}
                    >
                      <span>{todo.text}</span>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => {
                          console.log('Lorem ipsum');
                        }}
                      >
                        {todo.completed
                          ? 'Mark as Pending'
                          : 'Mark as Completed'}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
