<template>
	<Layout class="layout">
		<!-- 页头 -->
		<XHeader/>

		<Layout class="ivu-layout-has-sider" style="background-color: transparent;">
			<!-- 左吸附条 -->
			<SideLeftBlock/>

			<!-- 主区域 -->
			<Layout class="main-container ivu-layout-has-sider">
				<!-- 左导航区域 -->
				<AsideNavLeft/>
				<!-- 内容区 -->
				<Content class="main-content">
					<!--					<Breadcrumb>-->
					<!--						<BreadcrumbItem>Home</BreadcrumbItem>-->
					<!--						<BreadcrumbItem>Components</BreadcrumbItem>-->
					<!--						<BreadcrumbItem>Layout</BreadcrumbItem>-->
					<!--					</Breadcrumb>-->
					<nuxt/>
				</Content>
				<!-- 右导航区域 -->
				<AsideNavRight/>
			</Layout>
			<!-- 右吸附条 -->
			<SideRightBlock/>
		</Layout>

		<XFooter/>
	</Layout>
</template>

<script>
import XHeader from './x-header';
import XFooter from './x-footer';
import SideLeftBlock from './side-left-block';
import SideRightBlock from './side-right-block';
import AsideNavLeft from './aside-nav-left';
import AsideNavRight from './aside-nav-right';

export default {
	components: {
		XHeader, XFooter,
		SideLeftBlock, SideRightBlock,
		AsideNavLeft, AsideNavRight
	},
}
</script>

<style>
	html, body {
		padding: 0;
		margin: 0;
	}

	.block-bg {
		background-color: rgba(255, 255, 255, 0.8);
	}
</style>

<style scoped>
	.layout {
		background: #f5f7f9;
		position: relative;
		overflow: hidden;
		padding-top: 64px;
		background: url("/bg.jpg");
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center center;
		background-size: cover;
	}

	.layout::before {
		content: '';
		filter: blur(10px);
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/*z-index: -1;*/
		background: inherit;
		margin: -30px;
	}

	.main-container {
		max-width: 1080px;
		margin: 15px auto;
		flex-grow: 1;
		flex-shrink: 0;
		background-color: transparent;
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
</style>
