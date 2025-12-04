import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import GUI from 'lil-gui';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  particleCount: 20000,
  particleSize: 0.15,
  cameraDistance: 30,
  autoRotateSpeed: 1.5,
  loadingHideDelay: 2000, // milliseconds
};

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
  template: 'Heart',
  color: '#00d9ff',
  particleSize: CONFIG.particleSize,
  autoRotate: true,
  handDistance: 1.0,      // Controlled by hand tracking (0.5 - 2.5)
  handTension: 0.0,       // Controlled by hand openness (0 - 1)
  isTracking: false,
};

// ============================================
// THREE.JS SETUP
// ============================================
let scene, camera, renderer, particles, geometry, material, controls;
let currentPositions, targetPositions;
const clock = new THREE.Clock();

function initThreeJS() {
  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015);

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = CONFIG.cameraDistance;
  camera.position.y = 5;

  // Renderer
  const canvas = document.getElementById('canvas');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Controls
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = state.autoRotate;
  controls.autoRotateSpeed = CONFIG.autoRotateSpeed;

  // Window resize handler
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// PARTICLE SYSTEM
// ============================================
function initParticles() {
  geometry = new THREE.BufferGeometry();
  
  currentPositions = new Float32Array(CONFIG.particleCount * 3);
  targetPositions = new Float32Array(CONFIG.particleCount * 3);

  // Initialize random positions
  for (let i = 0; i < CONFIG.particleCount * 3; i++) {
    currentPositions[i] = (Math.random() - 0.5) * 50;
    targetPositions[i] = currentPositions[i];
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

  // Load particle texture
  const textureLoader = new THREE.TextureLoader();
  const sprite = textureLoader.load('https://threejs.org/examples/textures/sprites/disc.png');

  // Material
  material = new THREE.PointsMaterial({
    size: state.particleSize,
    color: new THREE.Color(state.color),
    map: sprite,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Generate initial shape
  updateParticleShape(state.template);
}

// ============================================
// SHAPE GENERATORS
// ============================================
function updateParticleShape(shapeName) {
  let generator;
  
  switch (shapeName) {
    case 'Heart':
      generator = generateHeartPoint;
      break;
    case 'Flower':
      generator = generateFlowerPoint;
      break;
    case 'Saturn':
      generator = generateSaturnPoint;
      break;
    case 'Buddha':
      generator = generateBuddhaPoint;
      break;
    case 'Fireworks':
      generator = generateFireworksPoint;
      break;
    default:
      generator = generateHeartPoint;
  }

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const point = generator(i);
    targetPositions[i * 3] = point.x;
    targetPositions[i * 3 + 1] = point.y;
    targetPositions[i * 3 + 2] = point.z;
  }
}

function generateHeartPoint(index) {
  // Parametric heart equation
  const t = Math.random() * Math.PI * 2;
  const scale = 1.5;
  const volumeScale = Math.sqrt(Math.random());
  
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  let z = (Math.random() - 0.5) * 10;

  return {
    x: x * scale * volumeScale,
    y: y * scale * volumeScale,
    z: z * volumeScale,
  };
}

function generateFlowerPoint(index) {
  const radius = Math.random() * 20;
  const theta = Math.random() * Math.PI * 2;
  const petals = 6;
  
  // Create petal effect with sine wave
  const petalEffect = Math.sin(theta * petals) * 3;
  const height = Math.sin(radius * 0.3) * 5 + petalEffect;
  
  return {
    x: radius * Math.cos(theta),
    y: height,
    z: radius * Math.sin(theta),
  };
}

function generateSaturnPoint(index) {
  const ringRatio = 0.65; // 65% ring, 35% planet
  
  if (Math.random() > ringRatio) {
    // Planet (sphere)
    return generateSpherePoint(0.5);
  } else {
    // Ring
    const angle = Math.random() * Math.PI * 2;
    const distance = 12 + Math.random() * 8;
    return {
      x: distance * Math.cos(angle),
      y: (Math.random() - 0.5) * 0.8,
      z: distance * Math.sin(angle),
    };
  }
}

function generateBuddhaPoint(index) {
  const r = Math.random();
  
  if (r < 0.35) {
    // Base/Legs (wide, low sphere)
    const pt = generateSpherePoint(1.0);
    return {
      x: pt.x * 1.3,
      y: Math.abs(pt.y) * 0.4 - 10,
      z: pt.z * 1.2,
    };
  } else if (r < 0.75) {
    // Body (tapered cylinder)
    const angle = Math.random() * Math.PI * 2;
    const height = (Math.random() - 0.5) * 12;
    const radius = 7 - Math.abs(height) / 3;
    const radialPos = Math.sqrt(Math.random());
    
    return {
      x: radius * Math.cos(angle) * radialPos,
      y: height - 2,
      z: radius * Math.sin(angle) * radialPos,
    };
  } else {
    // Head (small sphere)
    const pt = generateSpherePoint(0.35);
    return {
      x: pt.x,
      y: pt.y + 7,
      z: pt.z,
    };
  }
}

function generateFireworksPoint(index) {
  // Spherical explosion pattern
  const pt = generateSpherePoint(1.0);
  const explosionRadius = 20;
  
  return {
    x: pt.x * explosionRadius,
    y: pt.y * explosionRadius,
    z: pt.z * explosionRadius,
  };
}

function generateSpherePoint(radius) {
  // Uniform sphere distribution
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = radius * Math.cbrt(Math.random());
  
  return {
    x: r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.sin(phi) * Math.sin(theta),
    z: r * Math.cos(phi),
  };
}

// ============================================
// GUI SETUP
// ============================================
function initGUI() {
  const gui = new GUI({ title: 'Control Panel' });
  
  gui.add(state, 'template', ['Heart', 'Flower', 'Saturn', 'Buddha', 'Fireworks'])
    .name('Template')
    .onChange((value) => {
      updateParticleShape(value);
    });
  
  gui.addColor(state, 'color')
    .name('Particle Color')
    .onChange((value) => {
      material.color.set(value);
    });
  
  gui.add(state, 'particleSize', 0.05, 1.0)
    .name('Particle Size')
    .onChange((value) => {
      material.size = value;
    });
  
  gui.add(state, 'autoRotate')
    .name('Auto Rotate')
    .onChange((value) => {
      controls.autoRotate = value;
    });
  
  // Camera metrics folder (read-only)
  const metricsFolder = gui.addFolder('Hand Tracking Metrics');
  metricsFolder.add(state, 'handDistance', 0, 3).name('Hand Distance').listen().disable();
  metricsFolder.add(state, 'handTension', 0, 1).name('Hand Tension').listen().disable();
  metricsFolder.add(state, 'isTracking').name('Tracking Active').listen().disable();
}

// ============================================
// MEDIAPIPE HANDS SETUP
// ============================================
async function initHandTracking() {
  const videoElement = document.getElementById('input-video');
  const loadingElement = document.getElementById('loading');

  // Initialize MediaPipe Hands
  const hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
  });

  hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
  });

  hands.onResults(onHandsResults);

  // Initialize camera
  const cameraUtils = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 640,
    height: 480,
  });

  cameraUtils.start();

  // Hide loading after a short delay
  setTimeout(() => {
    loadingElement.classList.add('hidden');
  }, CONFIG.loadingHideDelay);
}

function onHandsResults(results) {
  state.isTracking = results.multiHandLandmarks && results.multiHandLandmarks.length > 0;

  if (results.multiHandLandmarks && results.multiHandLandmarks.length === 2) {
    const hand1 = results.multiHandLandmarks[0];
    const hand2 = results.multiHandLandmarks[1];

    // 1. Calculate hand distance (for scaling/expansion)
    // Using wrist landmarks (index 0)
    const wrist1 = hand1[0];
    const wrist2 = hand2[0];
    
    const dx = wrist1.x - wrist2.x;
    const dy = wrist1.y - wrist2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Normalize distance (typical range: 0.2 - 0.8)
    let normalizedDistance = (distance - 0.2) * 3.0;
    normalizedDistance = Math.max(0.5, Math.min(2.5, normalizedDistance));
    
    // Smooth transition
    state.handDistance += (normalizedDistance - state.handDistance) * 0.1;

    // 2. Calculate hand tension (open vs closed)
    // Measure distance from wrist to middle finger tip
    const calculateOpenness = (hand) => {
      const wrist = hand[0];
      const middleTip = hand[12];
      const dx = middleTip.x - wrist.x;
      const dy = middleTip.y - wrist.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const openness1 = calculateOpenness(hand1);
    const openness2 = calculateOpenness(hand2);
    const avgOpenness = (openness1 + openness2) / 2;
    
    // Map openness to tension (inverted)
    // Small distance = closed fist = high tension
    // Large distance = open hand = low tension
    let tension = 1.0 - ((avgOpenness - 0.15) * 2.5);
    tension = Math.max(0, Math.min(1, tension));
    
    // Smooth transition
    state.handTension += (tension - state.handTension) * 0.1;
  } else {
    // Reset to defaults when hands not detected
    state.handDistance += (1.0 - state.handDistance) * 0.05;
    state.handTension += (0.0 - state.handTension) * 0.05;
  }
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
  requestAnimationFrame(animate);

  const time = clock.getElapsedTime();
  const positions = particles.geometry.attributes.position.array;

  // Update particle positions
  for (let i = 0; i < CONFIG.particleCount; i++) {
    const ix = i * 3;
    const iy = i * 3 + 1;
    const iz = i * 3 + 2;

    let tx = targetPositions[ix];
    let ty = targetPositions[iy];
    let tz = targetPositions[iz];

    // Apply fireworks animation
    if (state.template === 'Fireworks') {
      const explosionSpeed = 2.0;
      const cycleTime = time % 4; // 4-second cycle
      
      const expansionFactor = 1 + cycleTime * explosionSpeed;
      tx *= expansionFactor;
      ty *= expansionFactor;
      tz *= expansionFactor;
      
      // Add gravity effect
      ty -= Math.pow(cycleTime, 2) * 8;
      
      // Fade and respawn
      if (cycleTime > 3.5) {
        const resetFactor = (4 - cycleTime) * 2;
        tx *= resetFactor;
        ty *= resetFactor;
        tz *= resetFactor;
      }
    }

    // Apply hand distance scaling
    tx *= state.handDistance;
    ty *= state.handDistance;
    tz *= state.handDistance;

    // Apply hand tension (jitter/noise effect)
    if (state.handTension > 0.1) {
      const noiseIntensity = state.handTension * 2.5;
      tx += (Math.random() - 0.5) * noiseIntensity;
      ty += (Math.random() - 0.5) * noiseIntensity;
      tz += (Math.random() - 0.5) * noiseIntensity;
    }

    // Smooth interpolation
    const lerpSpeed = state.template === 'Fireworks' ? 0.15 : 0.05;
    positions[ix] += (tx - positions[ix]) * lerpSpeed;
    positions[iy] += (ty - positions[iy]) * lerpSpeed;
    positions[iz] += (tz - positions[iz]) * lerpSpeed;
  }

  particles.geometry.attributes.position.needsUpdate = true;

  // Update controls and render
  controls.update();
  renderer.render(scene, camera);
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  initThreeJS();
  initParticles();
  initGUI();
  initHandTracking();
  animate();
}

// Start the application
init();
