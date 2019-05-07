<template>
	<Layout class="layout">
		<!-- 页头 -->
		<Header class="layout-header-bar">
		</Header>

		<Layout>
			<Sider class="side-left" hide-trigger collapsible :collapsed-width="78"></Sider>
			<Layout class="main-container">
				<Sider class="aside-nav-left" hide-trigger width="160">
					<Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
						<Submenu name="1">
							<template slot="title">
								<Icon type="ios-navigate"></Icon>
								Item 1
							</template>
							<MenuItem name="1-1">Option 1</MenuItem>
							<MenuItem name="1-2">Option 2</MenuItem>
							<MenuItem name="1-3">Option 3</MenuItem>
						</Submenu>
						<Submenu name="2">
							<template slot="title">
								<Icon type="ios-keypad"></Icon>
								Item 2
							</template>
							<MenuItem name="2-1">Option 1</MenuItem>
							<MenuItem name="2-2">Option 2</MenuItem>
						</Submenu>
						<Submenu name="3">
							<template slot="title">
								<Icon type="ios-analytics"></Icon>
								Item 3
							</template>
							<MenuItem name="3-1">Option 1</MenuItem>
							<MenuItem name="3-2">Option 2</MenuItem>
						</Submenu>
					</Menu>
				</Sider>
				<Layout class="main-content">
					<Breadcrumb>
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Components</BreadcrumbItem>
						<BreadcrumbItem>Layout</BreadcrumbItem>
					</Breadcrumb>
					<Content class="main-content-body">
						<nuxt/>
					</Content>
				</Layout>
				<Sider class="aside-nav-right" hide-trigger width="260">
					<div class="">
						<input placeholder="search..."/>
					</div>
					<Card style="margin-top: 15px">
						<p slot="title">
							<Icon type="ios-film-outline"></Icon>
							放一些东西
						</p>
						<a href="#" slot="extra">
							<Icon type="ios-loop-strong"></Icon>
							刷新
						</a>
						<ul>
							<li v-for="item in hotnews">
								<NLink :to="'/detail/'+item.id" target="_blank">{{ item.title }}</NLink>
							</li>
						</ul>
					</Card>
					<Carousel :radius-dot="true" trigger="hover" arrow="never" style="margin-top: 15px">
						<CarouselItem>
							<div class="demo-carousel">1</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">2</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">3</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel">4</div>
						</CarouselItem>
					</Carousel>

					<Card style="margin-top: 15px">
						<p slot="title">
							<Icon type="ios-film-outline"></Icon>
							推荐墙
						</p>
						<a href="#" slot="extra">
							<Icon type="ios-loop-strong"></Icon>
							刷新
						</a>
						<ul>
							<li v-for="item in hotnews">
								<NLink :to="'/detail/'+item.id" target="_blank">{{ item.title }}</NLink>
							</li>
						</ul>
					</Card>

					<Card style="margin-top: 15px">
						<p slot="title">
							<Icon type="ios-film-outline"></Icon>
							统计
						</p>
						<a href="#" slot="extra">
							<Icon type="ios-loop-strong"></Icon>
							刷新
						</a>
						<ul>
							<li v-for="item in hotnews">
								<NLink :to="'/detail/'+item.id" target="_blank">{{ item.title }}</NLink>
							</li>
						</ul>
					</Card>
				</Sider>
			</Layout>
			<Sider class="side-right" hide-trigger collapsible :collapsed-width="78">
			</Sider>
		</Layout>

	</Layout>
</template>

<script>
export default {
	data() {
		return {
			hotnews: [
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
				{title: '呀啊'},
			]
		};
	}
}
</script>

<style scoped>
	html, body {
		padding: 0;
		margin: 0;
	}

	.layout {
		background: #f5f7f9;
		position: relative;
		overflow: hidden;
		padding-top: 64px;
	}

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

	.side-left, .side-right {
		position: fixed;
		height: calc(100vh - 64px);
		overflow: auto;
		background-color: white;
	}

	.side-left {
		left: 0;
	}

	.side-right {
		right: 0;
	}

	.main-container {
		max-width: 1080px;
		margin: 15px auto;
	}

	.main-container .aside-nav-left {
		background: transparent;
		position: fixed;
	}

	.main-container .aside-nav-right {
		background: transparent;
	}

	.main-container .main-content {
		min-height: 280px;
		margin-left: 175px;
		margin-right: 15px;
		background: transparent;
	}

	.main-container .main-content .main-content-body {
		background: white;
		padding: 30px;
	}

	.demo-carousel {
		height: 100px;
		line-height: 100px;
		text-align: center;
		color: #fff;
		font-size: 20px;
		background: #506b9e;
	}
</style>
