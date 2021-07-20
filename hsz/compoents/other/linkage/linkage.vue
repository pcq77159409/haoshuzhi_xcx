<template>
	<view class="linkage">
		<view v-for="(item,index) in linkage" :key="index" class="linkage_box" @click="chuan(item.id)">
			<text>{{item.text}}</text>
			<image :src="item.src" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				linkage:[{
					text : '归属地',
					src : require('../../../static/other/bottom.png'),
					id:1
				},{
					text : '运营商',
					src : require('../../../static/other/bottom.png'),
					id:2
				},{
					text : '规律',
					src : require('../../../static/other/bottom.png'),
					id:3
				},{
					text : '筛选',
					src : require('../../../static/other/filter.png'),
					id:4
				},]
			};
		},
		methods:{
			chuan(id) {
				this.$emit('indexId',id) 
			}
		}
	}
</script>

<style lang="less">
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
</style>
