
import { Link } from "react-router-dom";
import './styles/home.css'


function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <div className="link-container">
                <Link to="/game/g1">
                    <div className="preview-container">
                        <div className="preview-element easy">
                            <div className="preview-element-name-container">
                                <span className="preview-element-name">Warm-Up</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/game/g2">
                    <div className="preview-container">
                        <div className="preview-element medium">
                            <div className="preview-element-name-container">
                                <span className="preview-element-name">A Bit Tricky</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/game/g3">
                    <div className="preview-container">
                        <div className="preview-element hard">
                            <div className="preview-element-name-container">
                                <span className="preview-element-name">Beast Mode</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="leaderboard-link-container">
                <Link to="/leaderboard">View Leaderboard ➤</Link>
            </div> 
        </div>
    );
}
export default Home;