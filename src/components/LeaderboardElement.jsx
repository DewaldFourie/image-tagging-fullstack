import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import gameData from "./Data";
import './styles/leaderboardElement.css'

const LeaderboardElement = () => {
    const { gameId } = useParams(); 
    const [leaderboard, setLeaderboard] = useState([]);
    const game = gameData[gameId];

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get(`https://wilful-ninetta-dewaldfourie-4987cbf4.koyeb.app/api/leaderboards/${gameId}`);
                setLeaderboard(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLeaderboard();
    }, [gameId]);

    if (!game || !leaderboard) {
        return <div>Loading...</div>;
    }

    return (
        <div className="leaderboard-element-container">
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <ul>
                {leaderboard.map((player, index) => (
                    <li key={index}>
                        {player.player_name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default LeaderboardElement;