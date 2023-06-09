import { LoaderFunction, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { todoLoader, todosLoader } from "../api/loaders";

import Todo from "../pages/Todo";
import Todos from "../pages/Todos";
import { queryClient } from "../api";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="todos" element={<Todos />} loader={todosLoader(queryClient) as LoaderFunction} />
            <Route path="todos/:id" element={<Todo />} loader={todoLoader(queryClient) as LoaderFunction} />
            <Route path="*" element={<Navigate to="/todos" />} />
        </>
    )
);

function AppRoutes() {
    return (
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    )
}

export { AppRoutes }