import '../components/styles/game.css'
import { useParams, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import gameData from './Data'

const Game = () => {
    const { gameId } = useParams();
    const game  = gameData[gameId];
    const navigate = useNavigate();

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [targetSticky, setTargetSticky] = useState(false);
    const [clickCoordinates, setClickCoordinates] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
    const [locatedTargets, setLocatedTargets] = useState({});
    const [isGameWon, setIsGameWon] = useState(false);
    const [username, setUsername] = useState('');
    const [gameLeaderboard, setGameLeaderboard] = useState(game.leaderboard);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setTargetSticky(true);
            } else {
                setTargetSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let intervalId;

        if (isGameStarted){
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isGameStarted]);

    const handleStartGame = () => {
        setIsGameStarted(true);
        setIsGameEnded(false);
        setTimer(0);
        setLocatedTargets({})
        setDropdownVisible(false)
        setIsGameWon(false)
    };
    
    const handleEndGame = () => {
        setIsGameStarted(false);
        setIsGameEnded(true);
        setDropdownVisible(false);
        setLocatedTargets({})
        setIsGameWon(false)
    };

    const handleImageClick = (e) => {
        if (isGameStarted) {
            const image = e.target;
            const rect = image.getBoundingClientRect();
    
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const normalizedX = (clickX / rect.width) * image.naturalWidth;
            const normalizedY = (clickY / rect.height) * image.naturalHeight;
    
            setClickCoordinates({ x: normalizedX, y: normalizedY });
            setDropdownPosition({ x: e.clientX + window.scrollX + 45, y: e.clientY + window.scrollY });
            setDropdownVisible(true);
        }
    }


    const handleTargetSelect = (targetName) => {
        setDropdownVisible(false);
    
        const tolerance = 40;
    
        // Find the selected target dynamically
        const selectedTarget = Object.values(game.targets).find(
            (target) => target.name === targetName
        );
    
        if (!selectedTarget || !selectedTarget.coordinates) {
            console.log("Fail!, You selected wrong target");
            return;
        }
    
        const { x, y } = selectedTarget.coordinates;
    
        if (
            Math.abs(clickCoordinates.x - x) <= tolerance &&
            Math.abs(clickCoordinates.y - y) <= tolerance
        ) {
            console.log(`Success!, You selected ${targetName}`);
            setLocatedTargets((prev) => {
                const updatedLocatedTargets = { ...prev, [targetName]: true};

                // check if all targets are located
                if (Object.keys(updatedLocatedTargets).length === Object.keys(game.targets).length) {
                    setIsGameWon(true)
                    setIsGameEnded(true);
                    setIsGameStarted(false); //stop the game
                    console.log("Well done, You've found them all!");
                }

                return updatedLocatedTargets
            });
        } else {
            console.log(`Fail!, You selected wrong target`);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newEntry = { name: username, score: timer };

        const updatedLeaderboard = [...game.leaderboard, newEntry];
        updatedLeaderboard.sort((a, b) => b.score - a.score);
        setGameLeaderboard(updatedLeaderboard)
        console.log(`Player Name: ${username} Score: ${timer}`)
        console.log("Updated Leaderboard:", updatedLeaderboard);
        
        setUsername('');

        navigate(`/leaderboard/${gameId}`);
    }
    

    // TEMPORARY CODE
    const handleTargetCapture = () => {
        if (clickCoordinates) {
            console.log(
                `Coordinates for target: (${clickCoordinates.x}, ${clickCoordinates.y})`
            );
            // Use this data to update your gameData targets
        }
    };


    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <div className="game-container">
            <div className='game-top-container'>
                <div className={`button-container ${targetSticky ? 'sticky' : ''}`}>
                    <button
                        className={`start-end-btn start`}
                        onClick={handleStartGame}
                    >
                        {isGameStarted ? "Restart" : "Start"}
                    </button>
                    <button
                        className={`start-end-btn end ${!isGameStarted ? 'hidden' : ''}`}
                        onClick={handleEndGame}
                    >
                        End
                    </button>
                </div>
                <div className={`game-header-container ${targetSticky ? 'sticky' : ''}`}>
                    <h1 className='game-header'>{game.name}</h1>
                    <h4 className='game-description'>{game.description}</h4>
                </div>
                <div className='instructions-container'>
                    <h2 className='game-instructions'>{game.objective}</h2>
                    <div className={`target-container ${targetSticky ? 'sticky' : ''}`}>
                        {Object.keys(game.targets).map((key) => {
                            const target = game.targets[key];
                            const isLocated = locatedTargets[target.name]
                            return (
                                <div key={key} className='target-wrapper'>
                                    <img 
                                        src={target.image} 
                                        alt={target.name}
                                        className={`target-image ${isLocated ? 'located' : ''}`} 
                                    />
                                    {isLocated && (
                                        <div className='target-checkmark'>
                                            <span>✔</span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {isGameStarted ? (
                <div className="timer-container">
                    <h2>Timer: {timer}</h2>
                </div>
            ) : null}
            {isGameEnded && (
                <div className="game-over-container">
                    <h2 className='game-over-header'>{isGameWon ? "Well done! You've found them all." : "Game Over"}</h2>
                    <p className='result-time'>Time: {timer} s</p>
                    {isGameWon && (
                        <div className='result-data-capture-container'>
                            <form action="" method="get" onSubmit={handleFormSubmit} className='result-input-container'>
                                <input 
                                    type="text" 
                                    id='username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Player Name'
                                    required
                                />
                                <button type='submit' className='score-submit-btn'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                    {!isGameWon && (
                        <div className='game-over-btn-container'>
                            <button className='game-over-btn play-again-btn' onClick={() => setIsGameEnded(false)}>Play Again</button>
                            <button className='game-over-btn quit-btn' onClick={() => navigate('/')}>Quit</button>
                        </div>
                    )}
                </div>
            )}
            <div className='image-container'>
                <img onClick={handleImageClick} src={game.image} alt="Game Image" className="game-image" />
            </div>
            {dropdownVisible && (
                <div 
                    className="dropdown-menu" 
                    style={{ top: dropdownPosition.y, left: dropdownPosition.x }}
                >
                    <ul>
                        {Object.keys(game.targets).map((key) => {
                            const targetName = game.targets[key].name;
                            const isLocated = locatedTargets[targetName];
                            
                            return (
                                <li 
                                    key={key} 
                                    onClick={!isLocated ? () => handleTargetSelect(targetName) : null}
                                    className={isLocated ? 'target-located' : ''}
                                    style={{ pointerEvents: isLocated ? 'none' : 'auto' , opacity: isLocated ? 0.5 : 1 }}
                                >
                                <img 
                                    src={game.targets[key].image} 
                                    alt={targetName} 
                                    className='dropdown-target-image'
                                />
                                {targetName}
                            </li>
                            )
                        })}
                    </ul>
                </div>
            )}
            {clickCoordinates && (
                <button onClick={handleTargetCapture}>Capture Coordinates</button>
            )}
        </div>
    );
}

export default Game;