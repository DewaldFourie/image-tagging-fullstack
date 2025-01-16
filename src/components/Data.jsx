
import game1IMG from '../assets/images/photo-tagging-easy.jpeg'
import crazyChicken from '../assets/images/crazy-chicken.jpg'
import runningRoman from '../assets/images/running-roman.jpg'
import sandMan from '../assets/images/sand-man.jpg'

import game2IMG from '../assets/images/photo-tagging-medium.jpeg' 
import lazyLinda from '../assets/images/lazy-linda.jpg'
import casperGhost from '../assets/images/casper-ghost.jpg'
import lostMonkey from '../assets/images/lost-monkey.jpg'

import game3IMG from '../assets/images/photo-tagging-hard.jpg'
import garfield from '../assets/images/garfield.jpg'
import jimmy from '../assets/images/jimmy.jpg'
import waldo from '../assets/images/waldo.jpg'

// mock data 
const gameData = {
    g1: {
        name: "Warm-Up",
        difficulty: "Easy",
        description: "Get comfortable with this level on how to find the elusive characters & give your eagle eye a test run.",
        image: game1IMG,
        objective: "Find The Elusive Characters:",
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
            { name: "Player 1", score: '01:10' },
            { name: "Player 2", score: '00:46' },
            { name: "Player 3", score: '00:39' },
        ],
    },
    g2: {
        name: "A Bit Tricky",
        difficulty: "Medium",
        description: "Challenge yourself with trickier hides. Stay sharp—things are heating up!",
        image: game2IMG,
        objective: "Spot The Characters Hiding:",
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
            { name: "Player 1", score: '02:16' },
            { name: "Player 2", score: '05:26' },
            { name: "Player 3", score: '11:29' },
            { name: "Player 4", score: '03:12' },
        ],
        
    },
    g3: {
        name: "Beast Mode",
        difficulty: "Hard",
        description: "Only for the brave! The ultimate test of focus and precision awaits.",
        image: game3IMG,
        objective: "Find The Hiding Experts:",
        targets: {
            target1: {
                name: "Garfield",
                image: garfield,
                coordinates: { x: 3182.7, y: 1040.2 },
            },
            target2: {
                name: "Jimmy",
                image: jimmy,
                coordinates: { x: 966.3, y: 3357.7 },
            },
            target3: {
                name: "Waldo",
                image: waldo,
                coordinates: { x: 1595, y: 4580 },
            },
        },   
        leaderboard: [
            { name: "Player 1", score: '24:16' },
            { name: "Player 2", score: '10:46' },
            { name: "Player 3", score: '09:27' },
        ],
    },
};

export default gameData