<template>
	<view class="consult_page">
       <headPage :username="'咨询'" class="head"></headPage>
	   <view class="consult_box">
		   <image src="../../../static/consult/ke-bg.png"></image>
		   <view class="phone">
				<view class="phone_top">
					<view class="zixun">
						<image src="../../../static/consult/gan.png" mode="aspectFit"></image>
						<text>电话咨询</text>
					</view>
					<view class="boda">拨打客服电话</view>
					<view class="after">*下单后半小时内客服会一对一电话沟通为您服务</view>
				</view>
				<view class="phone_bottom">
					<view class="zixun">
						<image src="../../../static/consult/gan.png" mode="aspectFit"></image>
						<text>微信咨询</text>
					</view>
					<view class="service">
						<view class="service_page">
							<image src="../../../static/consult/one-ke.png" mode="aspectFit"></image>
							<text>客服：娇娇</text>
						</view>
						<view class="service_page">
							<image src="../../../static/consult/two-ke.png" mode="aspectFit"></image>
							<text>客服：媛媛</text>
						</view>
						<view class="service_page">
							<image src="../../../static/consult/three-ke.png" mode="aspectFit"></image>
							<text>客服：谈谈</text>
						</view>
						<view class="service_page">
							<image src="../../../static/consult/four-ke.png" mode="aspectFit"></image>
							<text>客服：晗晗</text>
						</view>
					</view>
					<view class="change">请选择客服，点击保存微信二维码添加</view>
				</view>
		   </view>
	   </view>
	</view>
</template>

<script>
	import headPage from '@/compoents/head/headPage/headPage.vue'
	export default {
		components:{
			headPage
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
		overflow: hidden;
	}
	.consult_page {
		width: 100%;
		height: 100%;
		.consult_box {
		  width: 100%;
		  height: 100%;
		  position: relative;
		  display: flex;
		  align-items: center;
		  image {
			  width: 100%;
			  height: 100%;
		  }
		  .phone {
			  position: absolute;
			  left: 0;
			  top: 50%;
			  transform: translateY(-60%);
			  width: 100%;
			  
			  .phone_top {
				  width: 690rpx;
				  height: 336rpx;
				  background-color: #FFFFFF;
				  margin: 40rpx auto;
				  border-radius: 25rpx;
				  .zixun {
					  display: flex;
					  align-items: center;
					  padding-top: 36rpx;
					  image {
						  width: 6rpx;
						  height: 24rpx;
						  margin: 0 18rpx 0 25rpx;
					  }
					  text {
						  font-size: 28rpx;
						  color: #333333;
					  }
				    }
					.boda {
						width: 358rpx;
						height: 63rpx;
						background: url(../../../static/consult/red-bg.png) no-repeat;
						background-size: 358rpx 63rpx;
						text-align: center;
						line-height: 63rpx;
						font-size: 28rpx;
						color: #FFFFFF;
						margin: 54rpx auto 47rpx;
					}
					.after {
						font-size: 24rpx;
						color: #fe5858;
						width: 100%;
						text-align: center;
					}
			    }
				.phone_bottom {
					width: 690rpx;
					height: 640rpx;
					background-color: #FFFFFF;
					border-radius: 25rpx;
					margin: 0 auto;
					.zixun {
						display: flex;
						align-items: center;
						padding-top: 36rpx;
						image {
						    width: 6rpx;
							height: 24rpx;
						    margin: 0 18rpx 0 25rpx;
					    }
						text {
							font-size: 28rpx;
							color: #333333;
						}
					}
					.service{
						width: 421rpx;
						height: 362rpx;
						display: flex;
						justify-content: space-between;
						margin: 57rpx auto;
						flex-wrap: wrap;
						.service_page {
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 150rpx;
							margin-bottom: 55rpx;
							image {
								width: 110rpx;
								height: 110rpx;
								margin-bottom: 18rpx;
							}
							text {
								font-size: 26rpx;
								color: #333333;
							}
						}
					}
					.change {
						font-size: 24rpx;
						color: #fe5858;
						width: 100%;
						text-align: center;
					}
				}
		    }
		}
	}
</style>
