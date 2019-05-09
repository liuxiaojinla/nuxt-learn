<template>
	<div class="container">
		<Carousel :radius-dot="true" trigger="hover" arrow="never">
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

		<div class="article-list">
			<Card v-for="(item,index) in data" :key="index" :bordered="false" dis-hover class="block-bg article-item">
				<h3>{{item.title}}</h3>
				<p>这是一些内容，这是一些内容，这是一些内容，这是一些内容</p>
				<p>
					<Time :time="time1"/>
				</p>
			</Card>
		</div>
	</div>
</template>

<script>


export default {
	data() {
		return {
			time1: (new Date()).getTime() - 60 * 3 * 1000,
			data: [
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

<style>
	.container {
		margin: 0 auto;
		min-height: 100vh;
		text-align: center;
	}

	.demo-carousel {
		height: 280px;
		line-height: 280px;
		text-align: center;
		color: #fff;
		font-size: 20px;
		background: #506b9e;
	}

	.article-list {

	}

	.article-item {
		margin-top: 15px;
	}
</style>
