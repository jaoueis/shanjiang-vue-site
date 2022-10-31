<template>
	<div class="page-canvas" ref='vantaRef'>
		<Header></Header>
		<Body></Body>
	</div>
</template>

<script>
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

export default {
	name: 'ContactPage',
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
