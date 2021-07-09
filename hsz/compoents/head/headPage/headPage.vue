<template>
	<view>
		<view class="red">{{username}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:''
			};
		},
		props:['username']
	}
</script>

<style lang="less">
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
</style>
