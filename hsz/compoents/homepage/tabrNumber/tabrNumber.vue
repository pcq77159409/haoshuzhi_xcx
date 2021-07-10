<template>
	<view class="tabr_box">
		<view class="tab" v-for="(item,index) in tabrlist" :key="index">
			<image :src="item.src" mode=""></image>
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabrlist:[{
					src:require('../../../static/home/one.png'),
					text:'移动号码',
					id:1
				},{
					src:require('../../../static/home/two.png'),
					text:'联通号码',
					id:2
				},{
					src:require('../../../static/home/three.png'),
					text:'电信号码',
					id:3
				},{
					src:require('../../../static/home/four.png'),
					text:'虚拟号码',
					id:4
				},{
					src:require('../../../static/home/five.png'),
					text:'生日号码',
					id:5
				},{
					src:require('../../../static/home/six.png'),
					text:'情侣号码',
					id:6
				},{
					src:require('../../../static/home/seven.png'),
					text:'套餐介绍',
					id:7
				},{
					src:require('../../../static/home/eight.png'),
					text:'业务办理',
					id:8
				},]
			};
		}
	}
</script>

<style lang="less">
	.tabr_box {
		width: 680rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 60rpx auto 0;
		.tab {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 25%;
			margin-bottom: 20rpx;
			image {
				width: 97rpx;
				height: 97rpx;
			}
			text {
				font-size: 24rpx;
				color: #333333;
			}
		}
	}
</style>
