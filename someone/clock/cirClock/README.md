# cirClock
cirClock是圆盘时钟；

重要提示：<br>
制作时，没有考虑ie和其他主流浏览器的低版本下的兼容；<br>
在Chrome，Firefox，Opera下能够正常显示；<br>
在所有transform属性前，添加浏览器内核前缀，在Safari下能够正常显示；<br>

clock_case1_1.html 文件记录的是 transform 原点的影响，未能考虑自身宽度；<br>
clock_case1_2.html 文件是调整后的记录；

clock_case2_1.html 文件记录的是 时针 未能准确的指向；原因是未能考虑 分 的影响；<br>
调整时的第一反应是：再次获取style，进行更改；但更好的方式，计算完成后，一次性设置style。<br>
clock_case2_2.html 文件是调整后的记录；

clock.html 使用 回调 加 setTimeout 进行控制，替换了 setInterval；

继续改进的设想：<br>
可以用图片做分针，时针，秒针的背景图。
使用渐变增加 指针 颜色。
更改表盘样式。