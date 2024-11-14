import { createBrowserRouter } from "react-router-dom";
import { AnimalList } from "./pages/Home";
import { Animal } from "./pages/Animal";


export const router = createBrowserRouter([
    {
        // Route to render the home page directly
        path: "/",
        element: <AnimalList />,
    },
    {
        // Route for a specific animal page with dynamic `id`
        path: "/Animal/:id",
        element: <Animal />,
    },
]);