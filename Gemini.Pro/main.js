import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

// --- Configuration ---
const CONFIG = {
  particleCount: 5000,
  particleSize: 0.05,
  defaultColor: 0xffffff,
  cameraZ: 5,
};

// --- State ---
const state = {
  template: 'heart',
  color: CONFIG.defaultColor,
  handDistance: 0, // 0 to 1 (normalized)
  isHandClosed: false,
  targetScale: 1,
  currentScale: 1,
};

// --- Three.js Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = CONFIG.cameraZ;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('output-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// --- Particles ---
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(CONFIG.particleCount * 3);
const colors = new Float32Array(CONFIG.particleCount * 3);

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: CONFIG.particleSize,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  transparent: true,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// --- Shape Generators ---
function getPointOnHeart(t) {
  // Heart curve
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return new THREE.Vector3(x * 0.1, y * 0.1, 0);
}

function getPointOnFlower(t, k = 5) {
  // Rose curve: r = cos(k * theta)
  const r = Math.cos(k * t);
  const x = r * Math.cos(t);
  const y = r * Math.sin(t);
  return new THREE.Vector3(x * 2, y * 2, 0);
}

function getPointOnSaturn() {
  // Sphere + Ring
  if (Math.random() > 0.3) {
    // Planet
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = 1;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  } else {
    // Ring
    const angle = Math.random() * Math.PI * 2;
    const r = 1.5 + Math.random() * 1.0;
    const x = r * Math.cos(angle);
    const z = r * Math.sin(angle);
    return new THREE.Vector3(x, 0.1 * (Math.random() - 0.5), z);
  }
}

function getPointOnBuddha() {
  // Simplified meditating figure (stacked spheres approximation)
  const r = Math.random();
  if (r < 0.4) {
    // Body (Base)
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const rad = 1.0;
    return new THREE.Vector3(rad * Math.sin(phi) * Math.cos(theta), rad * Math.sin(phi) * Math.sin(theta) - 1, rad * Math.cos(phi));
  } else if (r < 0.7) {
    // Chest
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const rad = 0.8;
    return new THREE.Vector3(rad * Math.sin(phi) * Math.cos(theta), rad * Math.sin(phi) * Math.sin(theta) + 0.5, rad * Math.cos(phi));
  } else {
    // Head
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const rad = 0.5;
    return new THREE.Vector3(rad * Math.sin(phi) * Math.cos(theta), rad * Math.sin(phi) * Math.sin(theta) + 1.6, rad * Math.cos(phi));
  }
}

function getPointOnFireworks() {
  // Random sphere explosion
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.random() * 3;
  return new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
}

// --- Particle Update Logic ---
const targetPositions = new Float32Array(CONFIG.particleCount * 3);

function updateShape() {
  for (let i = 0; i < CONFIG.particleCount; i++) {
    let vec;
    switch (state.template) {
      case 'heart':
        vec = getPointOnHeart(Math.random() * Math.PI * 2);
        // Add some depth
        vec.z += (Math.random() - 0.5) * 0.5;
        break;
      case 'flower':
        vec = getPointOnFlower(Math.random() * Math.PI * 2);
        vec.z += (Math.random() - 0.5) * 0.5;
        break;
      case 'saturn':
        vec = getPointOnSaturn();
        // Tilt saturn
        vec.applyAxisAngle(new THREE.Vector3(1, 0, 1).normalize(), 0.5);
        break;
      case 'buddha':
        vec = getPointOnBuddha();
        break;
      case 'fireworks':
        vec = getPointOnFireworks();
        break;
      default:
        vec = new THREE.Vector3();
    }
    targetPositions[i * 3] = vec.x;
    targetPositions[i * 3 + 1] = vec.y;
    targetPositions[i * 3 + 2] = vec.z;
  }
}

// Initial shape
updateShape();

// --- Animation Loop ---
function animate() {
  requestAnimationFrame(animate);

  // Smoothly interpolate scale based on hand distance
  // If hands are far apart (tension), expand.
  // If hands are close, shrink or normal.
  // Let's map handDistance (0..1) to scale (0.5..2.0)
  
  // Logic:
  // handDistance ~ 0 (hands together) -> Scale 0.5
  // handDistance ~ 1 (hands far) -> Scale 2.0
  
  const targetS = 0.5 + state.handDistance * 2.5;
  state.currentScale += (targetS - state.currentScale) * 0.1;

  particles.scale.setScalar(state.currentScale);
  
  // Rotate slightly
  particles.rotation.y += 0.002;

  // Move particles towards target positions (lerp)
  const positionsAttribute = geometry.attributes.position;
  const currentPositions = positionsAttribute.array;

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const ix = i * 3;
    const iy = i * 3 + 1;
    const iz = i * 3 + 2;

    currentPositions[ix] += (targetPositions[ix] - currentPositions[ix]) * 0.05;
    currentPositions[iy] += (targetPositions[iy] - currentPositions[iy]) * 0.05;
    currentPositions[iz] += (targetPositions[iz] - currentPositions[iz]) * 0.05;
  }
  
  positionsAttribute.needsUpdate = true;

  // Update Color
  const color = new THREE.Color(state.color);
  const colorsAttribute = geometry.attributes.color;
  for(let i=0; i<CONFIG.particleCount; i++) {
      colorsAttribute.setXYZ(i, color.r, color.g, color.b);
  }
  colorsAttribute.needsUpdate = true;

  renderer.render(scene, camera);
}

animate();

// --- UI Event Listeners ---
document.getElementById('template-select').addEventListener('change', (e) => {
  state.template = e.target.value;
  updateShape();
});

document.getElementById('color-picker').addEventListener('input', (e) => {
  state.color = e.target.value;
});

// --- MediaPipe Hands Setup ---
const videoElement = document.getElementById('input-video');
const trackingStatus = document.getElementById('tracking-status');
const gestureStatus = document.getElementById('gesture-status');

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

hands.onResults(onResults);

function onResults(results) {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    trackingStatus.textContent = `Tracking ${results.multiHandLandmarks.length} hand(s)`;
    trackingStatus.style.color = '#4caf50';

    if (results.multiHandLandmarks.length === 2) {
      // Calculate distance between two hands (using wrist or index finger)
      const hand1 = results.multiHandLandmarks[0][9]; // Middle finger mcp
      const hand2 = results.multiHandLandmarks[1][9];
      
      const dx = hand1.x - hand2.x;
      const dy = hand1.y - hand2.y;
      const distance = Math.sqrt(dx*dx + dy*dy);
      
      // Normalize distance (approximate range 0.1 to 0.8)
      const normalizedDist = Math.max(0, Math.min(1, (distance - 0.1) * 2));
      state.handDistance = normalizedDist;
      
      gestureStatus.textContent = `Distance: ${distance.toFixed(2)}`;
    } else {
        // One hand - maybe control rotation or just default
        state.handDistance = 0.2; // Default
        gestureStatus.textContent = "One Hand";
    }
  } else {
    trackingStatus.textContent = "No hands detected";
    trackingStatus.style.color = '#f44336';
    state.handDistance = 0.2;
  }
}

// Initialize Camera
const cameraUtils = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 640,
  height: 480
});

cameraUtils.start();

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
