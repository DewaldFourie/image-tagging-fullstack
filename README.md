# Image Tagging Application - Frontend

## Overview

The **Image Tagging Application** allows users to tag characters in a theme-related environment. Upon clicking "Start," the user will be timed from the moment the game begins. The total time taken to complete tagging will be counted as the user's score, which can be submitted to the overall leaderboard.

This frontend is built using the **MERN** stack, with a focus on frontend technologies. The frontend communicates with a backend server to perform CRUD operations and retrieve data from a Supabase database.

### Key Features:
- **Image Tagging**: Users can tag characters in an image related to a specific theme.
- **Timer**: The user is timed from the moment they hit "Start," and the time taken is recorded.
- **Leaderboard**: The final score (time taken) is submitted to the leaderboard for ranking.
- **Interactive UI**: Built with CSS and SCSS for a responsive and attractive user interface.
- **Confetti Celebration**: Canvas-confetti library is used to celebrate the user’s success upon completion.

### Tech Stack:
- **React** (for UI and state management)
- **Vite** (for fast development and build processes)
- **CSS & SCSS** (for styling)
- **Axios** (for data fetching)
- **Async Functions** (for asynchronous operations)
- **Canvas-Confetti** (for visual celebration)
- **ESLint** (for linting and code quality)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/image-tagging-app.git
    cd image-tagging-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

The frontend will be available at `http://localhost:3000`.

## Features Overview

- **Image Uploading and Tagging**: The user can upload an image and tag characters.
- **Timer Functionality**: The timer starts when the user hits "Start" and tracks the time taken to complete the tagging.
- **Leaderboard Integration**: After completing the game, the user's time is sent to the backend server and recorded in the Supabase database.
- **Confetti Celebration**: When the user finishes tagging, a confetti animation is triggered as a fun visual cue.

## API Integration

The frontend communicates with the backend server via **Axios** to handle CRUD operations. This includes:
- Fetching images to tag
- Posting the user’s score to the leaderboard
- Handling user authentication for secure access

### Example Axios Calls:
- Fetch all images for tagging: 
    ```js
    axios.get('http://localhost:5000/images')
    ```

- Submit the user’s score:
    ```js
    axios.post('http://localhost:5000/leaderboard', { score })
    ```

## Code Quality

- **ESLint** is used for maintaining code quality and consistency across the project. Ensure you run linting commands to keep the code clean.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## Contact

For any questions or issues, reach out via GitHub Issues.
