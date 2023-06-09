import { Todo } from "./types";

function todoQuery(id: string) {
  return {
    queryKey: ["todo", id],
    queryFn: async () => {
      const todo = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!todo.ok) {
        throw new Response("", {
          status: 401,
          statusText: "No permissions, homie.",
        });
      }
      return todo.json() as Promise<Todo>;
    },
  };
}

function todosQuery() {
  return {
    queryKey: ["todos"],
    queryFn: async () => {
      const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!todos.ok) {
        throw new Response("", {
          status: 401,
          statusText: "No permissions, homie.",
        });
      }
      return todos.json() as Promise<Todo[]>;
    },
    enabled: false,
  };
}

export { todoQuery, todosQuery };
