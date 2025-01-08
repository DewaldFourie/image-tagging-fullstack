
import { Link } from "react-router-dom";
import './styles/home.css'


function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <div className="preview-container">
                    <div className="preview-element">
                        <Link to="/game/g1">Warm-Up</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game/g2">A Bit Tricky</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game/g3">Beast Mode</Link>
                    </div>
                </div>
                <div className="leaderboard-container">
                    <Link to="/leaderboard">Leaderboard</Link>
                </div> 
        </div>
    );
}

export default Home;