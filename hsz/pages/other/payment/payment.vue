<template>
	<view class="payment_page">
		<red :username="'订单支付'"></red>
		<h3>支付倒计时 <text>29 : 59 ：29</text></h3>
		<h1>￥900.00</h1>
		<h4>订单编号:  DD202012191212</h4>
		<view class="payment">
			<view class="payment_box" @click="Show(1)">
				<image src="../../../static/other/图层%203.png" mode=""></image>
				<text>余额支付</text>
				<text>当前余额966.10元</text>
				<image src="../../../static/other/选择%20拷贝%203.png" mode=""></image>
				<image src="../../../static/other/选择%20拷贝%202.png" mode="" v-show="num==1"></image>
			</view>
			<view class="payment_box" @click="Show(2)">
				<image src="../../../static/other/微信支付%20(1).png" mode=""></image>
				<text>微信支付</text>
				<image src="../../../static/other/选择%20拷贝%203.png" mode=""></image>
				<image src="../../../static/other/选择%20拷贝%202.png" mode="" v-show="num==2"></image>
			</view>
		</view>
		<view class="sure" @click="yes">确认支付</view>
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
				num:1
			};
		},
		methods:{
			yes(){
				uni.navigateTo({
					url:'/pages/other/success/success'
				})
			},
			Show(id){
				this.num=id
			},
		}
	}
</script>

<style lang="less">
	.payment_page {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		h3 {
			font-size: 24rpx;
			color: #fe5858;
			text-align: center;
			margin-top: 92rpx;
			text {
				margin-left: 20rpx;
			}
		}
		h1 {
			font-size: 54rpx;
			color: #333333;
			text-align: center;
			font-weight: 700;
			margin-top: 20rpx;
		}
		h4 {
			font-size: 24rpx;
			text-align: center;
			color: #999999;
			margin-top: 30rpx;
		}
		.payment {
			width: 690rpx;
			height: 214rpx;
			background-color: #FFFFFF;
			margin: 90rpx auto 0;
			padding: 0 28rpx;
			box-sizing: border-box;
			.payment_box {
				width: 100%;
				height: 106rpx;
				border-bottom: 1px solid #eaeaea;
				display: flex;
				align-items: center;
				position: relative;
				image:first-child {
					width: 32rpx;
					height: 34rpx;
					margin-right: 28rpx;
				}
				image:last-child,image:nth-of-type(2) {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					right: 0;
				}
				text:nth-of-type(1) {
					margin-right: 49rpx;
					font-size: 26rpx;
					color: #333333;
				}
				text:nth-of-type(2) {
					font-size: 22rpx;
					color: #999999;
				}
			}
			.payment_box:last-child {
				border-bottom: none;
			}
		}
		.sure {
			width: 690rpx;
			height: 88rpx;
			margin: 454rpx auto 0;
			background-color: #ea5656;
			text-align: center;
			line-height: 88rpx;
			border-radius: 50rpx;
			color: #FFFFFF;
			font-size: 26rpx;
		}
	}
</style>
