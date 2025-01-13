import { useParams } from "react-router-dom";
import gameData from "./Data";

// mock data


const LeaderboardElement = () => {
    const { gameId } = useParams(); 
    const game = gameData[gameId];

    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <div className="leaderboard-container">
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <ul>
                {game.leaderboard.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default LeaderboardElement;