import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Base from "./Base";
import About from "./components/About";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Base />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/leaderboard",
                    element: <Leaderboard />
                },
                {
                    path: "/about",
                    element: <About />
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;