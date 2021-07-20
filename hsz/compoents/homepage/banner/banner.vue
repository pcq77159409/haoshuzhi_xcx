<template>
	<!-- 轮播图组件 -->
	<view class="banner_box">
		<image src="../../../static/home/banner.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.banner_box {
		width: 707rpx;
		height: 271rpx;
		position: absolute;
		left: 22rpx;
		top: 236rpx;
		image {
			width: 707rpx;
			height: 271rpx;
			display: block;
		}
	}
</style>
