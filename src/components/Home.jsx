
import { Link } from "react-router-dom";
import './styles/home.css'


function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
                <div className="preview-container">
                    <div className="preview-element">
                        <Link to="/game1">Play Game 1</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game2">Play Game 2</Link>
                    </div>
                    <div className="preview-element">
                        <Link to="/game3">Play Game 3</Link>
                    </div>
                </div>
                <div className="leaderboard-container">
                    <Link to="/leaderboard">Leader Board</Link>
                </div> 
        </div>
    );
}

export default Home;