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
	camera.position.z = 14;

	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	canvasRef.value.appendChild(renderer.domElement);

	// Cubo principal
	const mainCube = new THREE.Mesh(
		new THREE.BoxGeometry(8, 8, 8),
		new THREE.MeshBasicMaterial({
			color: 0xfffbea,
			wireframe: true,
			transparent: true,
			opacity: 0.1,
			fog: true,
		})
	);
	scene.add(mainCube);

	// Luz
	const light = new THREE.DirectionalLight(0xfffbea, 0.5);
	light.position.set(10, 10, 10);
	scene.add(light);
	scene.add(new THREE.AmbientLight(0xfffbea, 0.2));

	// Cubos voadores (monocromáticos)
	const floatingCubes: THREE.Mesh[] = [];
	const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
	const cubeMaterial = new THREE.MeshStandardMaterial({
		color: 0xfffbea,
		transparent: true,
		opacity: 0.2,
	});
	for (let i = 0; i < 100; i++) {
		const cube = new THREE.Mesh(cubeGeometry, cubeMaterial.clone());
		cube.position.set(
			Math.random() * 100 - 50,
			Math.random() * 100 - 50,
			Math.random() * 100 - 50
		);
		cube.rotation.set(
			Math.random() * Math.PI,
			Math.random() * Math.PI,
			Math.random() * Math.PI
		);
		scene.add(cube);
		floatingCubes.push(cube);
	}

	// Scroll influencia
	const velocity = { x: 0, y: 0 };
	let lastScrollY = window.scrollY;
	const friction = 0.9;

	const onScroll = () => {
		const currentScrollY = window.scrollY;
		const delta = currentScrollY - lastScrollY;
		lastScrollY = currentScrollY;
		velocity.y += delta * 0.0005;
		velocity.x += delta * 0.0002;
	};
	window.addEventListener("scroll", onScroll);

	const clock = new THREE.Clock();
	const animate = () => {
		requestAnimationFrame(animate);
		const elapsed = clock.getElapsedTime();

		camera.position.x = Math.sin(elapsed * 0.2) * 1;
		camera.position.y = Math.cos(elapsed * 0.3) * 1;
		camera.lookAt(0, 0, 0);

		mainCube.rotation.x += velocity.x + 0.001;
		mainCube.rotation.y += velocity.y + 0.001;
		velocity.x *= friction;
		velocity.y *= friction;

		// animação dos cubos
		floatingCubes.forEach((cube, i) => {
			cube.rotation.x += 0.001 + i * 0.00001;
			cube.rotation.y += 0.001 + i * 0.000015;
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
	background: radial-gradient(ellipse at center, #1a1a1a 50%, #000000 100%);
}
</style>
