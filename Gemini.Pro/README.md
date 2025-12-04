# Interactive 3D Particle System

A real-time interactive 3D particle system using Three.js and MediaPipe Hands.

## Features

- **Hand Gesture Control**: Control particle scaling and expansion by moving your hands.
  - **Distance**: Move hands apart to expand, close to shrink.
- **Templates**: Choose from Heart, Flower, Saturn, Buddha, and Fireworks shapes.
- **Color Customization**: Adjust particle colors in real-time.
- **Modern UI**: Simple and clean interface.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open your browser at `http://localhost:5173/`.

## Usage

1.  Allow camera access when prompted.
2.  Show both hands to the camera.
3.  Move your hands apart or together to control the particles.
4.  Use the control panel to change shapes and colors.

## Technologies

- [Three.js](https://threejs.org/)
- [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- [Vite](https://vitejs.dev/)
