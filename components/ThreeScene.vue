<script setup lang="ts">
import * as THREE from "three";
import { onMounted, ref, onBeforeUnmount } from "vue";

const canvasRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (!canvasRef.value) return;

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(
		60,
		canvasRef.value.clientWidth / canvasRef.value.clientHeight,
		0.1,
		1000
	);
	camera.position.z = 20;

	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	canvasRef.value.appendChild(renderer.domElement);

	// Cubo central
	const geometry = new THREE.BoxGeometry(8, 8, 8);
	const edges = new THREE.EdgesGeometry(geometry);
	const material = new THREE.LineBasicMaterial({
		color: "#FFFBEA",
		transparent: true,
		opacity: 0.2,
	});
	const wireframe = new THREE.LineSegments(edges, material);
	scene.add(wireframe);

	// Partículas que voam livremente
	const particleCount = 600;
	const positions = new Float32Array(particleCount * 3);
	const velocities = new Float32Array(particleCount * 3);

	for (let i = 0; i < particleCount; i++) {
		const i3 = i * 3;
		positions[i3 + 0] = Math.random() * 60 - 30;
		positions[i3 + 1] = Math.random() * 30 - 15;
		positions[i3 + 2] = Math.random() * 60 - 30;

		velocities[i3 + 0] = (Math.random() - 0.5) * 0.05;
		velocities[i3 + 1] = (Math.random() - 0.5) * 0.03;
		velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
	}

	const particlesGeometry = new THREE.BufferGeometry();
	particlesGeometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positions, 3)
	);

	const particlesMaterial = new THREE.PointsMaterial({
		color: 0xffffff,
		size: 0.06,
		transparent: true,
		opacity: 0.4,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
	});
	const particles = new THREE.Points(particlesGeometry, particlesMaterial);
	scene.add(particles);

	// Scroll para rotação do cubo
	const velocity = { x: 0, y: 0 };
	let lastScrollY = window.scrollY;
	const friction = 0.9;

	const onScroll = () => {
		const delta = window.scrollY - lastScrollY;
		lastScrollY = window.scrollY;
		velocity.y += delta * 0.0006;
		velocity.x += delta * 0.0003;
	};
	window.addEventListener("scroll", onScroll);

	// Loop de animação
	const animate = () => {
		requestAnimationFrame(animate);

		// Roda o cubo
		wireframe.rotation.x += velocity.x + 0.001;
		wireframe.rotation.y += velocity.y + 0.001;
		velocity.x *= friction;
		velocity.y *= friction;

		// Atualiza partículas (voo aleatório contínuo)
		const pos = particlesGeometry.attributes.position.array as Float32Array;
		for (let i = 0; i < particleCount; i++) {
			const i3 = i * 3;

			pos[i3 + 0] += velocities[i3 + 0];
			pos[i3 + 1] +=
				velocities[i3 + 1] + Math.sin(Date.now() * 0.001 + i) * 0.001;
			pos[i3 + 2] +=
				velocities[i3 + 2] + Math.cos(Date.now() * 0.001 + i) * 0.001;

			// Reposiciona se sair da área visível (simula retorno natural)
			if (Math.abs(pos[i3 + 0]) > 35) pos[i3 + 0] = -pos[i3 + 0];
			if (Math.abs(pos[i3 + 1]) > 20) pos[i3 + 1] = -pos[i3 + 1];
			if (Math.abs(pos[i3 + 2]) > 35) pos[i3 + 2] = -pos[i3 + 2];
		}
		particlesGeometry.attributes.position.needsUpdate = true;

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
	background: radial-gradient(ellipse at center, #252523 0%, #000000 90%);
}
</style>
