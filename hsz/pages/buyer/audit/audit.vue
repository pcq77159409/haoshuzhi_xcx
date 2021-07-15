<template>
	<view class="audit">
		<title :username="'审核中'"></title>
		<view class="audit_top">
			<image src="../../../static/buyer/shz.png" mode=""></image>
			<view>审核中...</view>
		</view>
		<view class="audit_text">
			<view class="">
				提交成功等待后台审核
			</view>
			<text>预计会在三个工作日内审完毕，请您耐心等待</text>
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
		}
	}
</script>

<style lang="less">
.audit{
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url(../../../static/buyer/b_bg.png);
	background-size: 100% 100%;
}
.audit_top{
	text-align: center;
	color: #FFFFFF;
	font-size: 26rpx;
	image{
		width: 220rpx;
		height: 220rpx;
		margin: 20rpx 0 25rpx;
	}
}
.audit_text{
	margin-top: 150rpx;
	text-align: center;
	font-size: 30rpx;
	font-weight: 700;
	color: #333333;
	line-height: 60rpx;
	text{
		font-size: 26rpx;
		font-weight: 400;
		color: #999999;
	}
}
</style>
