# TintU_ReactJS
同学在研究生期间参与成立的Tintu影像工作室，主要提供各种摄影类相关业务，早些时候提供了一个预约网页（小程序）的想法，也已经设计了一小部分页面，由于支付接口和时间问题，网页开发最终搁置了。
目前处于换方向期间，想从C转入web前端后台部分，所以正好借这个项目的底子，把新学的知识应用一波。目前已开发一个月左右，每天抽时间完成一些，整体进度还行吧。

## 技术栈
* 前端部分
  * ReactJS
  * Redux/React-redux
  * React-route（4.0，单页面应用，用的不是很舒服。。）
  * Ant-design mobild（应用了部分控件，还是很方便的）
  * Font awesome（图标库，设计原件太少了，时间有限）
  * less/sass（sass学了没用，时间不够，偏向于less，当前来看纯css太痛苦了）
* 后台部分
  * NodeJS（整体框架基于Nodejs webpack）
  * Express
  * Mysql（MangoDB没有经验，时间不足）
* 配置
  * webpack
  * babel-eslint
  * webpack-dev-server

### 补充
* 没有选用create-react-app，为了便于学习（折腾），用脚手架的屏蔽太多东西了，自己搭必要的时候可以看下create-react-app的配置了解一下。
* webpack不太好理解，目前也只能了解到基本的配置场景和用途，感觉没GET到点。
* redux，react用起来比较舒服，c/java写得多设计模式类的东西就会上手比较快。
* 后台部分比较简单，主要侧重点在前台。

## 项目情况
### 10.21
* 移动端网页，桌面端也能用，绝大部分组件都是em或者百分比大小，flex布局比较多，桌面端也能正常显示但是肯定没有移动端那么符合交互。
* 前端渲染，前端路由（react-route），404页面还没有处理，产品相关的页面要考虑后台渲染（描述信息过多，展示类页面可以后台通过模板直接处理完成）。
* 后台处理只完成小部分，订单管理和时间管理都未完成。

## 页面展示
全部截屏页面都在doc/screenshot下，这里列举部分页面

![orderconfirm](https://github.com/CarrotMischievous/TintU_ReactJS/blob/master/doc/screenshot/orderconfirm.jpg)
![scheduleDate](https://github.com/CarrotMischievous/TintU_ReactJS/blob/master/doc/screenshot/scheduleDate.jpg)
