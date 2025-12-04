# Interactive 3D Particle System

A real-time interactive 3D particle system powered by Three.js and MediaPipe hand tracking.

## Features

### 1. Hand Gesture Control
- **Scale Control**: Move your hands apart to expand the particle system, bring them together to contract
- **Tension Effect**: Close your fists to add a "breathing" noise effect to particles
- **Real-time Response**: Particles respond instantly to hand movements

### 2. Particle Templates
Choose from 5 different particle formations:
- **Heart**: Parametric heart shape with volumetric distribution
- **Flower**: Rose-like pattern with petal effects
- **Saturn**: Planet with surrounding rings
- **Buddha**: Meditating figure approximation
- **Fireworks**: Dynamic explosion effect with gravity

### 3. Customization
- **Color Picker**: Adjust particle colors in real-time
- **Particle Size**: Control individual particle size
- **Auto Rotate**: Toggle automatic camera rotation

### 4. Modern UI
- Clean, minimalist interface
- Semi-transparent control panel with backdrop blur
- Live hand tracking metrics display
- Small video preview in corner

## Requirements

- Modern web browser (Chrome, Edge, Firefox recommended)
- Webcam access
- JavaScript enabled

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Usage

1. Open the application in a web browser
2. Allow camera access when prompted
3. Position yourself so the camera can see both hands
4. Move hands apart/together to control particle scale
5. Close/open fists to add tension effects
6. Use the control panel to switch templates and adjust colors

## Technology Stack

- **Three.js**: 3D rendering and particle system
- **MediaPipe Hands**: Real-time hand tracking
- **lil-gui**: Modern control panel UI
- **Vite**: Build tool and development server

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Requires HTTPS for camera access

## Performance

- 20,000 particles rendered at 60 FPS
- Optimized with BufferGeometry and typed arrays
- Hardware acceleration via WebGL
