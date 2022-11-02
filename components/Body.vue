<template>
	<main>
		<h1>Hi! I'm Shan, <br> a Front End Developer <br> based in Vancouver, BC.</h1>
	</main>
</template>

<script>
export default {
	name: 'body'
}
</script>

<style lang="scss">
main {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1400px;
	padding: 0 2rem;
	margin: 0 auto;

	h1 {
		font-size: 52px;
		font-weight: 700;
	}
}
</style>