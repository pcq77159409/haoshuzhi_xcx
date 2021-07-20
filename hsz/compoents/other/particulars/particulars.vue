<template>
	<!-- 号码详情组件 -->
	<view class="particulars_page">
		<view class="particulars_box">
			<view class="mobile">
				<h4>13641968888</h4>
				<image src="../../../static/other/lian.png" mode="aspectFit"></image>
			</view>
			<view class="opeara">
				<text>上海移动</text>
				<text>￥400</text>
			</view>
			<view class="pink">
				<text>提示 :</text>
				<text>最低月 消费140元，最低在网时长244小时，女江湖人称上减肥茶明年房价比较快女从VB额URIE犹太人我去帮你那就好浮光掠影那不错的广泛认同与快乐就。</text>
			</view>
		</view>
		<view class="meal">
			<text>号码套餐</text>
			<text>移动花卡宝藏版29元套餐</text>
			<image src="../../../static/other/right.png" mode="aspectFit"></image>
		</view>
		<view class="food">
			<view class="meat">
				<text>话费(含)</text>
				<text>￥200</text>
			</view>
			<view class="meat">
				<text>卡费</text>
				<text class="ka">￥680.00</text>
			</view>
			<view class="meat">
				<text>最低消费</text>
				<text>￥200</text>
			</view>
			<view class="meat">
				<text>号码合约</text>
				<text>120/月</text>
			</view>
			<view class="meat">
				<text>登记方式</text>
				<text>线上实名/线下办理</text>
			</view>
			<view class="meat">
				<text>温馨提示</text>
				<text>收到号码请尽快修改密码</text>
			</view>
		</view>
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
	.particulars_page {
		width: 100%;
		.particulars_box {
			width: 690rpx;
			background-color: #FFFFFF;
			margin: 20rpx auto;
			padding: 30rpx 20rpx;
			box-sizing: border-box;
			.mobile {
				width: 100%;
				display: flex;
				align-items: center;
				image {
					width: 52rpx;
					height: 26rpx;
					margin-left:18rpx ;
				}
				h4{
					font-size: 32rpx;
					color: #333333;
				};
			}
			.opeara {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				text:first-child{
					font-size: 24rpx;
					color: #666666;
				}
				text:last-child{
					font-size: 28rpx;
					color: #fe5858;
				}
			}
			.pink {
				width: 100%;
				background-color: rgba(255,248,248,1);
				padding: 10rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				text:first-child{
					font-size: 22rpx;
					color: #fe5858;
					margin-right: 20rpx;
				}
				text:last-child{
					font-size: 22rpx;
					color: #999999;
				}
			}
		}
		.meal {
			width: 690rpx;
			height: 88rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			padding: 0 20rpx;
			margin: 20rpx auto;
			box-sizing: border-box;
			text:first-child {
				margin-right: 30rpx;
			}
			text {
				font-size: 24rpx;
				color: #333333;
			}
			image {
				width: 14rpx;
				height: 17rpx;
				margin-left: 234rpx;
			}
		}
		.food {
			width: 690rpx;
			background-color: #FFFFFF;
			margin: 0 auto;
			.meat {
				width: 100%;
				border-bottom: 1px solid #f0f0f0;
				height: 88rpx;
				display: flex;
				align-items: center;
				.ka {
					margin-left: 42rpx;
				}
				text:first-child {
					font-size: 24rpx;
					color: #999999;
					margin-left: 20rpx;
					margin-right: 40rpx;
				}
				text:last-child {
					font-size: 24rpx;
					color: #666666;
				}
			}
			.meat:last-child{
				border-bottom: none;
			}
			.meat:nth-of-type(2) text,.meat:nth-of-type(3) text{
				color: #fe5858;
			}
		}
	}
</style>
