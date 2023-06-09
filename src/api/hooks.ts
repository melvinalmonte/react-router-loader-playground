import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { todoQuery, todosQuery } from "./queries";

import { Todo } from "./types";

function useTodosQuery(): UseQueryResult<Todo[], Error> {
  return useQuery(todosQuery());
}

function useTodoQuery(id: string): UseQueryResult<Todo, Error> {
  return useQuery(todoQuery(id));
}

export { useTodosQuery, useTodoQuery };
