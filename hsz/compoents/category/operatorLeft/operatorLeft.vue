<template>
	<!-- 类别页左边的组件 -->
	<view class="operator_page">
		<view class="operator_box" v-for="(item,index) in operator" :key="index">{{item}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				operator:['中国移动','中国联通','中国电信','虚拟号码']
			};
		}
	}
</script>

<style lang="less">
	.operator_page {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		.operator_box {
			width: 100%;
			height: 100rpx;
			border-bottom: 1px solid #FFFFFF;
			text-align: center;
			line-height: 100rpx;
			font-size: 26rpx;
			color: #666666;
		}
	}
</style>
