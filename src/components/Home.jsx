
import { Link } from "react-router-dom";
import './styles/home.css'


function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <div className="preview-container">
                    <div className="preview-element">
                        <Link to="/game/g1">Game 1</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game/g2">Game 2</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game/g3">Game 3</Link>
                    </div>
                </div>
                <div className="leaderboard-container">
                    <Link to="/leaderboard">Leaderboard</Link>
                </div> 
        </div>
    );
}

export default Home;