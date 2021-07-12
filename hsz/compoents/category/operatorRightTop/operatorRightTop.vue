<template>
	<view class="syntagma_page">
		<view class="syntagma_box">
			<view class="syntagma">
				<text></text>
				<h5>号段</h5>
				<text></text>
			</view>
			<view class="phone_box">
				<view class="phone" v-for="(item,index) in phone" :key="index">{{item}}</view>
			</view>
			<view class="syntagma ss">
				<text></text>
				<h5>套餐</h5>
				<text></text>
			</view>
			<view class="card_page">
				<view class="card" v-for="(item,index) in card" :key="index">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:['134','134','134','134','134','134','134','134','134','134','134','134','134','134','134','134'],
				card:['19元小魔卡','19元小魔卡','19元小魔卡','19元小魔卡']
			};
		}
	}
</script>

<style lang="less">
	.syntagma_page {
		width: 100%;
		height: 100%;
		.syntagma_box {
			width: 100%;
			height: 100%;
			padding: 0 50rpx 0 20rpx;
			box-sizing: border-box;
			.syntagma {
				width: 100%;
				display: flex;
				align-items: center;
				padding-top: 39rpx;
				box-sizing: border-box;
				text {
					width: 172rpx;
					height: 2rpx;
					background-color: #eeecec;
				}
				h5 {
					font-size: 24rpx;
					color: #333;
					margin: 0 28rpx;
				}
			}
			.ss{
				padding-top: 69rpx;
			}
			.phone_box {
				width: 100%;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				margin-top: 10rpx;
				.phone {
					width: 104rpx;
					height: 50rpx;
					border: 1px solid #999999;
					text-align: center;
					line-height: 50rpx;
					font-size: 24rpx;
					color: #666;
					border-radius: 25rpx;
					margin-top: 30rpx;
				}
			}
			.card_page {
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: 10rpx;
				.card {
					width: 210rpx;
					height: 50rpx;
					border: 1px solid #999999;
					text-align: center;
					line-height: 50rpx;
					font-size: 24rpx;
					color: #666;
					border-radius: 25rpx;
					margin-top: 30rpx;
				}
			}
		}
	}
</style>
