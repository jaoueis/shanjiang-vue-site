<template>
	<footer>
		<div class="footer-inner">
			<div>
				<SocialNav></SocialNav>
			</div>
			<div>
				<span>&copy; {{ new Date().getFullYear() }} Shan Jiang</span>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
.footer-inner {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1400px;
	padding: 2rem;
	margin: 0 auto;

	@media (min-width: 992px) {
		flex-direction: row;
	}

	>div {
		&:last-child {
			margin-top: 1rem;

			@media (min-width: 992px) {
				margin-top: 0;
			}

			span {
				font-size: 1rem;
				font-weight: 600;
			}
		}
	}
}
</style>