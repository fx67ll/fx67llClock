<template>
	<div class="bc-box">
		<p>{{ timeNow }}</p>
		<table>
			<tr class="bc-hours"><td v-for="(item, i) in hoursTimeArr" :key="i" :class="{ num0: item === '0', num1: item == '1' }"></td></tr>
			<tr class="bc-minutes"><td v-for="(item, i) in minutesTimeArr" :key="i" :class="{ num0: item === '0', num1: item == '1' }"></td></tr>
			<tr class="bc-seconds"><td v-for="(item, i) in secondsTimeArr" :key="i" :class="{ num0: item === '0', num1: item == '1' }"></td></tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'fx67llBinaryClock',
	data() {
		return {
			// 当前时间
			timeNow: null,
			// 计时器对象
			timer: null,
			// 小时二进制数组
			hoursTimeArr: [0, 0, 0, 0, 0, 0],
			// 分钟二进制数组
			minutesTimeArr: [0, 0, 0, 0, 0, 0],
			// 秒钟二进制数组
			secondsTimeArr: [0, 0, 0, 0, 0, 0]
		};
	},
	mounted() {
		var self = this;
		this.timer = setInterval(function() {
			self.getNowTime();
		}, 1000);
	},
	destroyed() {
		clearInterval(this.timer);
		this.timer = null;
	},
	methods: {
		// 获取当前时间
		getNowTime() {
			let d = new Date();
			let h = d.getHours();
			let m = d.getMinutes();
			let s = d.getSeconds();
			this.timeNow = this.addZero(h) + ' : ' + this.addZero(m) + ' : ' + this.addZero(s);
			this.hoursTimeArr = this.convertTenToTwo(h);
			this.minutesTimeArr = this.convertTenToTwo(m);
			this.secondsTimeArr = this.convertTenToTwo(s);
		},
		// 补齐时间格式
		addZero(i) {
			if (i < 10) {
				i = '0' + i;
			}
			return i;
		},
		// 十进制数字转换为二进制
		convertTenToTwo(num) {
			let bin = '';
			let convArr = [];
			while (num > 0) {
				bin = (num % 2) + bin;
				num = Math.floor(num / 2);
			}
			convArr = bin.split('');
			while (convArr.length < 6) {
				convArr.unshift('0');
			}
			return convArr;
		}
	}
};
</script>

<style lang="less" scoped>
@import '@a/styles/binary-clock/binary-clock.less';
</style>
