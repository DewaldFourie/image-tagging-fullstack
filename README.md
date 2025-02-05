# Image Tagging Application - Frontend

## Preview
<img width="1440" alt="Image Tagging APP" src="https://github.com/user-attachments/assets/6fb88119-5021-45bb-b344-3e2562031588" />

## [Click HERE for DEMO](https://image-tagging-fullstack.vercel.app/)

## Overview

The **Image Tagging Application** allows users to tag characters in a theme-related environment. Upon clicking "Start," the user will be timed from the moment the game begins. The total time taken to complete tagging will be counted as the user's score, which can be submitted to the overall leaderboard.

This frontend is built using the **MERN** stack, with a focus on frontend technologies. The frontend communicates with a backend server to perform CRUD operations and retrieve data from a Supabase database.

### Key Features:
- **Image Tagging**: Users can tag characters in an image related to a specific theme.
- **Timer**: The user is timed from the moment they hit "Start," and the time taken is recorded.
- **Leaderboard**: The final score (time taken) is submitted to the leaderboard for ranking.
- **Interactive UI**: Built with CSS and SCSS for a responsive and attractive user interface.
- **Confetti Celebration**: Canvas-confetti library is used to celebrate the user’s success upon completion.
- **Tagging Mechanism**: Users select a dropdown option corresponding to the character in the image and click on the character's location in the image. The system checks if the clicked coordinates match the correct position for that tag.

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
- **Tagging Mechanism**: 
    - The user selects a character from a dropdown menu.
    - They then click on the image at the location where they believe the character is.
    - The system checks the user's clicked coordinates against the predefined correct coordinates for that character.
    - If the clicked coordinates match the correct ones, the tag is considered correct.

## Tagging Mechanism

The tagging system works as follows:

1. **Character Selection**: The user selects a character from the dropdown menu.
2. **Clicking Coordinates**: The user clicks on the image at the point they believe the selected character is located. 
    - The system tracks the user's click coordinates on the image.
3. **Coordinate Validation**: 
    - The system compares the user's click coordinates to the pre-defined correct coordinates for the selected character.
    - If the coordinates match within an acceptable threshold, the tag is considered correct.
    - If the coordinates do not match, the user is prompted to try again.

This allows for an interactive and accurate tagging experience, where the user must carefully click on the image to tag characters correctly.

## API Integration

The frontend communicates with the backend server via **Axios** to handle CRUD operations. This includes:
- Fetching images for tagging
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

## Authors

- [@DewaldFourie](https://github.com/DewaldFourie)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## Contact

For any questions or issues, reach out via GitHub Issues.
