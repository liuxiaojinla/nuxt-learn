<template>
	<Sider class="side-right" hide-trigger width="80">
	</Sider>
</template>

<script>
export default {
	name: "side-right-block"
}
</script>

<style scoped>
	.side-right {
		position: fixed;
		height: calc(100vh - 64px);
		overflow: auto;
		background-color: transparent;
		right: 0;
	}
</style>
