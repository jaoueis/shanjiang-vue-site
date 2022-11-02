<template>
	<nav aria-label="Social navigation">
		<ul>
			<li v-for="(url, name) in socials">
				<a :href="url" :title="name" target="_blank">
					<img :src="require('../assets/images/' + name.toLowerCase() + '.svg')" :alt="'Go to Shan\'s ' + name">
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'SocialNav',
	data() {
		return {
			socials: {
				Instagram: "https://www.instagram.com/jaoueis",
				GitHub: "https://github.com/jaoueis",
				Behance: "https://www.behance.net/jiang_shanc2db",
				LinkedIn: "https://www.linkedin.com/in/shan-jiang-795866a9",
			}
		}
	}
}
</script>

<style lang="scss">
nav {
	ul {
		display: flex;
		list-style: none;
		gap: 1rem;

		li {
			a {
				font-size: 1rem;
				font-weight: 600;

				img {
					display: block;
					width: 28px;
					height: 28px;
				}
			}
		}
	}
}
</style>