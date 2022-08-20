# NCU-Health-punch
基于Autojs的南昌大学企业微信健康打卡自动化

## 声明
- 本打卡脚本仅供学习交流使用，非商业性使用，也请勿过分依赖。
- 笔者对使用或不使用本脚本造成的问题不负任何责任，不对脚本执行效果做出任何担保，原则上不提供任何形式的技术支持。
- 请牢记：疫情防控始终是一个敏感且重要的话题。如果您决定使用该项目所提供的服务，那么其带来的一切后果，均将由您个人承担，与开发者、原作者、贡献者无关。

## 注意事项（更：2022.8.20）
- 若无法实现自动点亮屏幕，可设置闹钟点亮并加代码划开，或者直接用click点击桌面的应用打开.
- 尽量不设置在凌晨打卡，推荐设置在上午.
- 最好设置重复两到三次间隔时段打卡.


## 脚本实行过程
自动点亮屏幕后，点击输入数字密码开机后，启动企业微信，点击完成打卡，再结束后台应用后等待息屏。
 
---

## 步骤一：安装Autojs到您的手机上
  [~~这里通过网盘下载~~](https://pan.baidu.com/s/1P-sO9xtVGJWq8voAFBl6dQ?pwd=jc88) ，或者您可以在github上自行搜索相关资源下载Autojs其他版本。
  


## 步骤二：开启无障碍服务及其所需权限
 
 成功下载打开软件后，点击左上角的三杠，即可看到需要开启的服务及权限。
 
  
## 步骤三：配置脚本文件并设置定时运行
 请下载该仓库资源中脚本文件（健康打卡.js）并上传到Autojs中进行配置， 当然您也可以选择直接复制脚本文件中的代码去到软件Autojs中新建文件再进行手动配置。
 > 文件中'//'后内容是注释 
 
 先给代码解读（具体请见官方文档）
 - device.wakeup(); 点亮屏幕.
 - click(x,y);  点击坐标(x,y).
 - swipe(x1,y1,x2,y2,times);  从(x1,y1)划到(x2,y2)；times是持续时间,单位为毫秒.
 - sleep(); 暂时停止脚本的时间，单位为毫秒.（作为缓冲手机自动操作的耗时）
 - launchApp(""); 启动应用（输入应用名字）
 - recents(); 打开后台任务进程
 
 为获取点击坐标请打开 **开发者模式** 并请打开 **指针位置**，然后修改对应坐标(x,y)即可 。
 
 需要手动配置的是所有点击坐标（滑动坐标有两个作用：一是打开数学密码的键盘；二是最后面的打卡页面下滑，如运行无异常可以不用改）。

 具体测试运行过程中可以适当修改sleep();的暂停时间。
 
 文件右侧三小圆点打开即可设置定时任务。
 
---
> 如果您觉得对您有帮助，请点个Stars!:blush:

## 参考
- [原开发者](https://github.com/hyb1996/Auto.js)
- [官方文档](https://pro.autojs.org/docs/#/zh-cn/)
- [自动化脚本学习教程和相关demo](https://github.com/wiatingpub/autojs)
- [AutoX.js](https://github.com/kkevsekk1/AutoX)


