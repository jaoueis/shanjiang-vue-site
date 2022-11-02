<template>
	<header>
		<div class="header-inner">
			<div>
				<Logo></Logo>
			</div>
			<div>
				<nav>
					<ul>
						<li>
							<a href="https://shanjiang.io/shan_jiang_resume.pdf" target="_blank">Resume</a>
						</li>
						<li v-for="(name, url) in navs">
							<NuxtLink :to="'/' + url">{{ name }}</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			navs: {
				about: 'About',
				contact: 'Contact',
			}
		}
	}
}
</script>

<style lang="scss">
header {
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
	}

	nav {
		ul {
			display: flex;
			list-style: none;
			gap: 2rem;

			li {
				a {
					font-size: 1rem;
					font-weight: 600;
					text-decoration: none;
					text-transform: lowercase;

					&:hover,
					&:focus {
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>