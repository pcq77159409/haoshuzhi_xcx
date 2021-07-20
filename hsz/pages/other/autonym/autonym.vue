<template>
	<view class="auton_page">
		<red :username="'完善信息'"></red>
		<view class="pink_box">
			正规三大运营商号码，配合国家安全，严厉打击电信诈骗，应运营商要求，必须实行实名制办理激活开通。敬请理解！平台客服会在1小时内电话为您一对一服务
		</view>
		<h4>请确认你的身份信息</h4>
		<view class="trlue">
			<view class="name">
				<text>真实姓名</text>
				<text>*</text>
				<input type="text" placeholder="填写你的姓名" />
			</view>
			<view class="name">
				<text>身份证号</text>
				<text>*</text>
				<input type="text" placeholder="填写您的身份证号" />
			</view>
		</view>
		<h3>请拍摄并上传你的身份证照片（非必填）</h3>
		<view class="sheng_page">
			<view class="please">
				<view class="up">
					<image src="../../../static/other/组%2022.png" mode="aspectFit"></image>
				</view>
				<text>请上传身份证正面</text>
			</view>
			<view class="pleases">
				<view class="up">
					<image src="../../../static/other/组%2022.png" mode="aspectFit"></image>
				</view>
				<text>请上传身份证反面</text>
			</view>
			<view class="pleased">
				<view class="up">
					<image src="../../../static/other/组%2022.png" mode="aspectFit"></image>
				</view>
				<text>请上传个人自拍照</text>
			</view>
		</view>
		<h5><text>注：</text>拍摄时确保身份证边框完整，字体清晰！尺寸最大不超过2M</h5>
		<view class="buy">
			<view class="know">购号须知</view>
			<view class="service">
				<image src="../../../static/other/11.png" mode="aspectFit"></image>
				<h4>请仔细阅读<text>《办理须知》</text>服务条款</h4>
				<image src="../../../static/other/跳转箭头@2x.png" mode="aspectFit"></image>
			</view>
			<view class="service">
				<image src="../../../static/other/11.png" mode="aspectFit"></image>
				<h4>请仔细阅读<text>《入网协议》</text>服务条款</h4>
				<image src="../../../static/other/跳转箭头@2x.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="bottom">
			<text>合计:</text>
			<text>￥900.00</text>
			<view class="pay" @click="now">立即购买</view>
		</view>
	</view>
</template>

<script>
	import red from '../../../compoents/other/red/red.vue'
	export default {
		components:{
			red
		},
		data() {
			return {
				now(){
					uni.navigateTo({
						url:'/pages/other/payment/payment'
					})
				}
			};
		}
	}
</script>

<style lang="less">
	.auton_page {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow: auto;
		.pink_box {
			width: 690rpx;
			// height: 136rpx;
			padding: 20rpx 20rpx 27rpx;
			box-sizing: border-box;
			background-color: rgba(250, 202, 207, 0.2);
			margin: 37rpx auto 0;
			font-size: 22rpx;
			color: #fe5858;
			line-height: 33rpx;
		}
		h4 {
			width: 690rpx;
			font-size: 24rpx;
			color: #333333;
			margin: 43rpx auto 20rpx;
		}
		h3 {
			width: 690rpx;
			font-size: 24rpx;
			color: #333333;
			margin: 20rpx auto;
		}
		h5 {
			width: 690rpx;
			font-size: 20rpx;
			color: #666666;
			margin: 20rpx auto;
			text {
				color: #fe5858;
			}
		}
		.trlue {
			width: 690rpx;
			height: 176rpx;
			background-color: #FFFFFF;
			margin: 0 auto;
			.name {
				width: 100%;
				height: 88rpx;
				display: flex;
				border-bottom: 1px solid #f2f2f2;
				align-items: center;
				padding: 0 20rpx;
				box-sizing: border-box;
				text:first-child {
					font-size: 24rpx;
					color: #333333;
				}
				text:nth-of-type(2) {
					color: #fe5858;
				}
				input {
					font-size: 22rpx;
					margin-left: 15rpx;
					width: 300rpx;
				}
			}
			.name:last-child{
				border-bottom: none;
			}
		}
		.sheng_page {
			width: 690rpx;
			height: 570rpx;
			background-color: #FFFFFF;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			padding: 30rpx 18rpx;
			box-sizing: border-box;
			flex-wrap: wrap;
			.please {
				width: 308rpx;
				height: 235rpx;
				.up {
					width: 308rpx;
					height: 196rpx;
					background: url(../../../static/other/组%2025.png) no-repeat;
					background-size: 308rpx 196rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 94rpx;
						height: 94rpx;
					}
				}
				text {
					font-size: 22rpx;
					color: #333333;
					text-align: center;
					display: block;
					margin-top: 18rpx;
				}
			}
			.pleases {
				width: 308rpx;
				height: 235rpx;
				.up {
					width: 308rpx;
					height: 196rpx;
					background: url(../../../static/other/组%20252.png) no-repeat;
					background-size: 308rpx 196rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 94rpx;
						height: 94rpx;
					}
				}
				text {
					font-size: 22rpx;
					color: #333333;
					text-align: center;
					display: block;
					margin-top: 18rpx;
				}
			}
			.pleased{
				width: 308rpx;
				height: 235rpx;
				margin-top: 42rpx;
				.up {
					width: 308rpx;
					height: 196rpx;
					background: url(../../../static/other/组%20251.png) no-repeat;
					background-size: 308rpx 196rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image {
						width: 94rpx;
						height: 94rpx;
					}
				}
				text {
					font-size: 22rpx;
					color: #333333;
					text-align: center;
					display: block;
					margin-top: 18rpx;
				}
			}
		}
		.buy {
			width: 690rpx;
			height: 266rpx;
			background-color: #FFFFFF;
			margin: 0 auto 54rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			.know {
				width: 100%;
				height: 88rpx;
				border-bottom: 1px solid #EAEAEA;
				line-height: 88rpx;
				font-size: 22rpx;
			}
			.service {
				width: 100%;
				height: 88rpx;
				border-bottom: 1px solid #EAEAEA;
				display: flex;
				align-items: center;
				image:first-child {
					width: 22rpx;
					height: 22rpx;
				}
				image:last-child {
					width: 12rpx;
					height: 20rpx;
				}
				h4 {
					margin: 0;
					font-size: 22rpx;
					color: #333333;
					margin-left: 25rpx;
					text {
						color: #fe5858;
					}
				}
			}
			.service:last-child{
				border-bottom: none;
			}
		}
		.bottom {
			width: 100%;
			height: 88rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			padding-left:28rpx ;
			box-sizing: border-box;
			position: relative;
			text:first-child{
				font-size: 23rpx;
				color: #666666;
			}
			text:nth-of-type(2){
				font-size: 28rpx;
				color: #fe5858;
				margin-left: 15rpx;
			}
			.pay {
				width: 210rpx;
				height: 88rpx;
				background-color: #fe5858;
				color: #FFFFFF;
				text-align: center;
				line-height: 88rpx;
				font-size: 28rpx;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
</style>
