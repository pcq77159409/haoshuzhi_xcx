<template>
	<view class="particulars">
		<red></red>
		<particulars></particulars>
		<particBottom></particBottom>
	</view>
</template>

<script>
	import red from '../../../compoents/other/red/red.vue'
	import particulars from '../../../compoents/other/particulars/particulars.vue'
	import particBottom from '../../../compoents/other/particBottom/particBottom.vue'
	export default {
		components: {
			red,
			particulars,
			particBottom
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.particulars {
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow: auto;
	}
</style>
