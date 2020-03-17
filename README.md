# lxc-loading
## 纯css实现的一款简单方便的vue加载动画插件,效果如下
![Image text](https://raw.githubusercontent.com/luoxuancong/img/master/imgs/loading.gif)

## 1. npm安装
```
  npm install lxc-loading  --save
``` 
## 2. man.js 引用
```
  import lxcLoading from 'lxc-loading'  
  Vue.use(lxcLoading)
```
## 3. 在页面中使用
```
 <template>
  <div>
    <lxc-loading/>
  </div>
 </template>
```
## 4. api  

属性 | 说明  | 类型 | 默认值 | 参数
---- | ----  | ----| --- |---
loading| 是否显示加载插件 | Boolean | true| true/false
offsetTop| 浏览器顶部偏移距离 | String | 0px | px、rem、% 常用的单位属性
showBg| 是否显示加载插件背景色 | Boolean | true | true/false
bgColor| 插件背景色设置 | String | rgba(0,0,0,.9) | rgb()、rgba()、#333 等常用css颜色属性
zIndex | 插件层级，当插件层级不够时调节 | String/Number | 999 |

____

> 后续会新增其他各种漂亮的css  loaing


