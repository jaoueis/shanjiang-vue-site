<template>
	<main class="page-canvas" ref='vantaRef'>
		<p>
			this is a p
		</p>
	</main>
</template>

<script>
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

export default {
	name: 'IndexPage',
	mounted() {
    this.vantaEffect = TOPOLOGY({
      el: this.$refs.vantaRef,
	  color: 0xddc086,
	  backgroundColor: 0x333333
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>
