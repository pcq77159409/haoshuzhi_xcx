<template>
	<!-- 我的页面轮播图组件 -->
	<view  class="my_banner">
		<view class="m_b_image">
			<image src="../../../static/my/card.png" mode=""></image>
		</view>
		<view class="m_b_text">
			<view>
				手机靓号: 13554888999
			</view>
			<text>等待支付</text>
		</view>
		<view class="m_b_btn">
			立即支付
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
.my_banner{		
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	.m_b_image{
		width: 100rpx;
		height: 100rpx;
		margin-left: 10rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.m_b_text{
		width: 50%;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text{
			color: red;
		}
	}
	.m_b_btn{
		height: 40rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
		line-height: 40rpx;
		color: red;
		border: 1px solid red;
		font-size: 24rpx;
		align-self: flex-end;
	}
}

</style>
