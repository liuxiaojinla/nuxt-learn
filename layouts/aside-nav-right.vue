<template>
	<Sider class="aside-nav-right" hide-trigger width="260">
		<NLink to="/edit">发布</NLink>

		<div class="search-container block-bg" style="margin-top: 15px">
			<Input search placeholder="Enter something..."/>
		</div>

		<Card :bordered="false" dis-hover style="margin-top: 15px" class="block-bg">
			<p slot="title">
				<Icon type="ios-film-outline"></Icon>
				放一些东西
			</p>
			<a href="#" slot="extra">
				<Icon type="ios-loop-strong"></Icon>
				刷新
			</a>

			<CellGroup>
				<Cell v-for="(item,index) in hotnews" :key="index" :title="item.title" :to="'/detail/'+item.id"/>
			</CellGroup>
		</Card>

		<Affix :offset-top="60">
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
		</Affix>

		<Card :bordered="false" dis-hover style="margin-top: 15px" class="block-bg">
			<p slot="title">
				<Icon type="ios-film-outline"></Icon>
				推荐墙
			</p>
			<a href="#" slot="extra">
				<Icon type="ios-loop-strong"></Icon>
				刷新
			</a>
			<CellGroup>
				<Cell v-for="(item,index) in hotnews" :key="index" :title="item.title" :to="'/detail/'+item.id"/>
			</CellGroup>
		</Card>

		<Affix :offset-top="170">
			<Card :bordered="false" dis-hover style="margin-top: 15px" class="block-bg">
				<p slot="title">
					<Icon type="ios-film-outline"></Icon>
					统计
				</p>
				<a href="#" slot="extra">
					<Icon type="ios-loop-strong"></Icon>
					刷新
				</a>
				<CellGroup>
					<Cell v-for="(item,index) in hotnews" :key="index" :title="item.title" :to="'/detail/'+item.id"/>
				</CellGroup>
			</Card>
		</Affix>
	</Sider>
</template>

<script>
export default {
	name: "aside-nav-right",
	data() {
		return {
			hotnews: [
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
	.aside-nav-right {
		background: transparent;
	}

	.search-container {
		/*background-color: white;*/
		padding: 10px;

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
