<template>
	<!-- 收藏列表组件 -->
	<view class="collect_list_page">
		<view class="collect_list-box">
			<image src="../../../static/home/矩形%2047@2x.png" mode="aspectFit"></image>
			<view class="number">{{phoneNumber}}</view>
			<view class="move_box">
				<text>{{move}}</text>
				<text>佣金￥{{money}}</text>
			</view>
			<view class="include">
				<text>含话费￥{{charge}}</text>
				<text>￥{{price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'13902010999',
				move:'上海移动',
				money:'400',
				charge:'600',
				price:'700'
			};
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}
	.collect_list_page {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow: auto;
		.collect_list-box {
			width: 690rpx;
			height: 167rpx;
			background-color: #FFFFFF;
			margin: 20rpx auto;
			position: relative;
			border-radius: 6rpx;
			padding: 0 21rpx;
			box-sizing: border-box;
			image {
				width: 46rpx;
				height: 28rpx;
				position: absolute;
				right: 0;
				top: 0;
			}
			.number {
				font-size: 30rpx;
				color: #333333;
				padding-top: 26rpx;
			}
			.move_box {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 20rpx;
				margin-top: 16rpx;
				text:first-child{
					color: #666666;
				}
				text:last-child{
					color: #fe5858;
				}
			}
			.include {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 16rpx;
				color: #fe5858;
				text:first-child{
					font-size: 20rpx;
				}
				text:last-child{
					font-size: 28rpx;
				}
			}
		}
	}
</style>
