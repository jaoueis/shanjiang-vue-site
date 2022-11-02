<template>
	<main>
		<div class="container">
			<h1>contact</h1>
			<div class="about-inner">
				<div>
					<p>
						Shoot me a message
						<br>
						<a href="mailto:jiang_shan@live.com">jiang_shan@live.com</a>
					</p>

				</div>
				<div>
					<p>
						Find me on social networks
						<br>
						<SocialNav></SocialNav>
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