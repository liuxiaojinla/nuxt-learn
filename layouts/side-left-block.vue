<template>
	<Sider class="side-left" hide-trigger width="80"></Sider>
</template>

<script>
export default {
	name: "side-left-block"
}
</script>

<style scoped>
	.side-left {
		position: fixed;
		height: calc(100vh - 64px);
		overflow: auto;
		background-color: transparent;
		left: 0;
	}
</style>
