import '../components/styles/game.css'
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import game1IMG from '../assets/images/photo-tagging-easy.jpeg'
import crazyChicken from '../assets/images/crazy-chicken.jpg'
import runningRoman from '../assets/images/running-roman.jpg'
import sandMan from '../assets/images/sand-man.jpg'

// mock data
const gameData = {
    g1: {
        name: "Warm-Up",
        difficulty: "Easy",
        description: "Get comfortable with this level on how to find the elusive characters & give your eagle eye a test run.",
        image: game1IMG,
        objective: "Find the elusive characters",
        targets : {
            target1: {
                name: "Crazy Chicken",
                image: crazyChicken,
                coordinates: { x: 703, y: 722 },
            },
            target2: {
                name: "Running Roman",
                image: runningRoman,
                coordinates: { x: 726, y: 1270 },
            },
            target3: {
                name: "Sand Man",
                image: sandMan,
                coordinates: { x: 107, y: 480 },
            }
        },
    },
    g2: {
        name: "A Bit Tricky",
        difficulty: "Medium",
        description: "Description for Game 2"
    },
    g3: {
        name: "Beast Mode",
        difficulty: "Hard",
        description: "Description for Game 3"
    }
}

const Game = () => {
    const { gameId } = useParams();
    const game  = gameData[gameId];

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [targetSticky, setTargetSticky] = useState(false);
    const [clickCoordinates, setClickCoordinates] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
    const [locatedTargets, setLocatedTargets] = useState({});
    const [isGameWon, setIsGameWon] = useState(false);


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
            setDropdownPosition({ x: e.clientX + window.scrollX + 20, y: e.clientY + window.scrollY });
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
                    <h2>{isGameWon ? "Well done! You've found them all." : "Game Over"}</h2>
                    <p className='result-time'>Final Timer: {timer}</p>
                    <button onClick={() => setIsGameEnded(false)}>Play Again</button>
                    <Link to="/">Quit</Link>
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