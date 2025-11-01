export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoService {
  todos: Todo[];
  nextId: number;
}

// typescript
export class TodoService implements ITodoService {
  todos: Todo[];
  nextId: number = 0;

  constructor() {
    this.todos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Python', completed: true },
      { id: 3, text: 'Learn OOP', completed: false },
    ];
    this.nextId = 4;
  }

  getAll(): Todo[] {
    return [...this.todos];
  }
  getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }
  addTodo(text: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      text,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  updateTodo(id: number, updatedFields: Partial<Todo>): Todo | null {
    const todo = this.getTodoById(id);
    if (todo) {
      Object.assign(todo, updatedFields);
      return todo;
    }
    return null;
  }
  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
  getFilteredTodos(filter: string): Todo[] {
    switch (filter) {
      case 'completed':
        return this.todos.filter((todo) => todo.completed);
      case 'active':
        return this.todos.filter((todo) => !todo.completed);
      default:
        return this.getAll();
    }
  }
}

export default new TodoService();
