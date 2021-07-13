<template>
	<view class="category_page">
		<headPage :username="'类别'"></headPage>
		<view class="category_box">
			<view class="i">
				<operatorLeft></operatorLeft>
			</view>
			<view class="o">
				<operatorRightTop></operatorRightTop>
			</view>
		</view>
		
	</view>
</template>

<script>
	import operatorLeft from "../../../compoents/category/operatorLeft/operatorLeft.vue"
	import headPage from '@/compoents/head/headPage/headPage.vue'
	import operatorRightTop from '../../../compoents/category/operatorRightTop/operatorRightTop.vue'
	export default {
		components:{
			operatorLeft,
			headPage,
			operatorRightTop
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.category_page {
		width: 100%;
		height: 100%;
		overflow: hidden;
		.category_box {
			width: 100%;
			height: 100%;
			display: flex;
			.i {
				width: 30%;
			}
			.o {
				width: 70%;
			}
		}
	}
</style>
