<template>
	<view class="home_box">
		<view class="big_box">
			<view class="shang_box">
				<view class="ShangHai">
					<image src="../../../static/home/wei.png" mode=""></image>
					<text>上海</text>
				</view>
				<view class="good">好数智</view>
			</view>
			<view class="input_bg">
				<image src="../../../static/home/search.png" mode=""></image>
				<input type="text" placeholder="请输入您要搜索的内容"/>
			</view>
			<banner></banner>
			<tabrNumber></tabrNumber>
			<image src="../../../static/home/content.png" mode="" class="cont"></image>
			<view class="grey"></view>
			<view class="seckill">
				<view class="separator">
					<view class="special">
						<image src="../../../static/home/time.png" mode=""></image>
						<h4>特价专场</h4>
					</view>
					<view class="more">
						<text>更多</text>
						<image src="../../../static/home/right.png" mode=""></image>
					</view>
				</view>
				<phoneNumber-list></phoneNumber-list>
			</view>
			<view class="grey"></view>
			<view class="like">
				<view class="separator">
					<view class="special">
						<image src="../../../static/home/love.png" mode=""></image>
						<h4>猜你喜欢</h4>
					</view>
					<view class="more">
						<text>更多</text>
						<image src="../../../static/home/right.png" mode=""></image>
					</view>
				</view>
				<like></like>
			</view>
			<view class="grey"></view>
			<view class="seckill">
				<view class="separator">
					<view class="special">
						<image src="../../../static/home/good.png" mode=""></image>
						<h4>靓号推荐</h4>
					</view>
					<view class="more">
						<text>更多</text>
						<image src="../../../static/home/right.png" mode=""></image>
					</view>
				</view>
				<phoneNumber-list></phoneNumber-list>
			</view>
		</view>
	</view>
</template>

<script>
	import headPage from '@/compoents/head/headPage/headPage.vue'
	import banner from '../../../compoents/homepage/banner/banner.vue'
	import tabrNumber from '../../../compoents/homepage/tabrNumber/tabrNumber.vue'
	import phoneNumberList from '../../../compoents/homepage/phoneNumber-list/phoneNumber-list.vue'
	import like from '../../../compoents/homepage/like/like/like.vue'
	export default {
		components: {
			headPage,
			banner,
			tabrNumber,
			phoneNumberList,
			like
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}
	.home_box {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		overflow: auto;
		position: relative;
		.big_box {
			width: 100%;
			height: 100%;
			.shang_box {
				width: 100%;
				height: 467rpx;
				background: url(../../../static/home/bg.png) no-repeat;
				background-size: 100% 467rpx;
				display: flex;
				justify-content: center;
				padding-top: 70rpx;
				box-sizing: border-box;
				.ShangHai {
					position: absolute;
					left: 30rpx;
					top: 72rpx;
					display: flex;
					align-items: center;
					image {
						width: 22rpx;
						height: 28rpx;
					}
					text {
						color: #FFFFFF;
						font-size: 24rpx;
						margin-left: 15rpx;
					}
				}
				.good {
					font-size: 28rpx;
					color: #FFFFFF;
					width: 88rpx;
					height: 30rpx;
				}
			}
			.input_bg {
				width: 454rpx;
				height: 56rpx;
				background-color: #FFFFFF;
				border-radius: 25rpx;
				position: absolute;
				top: 146rpx;
				left: 148rpx;
				display: flex;
				align-items: center;
				image {
					width: 20rpx;
					height: 20rpx;
					margin-left: 62rpx;
				}
				input {
					color: #999999;
					font-size: 20rpx;
					margin-left: 17rpx;
				}
			}
			.cont {
				width: 708rpx;
				height: 165rpx;
				margin: 0 auto 45rpx;
				display:  block;
			}
			.grey {
				width: 100%;
				height: 20rpx;
				background-color: #f8f8f8;
			}
			.seckill {
				width: 100%;
				padding: 36rpx 30rpx 30rpx;
				box-sizing: border-box;
				.separator {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.special {
						display: flex;
						align-items: center;
						image {
							width: 28rpx;
							height: 31rpx;
							margin-right: 20rpx;
						}
						h4 {
							font-size: 28rpx;
							color: #333333;
						}
					}
					.more {
						display: flex;
						align-items: center;
						image {
							width: 14rpx;
							height: 17rpx;
						}
						text {
							font-size: 22rpx;
							color: #666666;
							margin-right: 13rpx;
						}
					}
				}
			}
			.like {
				width: 100%;
				height: 430rpx;
				padding: 36rpx 30rpx 30rpx;
				box-sizing: border-box;
				.separator {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.special {
						display: flex;
						align-items: center;
						image {
							width: 28rpx;
							height: 31rpx;
							margin-right: 20rpx;
						}
						h4 {
							font-size: 28rpx;
							color: #333333;
						}
					}
					.more {
						display: flex;
						align-items: center;
						image {
							width: 14rpx;
							height: 17rpx;
						}
						text {
							font-size: 22rpx;
							color: #666666;
							margin-right: 13rpx;
						}
					}
				}
			}
		}
	}
</style>
