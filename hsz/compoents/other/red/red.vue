<template>
	<view class="red_page">
		<image src="../../../static/other/left.png" mode="aspectFit"></image>
		<text>移动号码</text> 
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
	.red_page {
		width: 100%;
		height: 140rpx;
		background-color: #fe5858;
		display: flex;
		align-items: center;
		padding: 20rpx 0 0 30rpx;
		box-sizing: border-box;
		image {
			width: 19rpx;
			height: 31rpx;
		}
		text {
			font-size: 26rpx;
			color: #FFFFFF;
			margin-left: 264rpx;
		}
	}
</style>
