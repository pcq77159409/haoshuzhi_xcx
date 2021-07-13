<template>
	<view class="my">
		<view class="my_top">
			<view class="my_top_personal">
				<view class="m_t_p_head">
					<view class="m_t_p_h_image">
						<image :src="head_image" mode="aspectFit"></image>
					</view>
					<view class="m_t_p_h_type">
						手机号码登录
					</view>
				</view>
				<view class="m_t_p_info">
					<view>
						<text>{{info.name}}</text>
					</view>
					<view>
						<text>ID:{{info.id}}</text>
					</view>
				</view>
				<view class="m_t_p_sign">
					<image src="../../../static/my/sign.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="my_top_account">
				<view class="h3">我的账户</view>
				<view class="m_p_a_center">
					<view class="m_p_a_c_money">
						<image src="../../../static/my/balance.png" mode="aspectFit"></image>
						<text>钱包余额</text>
					</view>
					<view class="m_p_a_c_volume">
						<image src="../../../static/my/coupon.png" mode=""></image>
						<text>优惠卷</text>
					</view>
					<view class="m_p_a_c_integral">
						<image src="../../../static/my/integral.png" mode=""></image>
						<text>积分</text>
					</view>
				</view>
			</view>
		</view>
		<view class="my_head">
			<view class="h3">
				<text>我的订单</text>
				<view>
					<text class="span">查看全部</text>
					<image src="../../../static/my/timeRight.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="m_h_order">
				<view class="pay">
					<image src="../../../static/my/pay.png" mode="aspectFill"></image>
					<text>
						待支付
					</text>
				</view>
				<view class="delivery">
					<image src="../../../static/my/delivery.png" mode="aspectFill"></image>
					<text>
						待发货
					</text>					
				</view>
				<view class="closed">
					<image src="../../../static/my/closed.png" mode="aspectFill"></image>
					<text>
						待收货
					</text>
				</view>
				<view class="complete">
					<image src="../../../static/my/complete.png" mode="aspectFill"></image>
					<text>
						已完成
					</text>
				</view>
				<view class="sales">
					<image src="../../../static/my/sales.png" mode="aspectFill"></image>
					<text>
						退款/售后
					</text>
				</view>
			</view>
			<view class="shuffling">
				<my_banner></my_banner>
			</view>
		</view>
		<view class="my_bottom">
			<view>
				<image src="../../../static/my/mj.png" mode="aspectFit"></image>
				生财之道
			</view>
			<view>
				<image src="../../../static/my/lc.png" mode="aspectFit"></image>
				购买流程
			</view>
			<view>
				<image src="../../../static/my/dz.png" mode="aspectFit"></image>
				收货地址
			</view>
			<view>
				<image src="../../../static/my/set.png" mode="aspectFit"></image>
				设置
			</view>
		</view>
	</view>
</template>

<script>
	import my_banner from "../../../compoents/my/my_banner/my_banner.vue";
	export default {
		components:{
			my_banner
		},
		data() {
			return {
				head_image:require('../../../static/my/user.png'),
				info:{
					name:'游客123456',
					id:21
				}
			}
		},
		methods: {
			
		}
	}
</script>


<style lang="less">
image{
	width: 100%;
	height: 100%;
}
page{
	width: 100%;
	height: 100%;
}
.my{
	width: 100%;
	height: 100%;
	background-color: #F8F8F8;
}
.my_top{
	position: relative;
	width: 100%;
	height: 524rpx;
	display: flex;
	background: url('../../../static/my/bg.png');
	background-size: 100%;
	.my_top_personal{
		position: absolute;
		top: 140rpx;
		left: 50%;
		display: flex;
		width: 80%;
		height: 180rpx;
		transform: translateX(-50%);
		.m_t_p_head{
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			.m_t_p_h_image{
				width: 160rpx;
				height: 160rpx;
				border-radius:50%;
				overflow: hidden;
			}
			.m_t_p_h_type{
				padding: 5rpx 15rpx;
				font-size: 22rpx;
				margin-top: 10rpx;
				background-color: rgba(255,255,255,.2);
				border-radius: 5rpx ;
				color: #FFFFFF;
			}
		}
		.m_t_p_info{
			margin: 10rpx 0 0 20rpx;
			text{
				color: #FFFFFF;
				line-height: 50rpx;
			}
		}
		.m_t_p_sign{
			position: absolute;
			top: 30rpx;
			right: 20rpx;
			width: 63rpx;
			height: 56rpx;
		}
	}
	.my_top_account{
		position: absolute;
		top: 365rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 690rpx;
		height: 190rpx;
		background-color: #fff;
		border-radius:10rpx;
		.h3{
			padding-left: 20rpx;
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
			font-size: 24rpx;
		}
		.m_p_a_center{
			display: flex;
			padding: 15rpx 60rpx 0;
			justify-content: space-between;
			box-sizing: border-box;
			text-align: center;
			font-size: 24rpx;
		}
	}
}
.my_head{
	position: absolute;
	top: 580rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 690rpx;
	height: 400rpx;
	border-radius:10rpx;
	background-color: #FFFFFF;
	.h3{
		display: flex;
		justify-content: space-between;
		padding:0 20rpx;
		line-height: 60rpx;
		border-bottom: 1px solid #eee;
		font-size: 24rpx;
		image{
			width: 12rpx;
			height: 24rpx;
			margin: -5rpx 0 0 20rpx;
			vertical-align: middle;
		}
		.span{
			color: #999;
			font-size: 22rpx;
		}
	}
	.m_h_order{
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		text-align: center;
		image{
			display: block;
			margin-bottom: 20rpx;
		}
		view{
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			vertical-align: bottom;
			width: 20%;
			align-items: center;
			height: 120rpx;
			text{
				width: 100%;
				font-size: 26rpx;
				color: #666;
			}
		}
		.pay image{
			width: 50rpx *1.5;
			height: 45rpx *1.5;
			transform: translate(10rpx,-20rpx);
			margin-bottom: 0rpx;
		}
		.delivery image{
			width: 38rpx *1.5;
			height: 31rpx *1.5;
		}
		.closed image{
			width: 38rpx *1.5;
			height: 31rpx *1.5;
		}
		.complete image{
			width: 27rpx *1.5;
			height: 31rpx *1.5;
		}
		.sales image{
			width: 35rpx*1.5;
			height: 31rpx*1.5;
		}
	}
	.shuffling{
		width: 85%;
		height: 120rpx;
		padding: 10rpx;
		box-sizing: border-box;
		background-color: #f8f8f8;
		margin: 0 auto;
		border-radius: 10rpx;
	}
}
.my_bottom{
	position: absolute;
	top: 1000rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 690rpx;
	height: 160rpx;
	border-radius:10rpx;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	text-align: center;
	view{
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
	}
	image{
		width: 50rpx*1.5;
		height: 50rpx*1.5;
		margin-bottom: 15rpx;
	}
}
</style>