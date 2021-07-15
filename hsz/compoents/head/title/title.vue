<template>
	<view class="title">
		<view class="img">
			<image src="../../../static/img/left.png" mode="aspectFit"></image>
		</view>
		<view class="red">{{username}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:['username']
	}
</script>

<style lang="less">
	.title{
		position: relative;
	}
	.red {
		padding-top: 80rpx;
		padding-bottom: 20rpx;
		width: 100%;
		height: 58rpx;
		background-color: #fe5858;
		color: #FFFFFF;
		font-size: 26rpx;
		text-align: center;
		line-height: 52rpx;
	}
	.img{
		position: absolute;
		left: 20rpx;
		bottom:40rpx ;
		width: 19rpx;
		height: 31rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
