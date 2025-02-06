import { useState, useEffect } from "react";
import axios from 'axios';
import gameData from "./Data";
import './styles/leaderboardElement.css'
import PropTypes from 'prop-types';
import loader from '../assets/images/leaderboardLoader.gif'

const LeaderboardElement = ({ gameId }) => {
    const [leaderboard, setLeaderboard] = useState(null);
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


    return (
        <div className="leaderboard-element-container">
            <div className="leaderboard-element-header-container">
                <div className={`leaderboard-element-header-container ${game.difficulty}`}>
                    <div className="leaderboard-element-header-title-container">
                        <span className="leaderboard-element-header-title">{game.name}</span>
                    </div>
                </div>
            </div>
            <div className="leaderboard-element-score-container">
                {leaderboard === null ? (
                    <div className="leaderboard-loading">
                        <img src={loader} alt="Loading..." />
                    </div>
                ) : (
                    <div className="leaderboard-table">
                        {leaderboard.map((player, index) => (
                            <div
                                key={index}
                                className={`leaderboard-row ${index === 0 ? "leaderboard-first-place" : ""}`}
                            >
                                <div className="leaderboard-rank">
                                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                                </div>
                                <div className="leaderboard-name">{player.player_name}</div>
                                <div className="leaderboard-score">{String(Math.floor(player.score / 60)).padStart(2, '0')}:{String(player.score % 60).padStart(2, '0')}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

LeaderboardElement.propTypes = {
    gameId: PropTypes.string.isRequired
}

export default LeaderboardElement;
