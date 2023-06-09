import Card from "../components/card";
import { useTodosQuery } from "../api/hooks";

const Todos = () => {
  const { data, status } = useTodosQuery();

  switch (status) {
    case "loading":
      return (
        <div className="flex flex-row justify-center items-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      );
    case "error":
      return <p>Something went wrong</p>;
    case "success":
      return (
        <div className="flex flex-row flex-wrap gap-4">
          {data.map((todo) => (
            <Card
              id={todo.id}
              title={todo.title}
              description={`Status: ${String(todo.completed)}`}
            />
          ))}
        </div>
      );
    default:
      return <p>Action is not allowed</p>;
  }
};

export default Todos;
