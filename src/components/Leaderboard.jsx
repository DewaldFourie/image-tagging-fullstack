import React from "react";
import { Link } from "react-router-dom";

function Leaderboard() {
    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                <li>
                    <Link to="/leaderboard/game1">Game 1 Leaderboard</Link>
                </li>
                <li>
                    <Link to="/leaderboard/game2">Game 2 Leaderboard</Link>
                </li>
                <li>
                    <Link to="/leaderboard/game3">Game 3 Leaderboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default Leaderboard