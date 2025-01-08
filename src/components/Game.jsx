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
            },
            target2: {
                name: "Running Roman",
                image: runningRoman,
            },
            taret3: {
                name: "Sand Man",
                image: sandMan,
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
                        <img src={game.targets.taret3.image} alt="target image" className='target-image' />
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
                <img src={game.image} alt="Game Image" className="game-image" />
            </div>
        </div>
    );
}

export default Game;