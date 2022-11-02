<template>
	<div class="page-canvas" ref='vantaRef'>
		<Header></Header>
		<Home></Home>
		<Footer></Footer>
	</div>
</template>

<script>
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

export default {
	name: 'IndexPage',
	mounted() {
		this.vantaEffect = TOPOLOGY({
			el: this.$refs.vantaRef,
			color: 0xddc086,
			backgroundColor: 0xffffff
		})
	},
	beforeDestroy() {
		if (this.vantaEffect) {
			this.vantaEffect.destroy()
		}
	}
}
</script>
