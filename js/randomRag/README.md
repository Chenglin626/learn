# randomRag
函数说明：<br>
从一个区间里面随机取出n个整数；
	
参数：<br>
num： 取数的个数，最小值为0，若为浮点数，取不大于浮点数的整数；<br>
rangeFrom： 区间的下限，默认1，可为负数，可为小数；<br>
rangeTo： 区间的上限，默认1000，可为负数，可为小数；<br>
rangeFrom和rangeTo没有大小要求；
	
例子：<br>
randomRag( 5 )		//从1至1000之间取出5个整数；<br>
randomRag( 5, -4.5, -105.7 )		//从-5至-105之间取出5个整数；<br>
randomRag( 5, 1, 5 )		//乱序；

2016/4/18<br>
使用数组读数方法，更改 randomRag.html 文件；<br>
将arrTar.push( parseInt( arrNum.splice( Math.floor( Math.random()*arrNum.length ), 1)));<br>
更改为arrTar.push( arrNum.splice( Math.floor( Math.random()*arrNum.length ), 1)[0] );

测试结果，有效；<br>
更改 randomRag.js 文件；

引入js文件测试，有效；

