<template>
	<!-- 归属地组件 -->
	<view class="attra_page">
		<view class="left_page">
			<view class="left_box" v-for="(item,index) in leftList" :key="index" @click="onClickShow" :class="{current:flag}">
				<image :src="item.img" mode="" v-show="flag"></image>
				<text>{{item.username}}</text>
			</view>
		</view>
		<view class="right_page">
			<view class="right_box" v-for="(item,index) in leftList" :key="index" @click="onCickDn" :class="{current:show}">
				<image :src="item.img" mode="" v-show="show"></image>
				<text>{{item.username}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftList:[{
					username:'全国',
					img:require('../../../static/other/gou.png'),
					id:1
				},],
				rightList:[{
					username:'全国',
					img:require('../../../static/other/gou.png'),
					id:1
				},],
				flag:false,
				show:false,
			};
		},
		methods:{
			onClickShow() {
				this.flag=true
			},
			onCickDn(){
				this.show=true
			}
		}
	}
</script>

<style lang="less">
	.attra_page {
		width: 100%;
		height: 719rpx;
		display: flex;
		.left_page {
			width: 35%;
			height: 100%;
			background-color: #FFFFFF;
			.left_box {
				position: relative;
				width: 100%;
				height: 87rpx;
				border-bottom: 1px solid #ececec;
			}
			text {
				font-size: 22rpx;
				color: #333333;
				line-height: 87rpx;
				margin-left: 69rpx;
			}
			image {
				width: 20rpx;
				height: 14rpx;
				position: absolute;
				left: 30rpx;
				top: 37rpx;
			}
			.current {
				background-color: #F4F4F4;
				text {
					color: #fe5858;
				}
			}
		}
		.right_page {
			width: 65%;
			height: 100%;
			background-color: #F8F8F8;
			.right_box {
				position: relative;
				width: 100%;
				height: 87rpx;
				border-bottom: 1px solid #ececec;
			}
			text {
				font-size: 22rpx;
				color: #333333;
				line-height: 87rpx;
				margin-left: 107rpx;
			}
			image {
				width: 20rpx;
				height: 14rpx;
				position: absolute;
				left: 30rpx;
				top: 37rpx;
			}
			.current {
				text {
					color: #fe5858;
				}
			}
		}
	}
</style>
