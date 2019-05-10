<template>
	<Sider class="aside-nav-left" hide-trigger width="160">
		<Menu active-name="1-2" width="auto" class="aside-nav-menus">
			<MenuItem v-for="(item,index) in data" :key="'menu_'+index" :name="index">{{item.title}}</MenuItem>
		</Menu>
	</Sider>
</template>

<script>
export default {
	name: "aside-nav-left",
	data() {
		return {
			data: [
				{
					title: "PHP",
					children: []
				},
				{
					title: "Java",
					children: []
				},
				{
					title: "Javascript",
					children: []
				},
				{
					title: "CSS",
					children: []
				},
				{
					title: "HTML",
					children: []
				},
				{
					title: "Vue",
					children: []
				},
				{
					title: "数据库",
					children: []
				}
			]
		};
	},
}
</script>

<style scoped>
	.aside-nav-left {
		background: transparent;
		position: fixed;
	}

	.aside-nav-menus {
		background-color: transparent;
	}

	.aside-nav-menus:after {
		background-color: transparent;
	}
</style>
