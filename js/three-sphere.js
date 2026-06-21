const container = document.getElementById('three-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

const width = container.clientWidth;
const height = container.clientHeight;
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(2.5, 3);
const material = new THREE.MeshBasicMaterial({
    color: 0x00FFA3,
    wireframe: true,
    transparent: true,
    opacity: 0.4
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

animate();