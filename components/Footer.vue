<template>
	<footer>
		<div>
			<nav>
				<ul>
					<li>
						<a href="#">ig</a>
					</li>
					<li>
						<a href="#">gh</a>
					</li>
					<li>
						<a href="#">be</a>
					</li>
					<li>
						<a href="#">in</a>
					</li>
				</ul>
			</nav>
		</div>
		<div>
			<p>&copy; Shan Jiang</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1400px;
	padding: 2rem;
	margin: 0 auto;

	nav {
		ul {
			display: flex;
			list-style: none;
			gap: 2rem;

			li {
				a {
					color: #333;
					font-size: 1rem;
					font-weight: 600;
					text-decoration: none;
					text-transform: lowercase;
				}
			}
		}
	}
}
</style>