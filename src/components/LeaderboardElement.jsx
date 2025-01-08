import { useParams } from "react-router-dom";

// mock data
const leaderboardData = {
    g1: {
        name: "Game 1", 
        description: "Description for Game 1",
        leaderboard: [
            { name: "Player 1", score: 100 },
            { name: "Player 2", score: 90 },
        ],
    },
    g2: {
        name: "Game 2", 
        description: "Description for Game 2",
        leaderboard: [
            { name: "Player 1", score: 80 },
            { name: "Player 2", score: 70 },
            { name: "Player 3", score: 60 },
            { name: "Player 4", score: 50 },
        ],
    },
    g3: {
        name: "Game 3", 
        description: "Description for Game 3",
        leaderboard: [
            { name: "Player 1", score: 60 },
            { name: "Player 2", score: 50 },
            { name: "Player 3", score: 40 },
            
        ],
    }

}

const LeaderboardElement = () => {
    const { gameId } = useParams(); 
    const game = leaderboardData[gameId];

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