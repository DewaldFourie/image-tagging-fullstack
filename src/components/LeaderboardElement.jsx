import { useState, useEffect } from "react";
import axios from 'axios';
import gameData from "./Data";
import './styles/leaderboardElement.css'
import PropTypes from 'prop-types';

const LeaderboardElement = ({ gameId }) => {
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
            <div className="leaderboard-element-header-container">
                <div className={`leaderboard-element-header-container ${game.difficulty}`}>
                    <div className="leaderboard-element-header-title-container">
                        <span className="leaderboard-element-header-title">{game.name}</span>
                    </div>
                </div>
            </div>
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

LeaderboardElement.propTypes = {
    gameId: PropTypes.string.isRequired
}

export default LeaderboardElement;