<template>
	<!-- 情侣号码列表组件 -->
	<view class="couples_box">
		<view class="couples_page" @click="tiao">
			<image src="../../../static/home/矩形%2047@2x.png" mode="aspectFit"></image>
			<view class="left">
				<view class="number">13902010999</view>
				<view class="move_box">
					<text>上海移动</text>
					<text>佣金￥400</text>
				</view>
				<view class="include">
					<text>含话费￥100</text>
					<text>￥400</text>
				</view>
			</view>
			<view class="line"></view>
			<view class="right">
				<view class="number">13902010999</view>
				<view class="move_box">
					<text>上海移动</text>
					<text>佣金￥400</text>
				</view>
				<view class="include">
					<text>含话费￥100</text>
					<text>￥400</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			tiao(){
				uni.navigateTo({
				    url:"/pages/other/particularsCouple/particularsCouple"
				})
			}
		}
	}
</script>

<style lang="less">
	.couples_box {
		width: 100%;
		.couples_page {
			width: 690rpx;
			// height: 160rpx;
			background-color: #FFFFFF;
			border: 1px solid #e5e5e5;
			margin: 20rpx auto 0;
			border-radius: 8rpx;
			position: relative;
			padding:  21rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			image {
				width: 46rpx;
				height: 28rpx;
				position: absolute;
				right: 0;
				top: 0;
			}
			.left {
				width: 48%;
				.number {
					font-size: 30rpx;
					color: #333333;
					
				}
				.move_box {
					width: 100%;
					display: flex;
					justify-content: space-between;
					font-size: 20rpx;
					margin-top: 16rpx;
					text:first-child{
						color: #666666;
						// margin-right: 142rpx;
					}
					text:last-child{
						color: #fe5858;
					}
				}
				.include {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 16rpx;
					color: #fe5858;
					text:first-child{
						font-size: 20rpx;
						// margin-right: 128rpx;
					}
					text:last-child{
						font-size: 28rpx;
					}
				}
			}
			.line {
				width: 2rpx;
				height: 124rpx;
				background-color: #F2F2F2;
				margin: 0 31rpx;
			}
			.right {
				width: 48%;
				.number {
					font-size: 30rpx;
					color: #333333;
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
					align-items: center;
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
	}
</style>
