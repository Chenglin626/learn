# picClock
picClock.html 文件下，有两个bug。

bug1描述：<br>
时钟启动的第一秒是没有执行的；

bug2描述：<br>
图片在执行完成时，并没有归位；

解决办法：<br>
使用setTimeout进行回调。