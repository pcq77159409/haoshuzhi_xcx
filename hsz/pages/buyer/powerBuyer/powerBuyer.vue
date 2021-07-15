<template>
	<view class="powerBuyer">
		<title :username="'实力买家申请'" class="head"></title>
		<view class="p_center">
			<view class="username">
				<text>真实姓名</text> <input type="text" value="" placeholder="请输入真实姓名" maxlength="16"/>
			</view>
			<view class="tel">
				<text>联系电话</text> <input type="tel" value="" placeholder="请输入电话号码" maxlength="11"/>
			</view>
			<view class="region">
				<text>所在地区</text> <view>省/市/区县</view>
				<image src="../../../static/home/right.png" mode=""></image>
			</view>
			<view class="address">
				<text>详细地址</text> <input type="text" value="" placeholder="请输入详细地址" maxlength="20"/>
			</view>
			<view class="channel">
				<text>销售渠道</text> <textarea value="" placeholder="简洁介绍销售渠道(0/100)" />
			</view>
			<view class="address">
				<text>线上店铺 (选填)</text> <input type="text" value="" placeholder="请输入详细地址" maxlength="20"/>
			</view>
			<view class="btn" @click="onclickBtn">
				提交申请
			</view>
		</view>
		<view class="p_bottom">
			<view class="p_b_h">
				实力买家权益
			</view>
			<view class="p_b_c">
				<image src="../../../static/buyer/fx.png" mode=""></image>
				<view class="p_b_c_text">
					<view>分销赚佣金</view>
					<text>成为分销商后卖出商品，您可以获得佣金</text>
				</view>
			</view>
			<view class="p_b_c">
				<image src="../../../static/buyer/fx.png" mode=""></image>
				<view class="p_b_c_text">
					<view>分销赚佣金</view>
					<text>成为分销商后卖出商品，您可以获得佣金</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import title from '@/compoents/head/title/title.vue';
	export default {
		components:{
			title
		},
		data() {
			return {
				
			};
		},
		methods:{
			onclickBtn(){
				console.log(123);
				uni.navigateTo({
					url:'/pages/buyer/audit/audit'
				})
			}
		}
	}
</script>

<style lang="less">
	.powerBuyer{
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: #F8F8F8;
		color: #333333;
	}
	.p_center{
		width: 690rpx;
		padding: 20rpx;
		margin: 20rpx auto;
		background-color: #FFFFFF;
		box-sizing: border-box;
		&>view{
			display: flex;
			font-size: 26rpx;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 1rpx solid #F2F2F2;
			input{
				flex:1;
				height: 100%;
			}
			textarea{
				flex:1;
				height: 100%;
				margin-top: 25rpx;
				line-height: 30rpx;
			}
			view{
				flex: 1;
				color: #999;
			}
			text{
				margin-right: 20rpx;
			}
			image{
				width: 18rpx;
				height: 31rpx;
				vertical-align: middle;
				align-self: center;
			}
		}
		.channel{
			height: 160rpx;
		}
		.btn{
			border: none;
			justify-content: center;
			align-items: center;
			background-color: #fe5858;
			color: #fff;
			border-radius:40rpx;
			margin: 20rpx 0 20rpx;
		}
	}
	.p_bottom{
		width: 690rpx;
		margin: 0 auto;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 0 20rpx 1rpx;
		font-size: 26rpx;
		image{
			width: 32rpx;
			height: 34rpx;
		}
		.p_b_h{
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin-bottom: 20rpx;
			border-bottom: 1rpx solid #F2F2F2;
		}
		.p_b_c{
			display: flex;
			margin-bottom: 20rpx;
			image{
				margin-right: 20rpx;
			}
			.p_b_c_text{
				text{
					color: #999999;
					line-height: 50rpx;
				}
			}
		}
	}
</style>
