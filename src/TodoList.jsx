import { TodoItem } from "./TodoItem";
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <li className="empty">No items in the list</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            //or we can just give {...todo} and it will pass all the props
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
