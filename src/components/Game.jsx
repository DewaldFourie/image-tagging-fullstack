import '../components/styles/game.css'
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
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
    };
    
    const handleEndGame = () => {
        setIsGameStarted(false);
        setIsGameEnded(true);
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
                <div className='game-header-container'>
                    <h1 className='game-header'>{game.name}</h1>
                    <h4 className='game-description'>{game.description}</h4>
                </div>
                <div className='instructions-container'>
                    <h2 className='game-instructions'>{game.objective}</h2>
                    <div className={`target-container ${targetSticky ? 'sticky' : ''}`}>
                        <img src={game.targets.target1.image} alt="target image" className='target-image' />
                        <img src={game.targets.target2.image} alt="target image" className='target-image' />
                        <img src={game.targets.target3.image} alt="target image" className='target-image' />
                    </div>
                </div>
            </div>
            {isGameStarted ? (
                <div className="timer-container">
                    <h2>Timer: {timer}</h2>
                </div>
            ) : null}
            <div className='button-container'>
                <button onClick={handleStartGame}>{isGameStarted ? "Restart Game" : "Start Game"}</button>
                <button onClick={handleEndGame} disabled={isGameEnded}>
                    End Game
                </button>
            </div>

            {isGameEnded && (
                <div className="game-over-container">
                    <h2>Game Over</h2>
                    <p className='result-time'>Final Timer: {timer}</p>
                    <button onClick={() => setIsGameEnded(false)}>Play Again</button>
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
                        {Object.keys(game.targets).map((key) => (
                            <li key={key} onClick={() => handleTargetSelect(game.targets[key].name)}>
                                <img 
                                    src={game.targets[key].image} 
                                    alt={game.targets[key].name} 
                                    className='dropdown-target-image'
                                />
                                {game.targets[key].name}
                            </li>
                        ))}
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