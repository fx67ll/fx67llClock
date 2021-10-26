<template>
	<!-- <div class="fx67ll-clock-box">
		<div class="fx67ll-clock-card-box">
			<div class="fx67ll-clock-card"></div>
		</div>
	</div> -->

	<div class="stage">
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
	</div>
</template>

<script>
	export default {
		name: 'fx67llClock',
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style lang="less" scoped>
	.stage {
		width: 100%;
		height: 100%;
		perspective: 604px;
		-webkit-perspective: 604px;
		perspective-origin: left center;
		-webkit-perspective-origin: left center;
	}

	.stage .box {
		width: 100px;
		height: 100px;
		margin: 100px 100px;
		background-color: #55ffff;
		display: inline-block;
		transform: rotate3d(0, 1, 0, 65deg);
		-webkit-transform: rotate3d(0, 1, 0, 65deg);

		transform-origin: 100px 100px -900px;
		-webkit-transform-origin: 100px 100px -900px;
		
		transform-style: preserve-3d;
		-webkit-transform-style: preserve-3d;
	}

	.fx67ll-clock-card-box {
		width: 300px;
		height: 600px;
		border: 1px solid red;

		// perspective: 300px;
		.fx67ll-clock-card {
			width: 100%;
			height: 100%;
			background-color: #55ffff;
			opacity: 0.75;
			transform: perspective(600px) rotateX(40deg);
			// transition: transform 2s;
			// animation: infinite-rotate 2s infinite;
		}

		// .fx67ll-clock-card:hover{
		// 	transform: perspective(600px) rotateX(480deg);
		// }
		@keyframes infinite-rotate {
			from {
				transform: perspective(600px) rotateX(0deg);
			}

			to {
				transform: perspective(600px) rotateX(360deg);
			}
		}
	}
</style>
