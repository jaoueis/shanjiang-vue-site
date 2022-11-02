<template>
	<header>
		<div class="header-inner">
			<div>
				<Logo></Logo>
			</div>
			<div>
				<button class="mobile-menu-toggle" :aria-expanded="isActive" aria-label="Toggle the main menu" @click="toggleMenu">
					<span></span>
				</button>
			</div>
			<div :class="isActive === 'false' ? '' : 'toggled'">
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
			},
			isActive: 'false'
		}
	},
	mounted() {
		window.addEventListener('resize', this.onResize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		toggleMenu() {
			this.isActive = this.isActive === 'false' ? 'true' : 'false';
		},
		onResize() {
			this.isActive = 'false'
		}
	}
}
</script>

<style lang="scss">
header {
	z-index: 9 !important;

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;

		>div {
			&:last-child {
				position: fixed;
				top: 0;
				left: 100%;
				width: 100%;
				height: 100%;
				visibility: hidden;
				transition: all 0.4s cubic-bezier(0, 0, .58, 1);

				@media (min-width: 992px) {
					position: static;
					width: auto;
					background-color: transparent;
					visibility: visible;
				}

				&.toggled {
					top: 0;
					left: 0;
					background-color: var(--brand-dark);
					visibility: visible;
				}
			}
		}
	}

	.mobile-menu-toggle {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 30px;
		height: 20px;
		background-color: transparent;
		border: none;

		@media (min-width: 992px) {
			display: none;
		}

		&[aria-expanded='true'] {
			z-index: 1;

			span {
				background-color: transparent;

				&::before,
				&::after {
					width: 26px;
					transform-origin: 1px 50%;
					background-color: var(--brand-light);
				}

				&::before {
					transform: rotate(45deg);
				}

				&::after {
					transform-origin: 0 50%;
					transform: rotate(-45deg);
				}
			}
		}

		span {
			display: block;
			width: 20px;
			height: 2px;
			background-color: var(--brand-dark);
			transition: all 0.3s cubic-bezier(0, 0, .58, 1);

			&::before,
			&::after {
				position: absolute;
				left: 0;
				display: block;
				width: 30px;
				height: 2px;
				background-color: var(--brand-dark);
				content: '';
				transition: all 0.3s cubic-bezier(0, 0, .58, 1);
			}

			&::before {
				top: 0;
			}

			&::after {
				bottom: 0;
			}
		}
	}

	nav {
		width: 100%;
		height: 100%;

		ul {
			display: flex;
			gap: 2rem;
			list-style: none;

			@media (max-width: 991px) {
				flex-direction: column;
				justify-content: center;
				width: 100%;
				height: 100%;
				padding: 3rem;
			}

			li {
				a {

					color: #fff;
					font-size: 2rem;
					font-weight: 600;
					text-decoration: none;
					text-transform: lowercase;

					@media (min-width: 992px) {
						color: var(--brand-dark);
						font-size: 1rem;
					}

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