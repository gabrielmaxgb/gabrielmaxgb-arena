<script setup lang="ts">
import * as THREE from "three";
import { onMounted, ref, onBeforeUnmount } from "vue";

const canvasRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (!canvasRef.value) return;

	const scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0x000000, 10, 60);

	const camera = new THREE.PerspectiveCamera(
		75,
		canvasRef.value.clientWidth / canvasRef.value.clientHeight,
		0.1,
		1000
	);
	camera.position.z = 9;

	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	canvasRef.value.appendChild(renderer.domElement);

	// CUBO PRINCIPAL
	const geometry = new THREE.BoxGeometry(8, 8, 8);
	const edges = new THREE.EdgesGeometry(geometry);
	const material = new THREE.LineBasicMaterial({
		color: "#FFFBEA",
		transparent: true,
		opacity: 0.5,
	});
	const wireframe = new THREE.LineSegments(edges, material);
	scene.add(wireframe);

	const cubes: any = [];
	const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
	const cubeMaterial = new THREE.MeshBasicMaterial({
		color: 0xfffbea,
		transparent: true,
		opacity: 0.3,
	});
	for (let i = 0; i < 40; i++) {
		const cube = new THREE.Mesh(cubeGeometry, cubeMaterial.clone());
		cube.position.set(
			Math.random() * 80 - 40,
			Math.random() * 80 - 40,
			Math.random() * 80 - 40
		);
		scene.add(cube);
		cubes.push(cube);
	}

	// LUZ E SOMBRA SUAVE
	const light = new THREE.DirectionalLight(0xfffbea, 0.5);
	light.position.set(10, 10, 10);
	scene.add(light);

	const ambient = new THREE.AmbientLight(0xfffbea, 0.2);
	scene.add(ambient);

	// MOVIMENTO
	const velocity = { x: 0, y: 0 };
	let lastScrollY = window.scrollY;
	const friction = 0.9;

	const onScroll = () => {
		const currentScrollY = window.scrollY;
		const delta = currentScrollY - lastScrollY;
		lastScrollY = currentScrollY;
		velocity.y += delta * 0.0004;
		velocity.x += delta * 0.0002;
	};
	window.addEventListener("scroll", onScroll);

	const clock = new THREE.Clock();
	const animate = () => {
		requestAnimationFrame(animate);
		const elapsed = clock.getElapsedTime();

		// Oscilação de câmera
		camera.position.x = Math.sin(elapsed * 0.3) * 0.5;
		camera.position.y = Math.cos(elapsed * 0.2) * 0.5;
		camera.lookAt(0, 0, 0);

		// Cubo principal
		wireframe.rotation.x += velocity.x + 0.001;
		wireframe.rotation.y += velocity.y + 0.001;
		velocity.x *= friction;
		velocity.y *= friction;

		// Cubos voadores
		cubes.forEach((cube, i) => {
			cube.rotation.x += 0.001 + i * 0.00003;
			cube.rotation.y += 0.001 + i * 0.00002;
			cube.position.y += Math.sin(elapsed + i) * 0.002;
		});

		renderer.render(scene, camera);
	};

	animate();

	const onResize = () => {
		if (!canvasRef.value) return;
		camera.aspect = canvasRef.value.clientWidth / canvasRef.value.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
	};
	window.addEventListener("resize", onResize);

	onBeforeUnmount(() => {
		window.removeEventListener("scroll", onScroll);
		window.removeEventListener("resize", onResize);
	});
});
</script>

<template>
	<div ref="canvasRef" class="three-background" />
</template>

<style scoped>
.three-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	pointer-events: none;
	background: radial-gradient(ellipse at center, #252523 50%, #000000 100%);
}
</style>
