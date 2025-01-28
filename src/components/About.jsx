import '../components/styles/about.css'

const About = () => {
    
    return (
        <div className='about-page-container'>
            <div className="about-container">
                <h1 className="about-title">About Image Tag</h1>
                <p className="about-text">
                    Image Tag is a fun and challenging game where you have to find and tag characters in a scene. The game starts off easy, but gets progressively harder as you progress through the levels.
                </p>
                <p className="about-text">
                    The game is similar to "Where's Waldo?" where you have to find Waldo in a crowded scene. But in Image Tag, you have to find and tag multiple different characters in a scene.
                </p>
                <h2 className="about-subtitle">How it Works</h2>
                <p className="about-text">
                    The game uses a combination of React on the frontend and Express and PostgreSQL on the backend to store and retrieve the scoreboard. The scoreboard ranks the top scores of each game, so you can compete with others to get the best score.
                </p>
                <h2 className="about-subtitle">Technical Details</h2>
                <p className="about-text">
                    The frontend of the game is built using React, a popular JavaScript library for building user interfaces. The backend is built using Express, a popular Node.js framework for building web applications, and PostgreSQL, a powerful open-source database.
                </p>
                <p className="about-text">
                    The game uses a RESTful API to communicate between the frontend and backend, allowing for fast and efficient data transfer.
                </p>
            </div>
        </div>

    );
}

export default About;