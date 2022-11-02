<template>
	<main>
		<div class="container">
			<h1>Hi! I'm Shan, <br> a Front End Developer <br> based in Vancouver, BC.</h1>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style lang="scss">
h1 {
	font-size: 2.25rem;
	font-weight: 700;
	line-height: normal;

	@media (min-width: 992px) {
		font-size: 3.25rem;
	}
}
</style>