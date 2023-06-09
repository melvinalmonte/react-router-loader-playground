import { LoaderArgs, Todo } from "./types";
import { todoQuery, todosQuery } from "./queries";

import { QueryClient } from "@tanstack/react-query";

function todosLoader(queryClient: QueryClient) {
  return async () => {
    const data = queryClient.getQueryData<Todo[]>(todosQuery().queryKey);
    if (data) {
      return data;
    }
    return queryClient.fetchQuery(todosQuery());
  };
}

function todoLoader(queryClient: QueryClient) {
  return async ({ params }: LoaderArgs) => {
    const id = params.id ?? "";
    const data = queryClient.getQueryData<Todo>(todoQuery(id).queryKey);
    if (data) {
      return data;
    }
    return queryClient.fetchQuery(todoQuery(id));
  };
}

export { todosLoader, todoLoader };
