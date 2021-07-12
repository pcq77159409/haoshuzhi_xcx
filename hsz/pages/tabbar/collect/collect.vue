<template>
	<view class="collect_pabox">
		<headPage :username="'收藏'"></headPage>
		<view class="collect_page">
			<view class="shou_page">
				<image src="../../../static/collect/图层%201@2x.png" mode="aspectFit"></image>
				<h4>您暂时还没有添加收藏呢，快去选择心仪的收藏吧</h4>
				<view class="shou_box">去收藏~</view>
			</view>
		</view>
		<collect-list  v-if="false"></collect-list>
	</view>
</template>

<script>
	import headPage from '@/compoents/head/headPage/headPage.vue'
	import collectList from '../../../compoents/collect/collect-list/collect-list.vue'
	export default {
		components:{
			headPage,
			collectList
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


<style lang="less">
	.collect_pabox {
		width: 100%;
		height: 100%;
		.collect_page {
			width: 100%;
			.shou_page {
				width: 495rpx;
				margin: 76rpx auto 0;
				image {
					width: 400rpx;
					height: 269rpx;
					margin: 0 auto;
					display: block;
				}
				h4 {
					font-size: 22rpx;
					color: #999;
					margin-top: 29rpx;
				}
				.shou_box {
					width: 100%;
					height: 54rpx;
					border-radius: 25rpx;
					background-color: #fe5858;
					color: #FFFFFF;
					text-align: center;
					line-height: 54rpx;
					margin-top: 54rpx;
					font-size: 26rpx;
				}
			}
		}
	}
	
</style>
