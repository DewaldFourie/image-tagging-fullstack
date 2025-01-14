
import game1IMG from '../assets/images/photo-tagging-easy.jpeg'
import crazyChicken from '../assets/images/crazy-chicken.jpg'
import runningRoman from '../assets/images/running-roman.jpg'
import sandMan from '../assets/images/sand-man.jpg'

import game2IMG from '../assets/images/photo-tagging-medium.jpeg' 
import lazyLinda from '../assets/images/lazy-linda.jpg'
import casperGhost from '../assets/images/casper-ghost.jpg'
import lostMonkey from '../assets/images/lost-monkey.jpg'

// mock data
const gameData = {
    g1: {
        name: "Warm-Up",
        difficulty: "Easy",
        description: "Get comfortable with this level on how to find the elusive characters & give your eagle eye a test run.",
        image: game1IMG,
        objective: "Find the elusive characters",
        targets: {
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
            },
        },
        leaderboard: [
            { name: "Player 1", score: 50 },
            { name: "Player 2", score: 40 },
            { name: "Player 3", score: 30 },
        ],
    },
    g2: {
        name: "A Bit Tricky",
        difficulty: "Medium",
        description: "Description for Game 2",
        image: game2IMG,
        objective: "objective",
        targets: {
            target1: {
                name: "Lazy Linda",
                image: lazyLinda,
                coordinates: { x: 1035, y: 868 },
            },
            target2: {
                name: "Casper Ghost",
                image: casperGhost,
                coordinates: { x: 699, y: 1598 },
            },
            target3: {
                name: "Lost Monkey",
                image: lostMonkey,
                coordinates: { x: 84.1, y: 2163.3 },
            },
        },   
        leaderboard: [
            { name: "Player 1", score: 80 },
            { name: "Player 2", score: 70 },
            { name: "Player 3", score: 60 },
            { name: "Player 4", score: 50 },
        ],
        
    },
    g3: {
        name: "Beast Mode",
        difficulty: "Hard",
        description: "Description for Game 3",
        leaderboard: [
            { name: "Player 1", score: 60 },
            { name: "Player 2", score: 50 },
            { name: "Player 3", score: 40 },
        ],
    },
};

export default gameData