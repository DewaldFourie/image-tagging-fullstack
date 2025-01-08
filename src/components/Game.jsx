import '../components/styles/game.css'
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import game1IMG from '../assets/images/photo-tagging-easy.jpeg'

// mock data
const gameData = {
    g1: {
        name: "Game 1",
        description: "Description for Game 1",
        image: game1IMG,
    },
    g2: {
        name: "Game 2",
        description: "Description for Game 2"
    },
    g3: {
        name: "Game 3",
        description: "Description for Game 3"
    }
}

const Game = () => {
    const { gameId } = useParams();
    const game  = gameData[gameId];

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isGameEnded, setIsGameEnded] = useState(false);

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
            <h1>{game.name}</h1>
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