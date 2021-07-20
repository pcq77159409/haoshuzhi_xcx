<template>
	<view class="add">
		<image src="../../../static/other/添加地址.png" mode=""></image>
		<text>添加收货地址</text>
		<image src="../../../static/other/跳转箭头@2x.png" mode=""></image>
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
	.add {
		width: 690rpx;
		height: 136rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		margin: 20rpx auto 60rpx;
		image:first-child{
			width: 34rpx;
			height: 45rpx;
			margin: 0 20rpx;
		}
		text {
			font-size: 24rpx;
			color: #666666;
		}
		image:last-child{
			width: 16rpx;
			height: 28rpx;
			margin-left: 427rpx;
		}
	}
</style>
