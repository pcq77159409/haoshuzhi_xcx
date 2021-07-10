<template>
	<view class="like_page">
		<image :src="item" mode="" v-for="(item,index) in imgList" :key="index"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[require('../../../../static/home/one-1.png'),require('../../../../static/home/one-2.png'),require('../../../../static/home/one-3.png'),require('../../../../static/home/one-4.png')]
			};
		}
	}
</script>

<style lang="less">
	.like_page {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		image {
			width: 334rpx;
			height: 144rpx;
			margin-top: 20rpx;
		}
	}
</style>
