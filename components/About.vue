<template>
	<main>
		<div class="container">
			<h1>About</h1>
			<div class="about-inner">
				<div>
					<p>
						<img src="../assets/images/9O6A9051-Edit.jpg" alt="Shan Jiang portrait">
					</p>
				</div>
				<div>
					<p>
						Shan is a dynamic front-end web developer with over four years of professional experience building WordPress websites and web portals for various industries. He is proficient with PHP, SCSS, jQuery, and modern JavaScript libraries/frameworks. He pays attention to details and aims to build pixel-perfect web projects.
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style lang="scss">
h1 {
	font-size: 2.25rem;
	font-weight: 700;

	@media (min-width: 992px) {
		font-size: 3.25rem;
	}
}

.about-inner {
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 400px minmax(0, calc(100% - 400px - 2rem));
		gap: 2rem;
	}
}
</style>