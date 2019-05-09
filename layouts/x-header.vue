<template>
	<Header class="layout-header-bar">
		<logo/>
	</Header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	},
	name: "XHeader"
}
</script>

<style scoped>
	.layout-header-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}

	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}

	.layout-nav {
		width: 420px;
		margin: 0 20px 0 auto;
	}
</style>
