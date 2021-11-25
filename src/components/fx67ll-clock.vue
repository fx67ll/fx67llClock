<template>
	<!-- <div class="fx67ll-clock-box">
		<div class="fx67ll-clock-card-box">
			<div class="fx67ll-clock-card"></div>
		</div>
	</div> -->

	<div class="stage">
		<div class="box">
			<div class="box-prev"></div>
			<div class="box-midd"></div>
			<div class="box-next">
				<span></span>
				<span></span>
			</div>
		</div>
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

		.box {
			width: 400px;
			height: 400px;
			margin: 100px 100px;
			position: relative;
			transition: 0.5s all;
			transform-style: preserve-3d;

			.box-prev,
			.box-midd,
			.box-next {
				width: 100%;
				height: 100%;
				position: absolute;
				transition: 3s all;
				// backface-visibility: hidden;
			}

			.box-prev {
				background-color: #ffff9b;
				z-index: 2;
			}

			.box-midd {
				background-color: #aaff7f;
				z-index: 1;
			}

			.box-next {
				display: flex;
				justify-content: space-between;
				z-index: 0;

				span {
					width: 50%;
					height: 100%;
				}

				span:nth-child(1) {
					background-color: #ffff9b;
				}

				span:nth-child(2) {
					background-color: #aaff7f;
				}
			}
		}

		.box:hover .box-prev {
			transform: perspective(800px) rotateY(-180deg);
			transform-origin: perspective(800px) 50% 50% 0;
		}

		.box:hover .box-midd {
			transform: perspective(800px) rotateY(-180deg);
			transform-origin: perspective(800px) 50% 50% 0;
		}
	}


	// .fx67ll-clock-card-box {
	// 	width: 300px;
	// 	height: 600px;
	// 	border: 1px solid red;

	// 	// perspective: 300px;
	// 	.fx67ll-clock-card {
	// 		width: 100%;
	// 		height: 100%;
	// 		background-color: #55ffff;
	// 		opacity: 0.75;
	// 		transform: perspective(600px) rotateX(40deg);
	// 		// transition: transform 2s;
	// 		// animation: infinite-rotate 2s infinite;
	// 	}

	// 	// .fx67ll-clock-card:hover{
	// 	// 	transform: perspective(600px) rotateX(480deg);
	// 	// }
	// 	@keyframes infinite-rotate {
	// 		from {
	// 			transform: perspective(600px) rotateX(0deg);
	// 		}

	// 		to {
	// 			transform: perspective(600px) rotateX(360deg);
	// 		}
	// 	}
	// }
</style>
