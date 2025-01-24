
import { Link } from "react-router-dom";
import './styles/leaderboard.css'
import './LeaderboardElement'

function Leaderboard() {
    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <ul>
                <li>
                    <Link to="/leaderboard/g1">Game 1 Leaderboard</Link>
                </li>
                <li>
                    <Link to="/leaderboard/g2">Game 2 Leaderboard</Link>
                </li>
                <li>
                    <Link to="/leaderboard/g3">Game 3 Leaderboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default Leaderboard