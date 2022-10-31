<template>
	<header>
		<div class="header-inner">
			<div>
				<Logo></Logo>
			</div>
			<nav>
				<ul>
					<li>
						<a href="https://shanjiang.io/shan_jiang_resume.pdf" target="_blank">Resume</a>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/contact">Contact</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

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