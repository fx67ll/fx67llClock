import Vue from 'vue';

// 翻页时钟组件
import {
	fx67llFlipClock
} from '@c/flip-clock/flip-clock.js';

// 二进制时钟组件
import {
	fx67llBinaryClock
} from '@c/binary-clock/binary-clock.js';

export default {
	install(Vue) {
		Vue.use(fx67llFlipClock);
		Vue.use(fx67llBinaryClock);
	}
}
