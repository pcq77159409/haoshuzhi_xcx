<template>
	<view class="filter_page">
		<view class="filter_red">
			<red></red>
			<view class="filter_search">
				<view class="end">	
					<image src="../../../static/other/dotted.png" mode="aspectFit"></image>
					<text>尾号</text>
				</view>
				<text class="line"></text>
				<view class="want">
					<image src="../../../static/home/search.png" mode="aspectFit"></image>
					<input type="text" placeholder="搜索您想要的号码" />
				</view>
				<view class="search">搜索</view>
			</view>
		</view>
		<view class="place">
			<view class="input_box">
				<input type="text" value="1"/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
				<input type="text" value=""/>
			</view>
			<view class="assign">
				<text>* 请在指定位置上填写数字，无要求的位置可留空</text>
				<view class="box">
					<view class="reset">重置</view>
					<view class="accurate">精准搜索</view>
				</view>
			</view>
		</view>
		<view class="linkage">
			<view v-for="(item,index) in linkage" :key="index" class="linkage_box">
				<text>{{item.text}}</text>
				<image :src="item.src" mode="aspectFit"></image>
			</view>
		</view>
		<couples></couples>
	</view>
</template>

<script>
	import couples from '../../../compoents/other/couples/couples.vue'
	import red from '../../../compoents/other/red/red.vue'
	export default {
		components:{
			couples,
			red
		},
		data() {
			return {
				linkage:[{
					text : '归属地',
					src : require('../../../static/other/bottom.png')
				},{
					text : '运营商',
					src : require('../../../static/other/bottom.png')
				},{
					text : '规律',
					src : require('../../../static/other/bottom.png')
				}]
			};
		},
		methods:{
		}
	}
</script>

<style lang="less">
	.filter_page {
		height: 100%;
		width: 100%;
		background-color: #f8f8f8;
		.filter_red {
			width: 100%;
			height: 244rpx;
			background-color: #fe5858;
			.filter_search {
				width: 690rpx;
				height: 56rpx;
				background: url(../../../static/other/input_bg.png) no-repeat;
				background-size: 690rpx 56rpx;
				display: flex;
				margin: 0 auto;
				align-items: center;
				position: relative;
				.end {
					display: flex;
					align-items: center;
					margin-left: 30rpx;
					image {
						width: 22rpx;
						height: 22rpx;
						margin-right: 14rpx;
						vertical-align: middle;
						margin-top: 1rpx;
					}
					text {
						font-size: 22rpx;
						color: #666;
					}
				}
				.line {
					width: 1rpx;
					height: 24rpx;
					background-color: #e0e0e0;
					margin: 0 32rpx 0 20rpx;
				}
				.want {
					display: flex;
					align-items: center;
					image {
						width: 22rpx;
						height: 22rpx;
						margin-right: 14rpx;
					}
					input {
						font-size: 22rpx;
						color: #999;
					}
				}
				.search {
					font-size: 24rpx;
					color: #FFFFFF;
					position: absolute;
					right: 20rpx;
				}
			}
		}
		.place {
			width: 100%;
			height: 255rpx;
			padding: 40rpx 43rpx;
			box-sizing: border-box;
			.input_box {
				width: 100%;
				display: flex;
				justify-content: space-around;
				input {
					width: 44rpx;
					height: 52rpx;
					text-align: center;
					color: #dc0101;
					outline: none;
					border-radius: 6rpx;
					border: 1rpx solid #cacaca;
					font-size: 20rpx; 
				}
				input:first-child{
					color: #333333;
				}
			}
			.assign {
				width: 100%;
				margin-top: 6rpx;
				text {
					font-size: 22rpx;
					color: #fe5858;
				}
				.box {
					display: flex;
					justify-content: center;
					margin-top: 32rpx;
					.reset {
						width: 260rpx;
						height: 52rpx;
						background-color: #F0EEEE;
						color: #666666;
						font-size: 24rpx;
						text-align: center;
						line-height: 52rpx;
						border-radius: 25rpx;
						margin-right:40rpx ;
					}
					.accurate {
						width: 260rpx;
						height: 52rpx;
						background-color: #fe5858;
						color: #ffffff;
						font-size: 24rpx;
						text-align: center;
						line-height: 52rpx;
						border-radius: 25rpx;
					}
				}
			}
		}
		.linkage {
				width: 100%;
				height: 66rpx;
				border: 1px solid #e0e0e0;
				background-color: #FFFFFF;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 20rpx;
				.linkage_box {
					display: flex;
					align-items: center;
					image {
						width: 16rpx;
						height: 6rpx;
						margin-left: 19rpx;
					}
					text {
						font-size: 22rpx;
						color: #666666;
					}
				}
				.linkage_box:last-child image{
					width: 20rpx;
					height: 17rpx;
				}
			}
	}
</style>
