<template>
	<view class="bottom">
		<text>合计:</text>
		<text>￥400.00</text>
		<view class="collect">收藏</view>
		<view class="pay" @click="tiao">提交订单</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			tiao(){
				uni.navigateTo({
				    url:"/pages/other/particularsCouple/particularsCouple"
				})
			}
		}
	}
</script>

<style lang="less">
	.bottom {
		width: 100%;
		height: 88rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		padding-left:28rpx ;
		box-sizing: border-box;
		text:first-child{
			font-size: 23rpx;
			color: #666666;
		}
		text:nth-of-type(2){
			font-size: 28rpx;
			color: #fe5858;
			margin-left: 15rpx;
		}
		.collect {
			width: 210rpx;
			height: 88rpx;
			background-color: #999999;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			font-size: 28rpx;
			margin-left: 122rpx;
		}
		.pay {
			width: 210rpx;
			height: 88rpx;
			background-color: #fe5858;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			font-size: 28rpx;
			// margin-left: 100rpx;
		}
	}
</style>
