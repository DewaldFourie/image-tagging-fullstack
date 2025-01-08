import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Base from "./Base";
import About from "./components/About";
import Game from "./components/Game";
import LeaderboardElement from "./components/LeaderboardElement";

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
                {
                    path: "/game/:gameId",
                    element: <Game />
                },
                {
                    path: "/leaderboard/:gameId",
                    element: <LeaderboardElement />
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;