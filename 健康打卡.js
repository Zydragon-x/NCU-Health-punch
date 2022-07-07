device.wakeUp();
//这里是点亮屏幕

sleep(500);
swipe(535, 1935, 535, 745, 500);
sleep(300);

//下面是笔者的六位数字开机密码（推荐用数字开机密码），其中括号内是点击坐标（需要用开发者模式自行获取），这里开机密码需要因情况不同配置，若是手势需要用'swipe()'语句 
click();
click();
click();
click();
click();
click();
 
//下面是打开企业微信并进行打卡
sleep(2000);
launchApp("企业微信");
sleep(3200);
click(760, 2245);
sleep(1800);
click(190, 520);
sleep(2800);
click(75, 175);
sleep(1800);
click(900, 530);
sleep(1800);
click(540, 540);
sleep(1800);
swipe(950, 2220, 950, 300, 1000);
sleep(1000);
click(266, 756);
sleep(700);
click(520, 2145);
sleep(800);


//下面是结束进程
recents();
sleep(700);
click(545, 2120);
