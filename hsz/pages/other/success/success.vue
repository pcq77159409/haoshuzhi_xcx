<template>
	<view class="success_page">
		<red :username="'订单支付'"></red>
		<image src="../../../static/other/形状.png" mode="" class="gou"></image>
		<h4>订单支付成功</h4>
		<h3>订单支付成功后3天内将进行发货</h3>
		<view class="sure">查看订单</view>
	</view>
</template>

<script>
	import red from '../../../compoents/other/red/red.vue'
	export default {
		components:{
			red
		},
		props:['username'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.success_page {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		.gou {
			width: 154rpx;
			height: 154rpx;
			margin: 116rpx auto 0;
			display: block;
		}
		h4 {
			font-size: 38rpx;
			text-align: center;
			color: #333333;
			font-weight: 600;
			margin-top: 64rpx;
		}
		h3 {
			font-size: 24rpx;
			color: #999999;
			text-align: center;
			margin-top: 43rpx;
		}
		.sure {
			width: 690rpx;
			height: 88rpx;
			margin: 85rpx auto 0;
			background-color: #ea5656;
			text-align: center;
			line-height: 88rpx;
			border-radius: 50rpx;
			color: #FFFFFF;
			font-size: 26rpx;
		}
	}
</style>
