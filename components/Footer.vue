<template>
	<footer>
		<div>
			<nav aria-label="Footer navigation">
				<ul>
					<li v-for="(url, name) in socials">
						<a :href="url" :title="name" target="_blank">
							<img :src="require('../assets/images/' + name.toLowerCase() + '.svg')" :alt="'Go to Shan\'s ' + name">
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<div>
			<span>&copy; {{ new Date().getFullYear() }} Shan Jiang</span>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			socials: {
				Instagram: "https://www.instagram.com/jaoueis/",
				GitHub: "https://github.com/jaoueis",
				Behance: "https://www.behance.net/jiang_shanc2db",
				LinkedIn: "https://www.linkedin.com/in/shan-jiang-795866a9/",
			}
		}
	}
}
</script>

<style lang="scss">
footer {
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

	nav {
		ul {
			display: flex;
			list-style: none;
			gap: 1rem;

			li {
				a {
					color: #333;
					font-size: 1rem;
					font-weight: 600;
					text-decoration: none;
					text-transform: lowercase;

					img {
						display: block;
						width: 28px;
						height: 28px;
					}
				}
			}
		}
	}

	>div {
		&:last-child {
			margin-top: 1rem;

			@media (min-width: 992px) {
				margin-top: 0;
			}

			span {
				color: #333;
				font-size: 1rem;
				font-weight: 600;
			}
		}
	}
}
</style>