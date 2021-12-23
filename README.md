# fx67llClock
Easy & Good Clock !

[npm](https://www.npmjs.com/package/fx67ll-clock "npm")  


### 使用步骤
1. `npm install fx67ll-clock --save`
2. 在`main.js`中注册组件

```JavaScript
import fx67llClock from 'fx67ll-clock'
Vue.use(fx67llClock)
```

3. 在vue页面中导入使用


### 组件简介
1. 二进制时钟组件

```Vue
属性 isShowTime：是否显示十进制时间，默认值：true，仅支持布尔值
属性 zoomSize：修改时钟缩放尺寸，复杂修改请直接重写样式表，默认值：1

<fx67ll-binary-clock :isShowTime="true" :zoomSize="1"></fx67ll-binary-clock>
```

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本组件有什么错误，欢迎在评论区讨论指正，感谢您的阅读！  
如果您喜欢这个组件，欢迎访问 [本组件github仓库地址](https://github.com/fx67ll/fx67llClock)，为我点一颗Star，Thanks~ :)  
***转发请注明参考地址，非常感谢！！！***


## 0.2.1.20211223
* 完成***二进制时钟***组件第一个发布版本  

## 0.2.0.20211222
* 完成***二进制时钟***组件初版  
* 考虑各类场景适配和开放什么样的参数配置的问题  

## 0.1.3.20211208
* 删除不必要中文字体包文件

## 0.1.2.20211027
* 完成基础翻书动效    

## 0.1.1.20211026
* 完成3d transform变换  

## 0.1.0.20211025
* init project
* 各种各样简单好用的时钟组件，第一版计划支持Vue2，后续兼容Vue3
