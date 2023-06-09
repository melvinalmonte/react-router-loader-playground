import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Define the paths that your application can take
const Paths = {
  todoDetail: "/todos/:id",
} as const;

type TodoDetailParams = typeof Paths.todoDetail;

// override react-router ActionFunctionArgs to include params
interface LoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<TodoDetailParams>>;
}

export type { Todo, LoaderArgs };
