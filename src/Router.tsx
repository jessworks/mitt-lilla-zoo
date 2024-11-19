import { createBrowserRouter } from "react-router-dom";
import { AnimalList } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { Layout } from "./components/Layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <AnimalList />,
            },
            {
                path: "/Animal/:id",
                element: <Animal />,
            },
        ]
    }
]);