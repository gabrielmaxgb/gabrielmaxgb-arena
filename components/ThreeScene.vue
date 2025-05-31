<script setup lang="ts">
import * as THREE from "three";
import { onMounted, ref, onBeforeUnmount } from "vue";

const canvasRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if (!canvasRef.value) return;

	const scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0x000000, 10, 30); // desativado pra evitar esconder o cubo

	const camera = new THREE.PerspectiveCamera(
		75,
		canvasRef.value.clientWidth / canvasRef.value.clientHeight,
		0.1,
		1000
	);
	camera.position.z = 20;

	const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	canvasRef.value.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(8, 8, 8); // cubo um pouco menor
	const edges = new THREE.EdgesGeometry(geometry);
	const material = new THREE.LineBasicMaterial({
		color: "#FFFBEA",
		transparent: true,
		opacity: 1,
	});
	const wireframe = new THREE.LineSegments(edges, material);
	scene.add(wireframe);

	// Controle de rotação
	const velocity = { x: 0, y: 0 };
	let lastScrollY = window.scrollY;
	const friction = 0.9;

	// Atualiza velocidade com base no delta do scroll
	const onScroll = () => {
		const currentScrollY = window.scrollY;
		const delta = currentScrollY - lastScrollY;
		lastScrollY = currentScrollY;

		velocity.y += delta * 0.0006;
		velocity.x += delta * 0.0003;
	};

	window.addEventListener("scroll", onScroll);

	// Loop de animação
	const animate = () => {
		requestAnimationFrame(animate);

		// Atualiza rotação
		wireframe.rotation.x += velocity.x;
		wireframe.rotation.y += velocity.y;

		// Aplica fricção
		velocity.x *= friction;
		velocity.y *= friction;

		// Limita a rotação para evitar sair do campo de visão
		wireframe.rotation.x = Math.max(
			Math.min(wireframe.rotation.x, Math.PI),
			-Math.PI
		);
		wireframe.rotation.y = Math.max(
			Math.min(wireframe.rotation.y, Math.PI),
			-Math.PI
		);

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
	background: radial-gradient(ellipse at center, #0a0a0a 10%, #000000 90%);
}
</style>
