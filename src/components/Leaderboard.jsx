import { useEffect } from "react";
import './styles/leaderboard.css'
import LeaderboardElement from './LeaderboardElement'

function Leaderboard() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            <div className='leaderboard-list-container'>
                <div className='leaderboard-list-element'>
                    <LeaderboardElement gameId="g1" />
                </div >
                <div className='leaderboard-list-element'>
                    <LeaderboardElement gameId="g2" />
                </div>
                <div className='leaderboard-list-element'>
                    <LeaderboardElement gameId="g3" />
                </div>
            </div>
        </div>
    )
}

export default Leaderboard