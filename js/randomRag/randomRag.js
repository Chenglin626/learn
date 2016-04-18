/* 
	函数说明：
	从一个区间里面随机取出n个整数；
	
	参数：
	num： 取数的个数，最小值为0，若为浮点数，取不大于浮点数的整数；
	rangeFrom： 区间的下限，默认1，可为负数，可为小数；
	rangeTo： 区间的上限，默认1000，可为负数，可为小数；
	rangeFrom和rangeTo没有大小要求；
	
	例子：
	randomRag( 5 )		//从1至1000之间取出5个整数；
	randomRag( 5, -4.5, -105.7 )		//从-5至-105之间取出5个整数；
	randomRag( 5, 1, 5 )		//乱序；

*/


;function randomRag( num, rangeFrom, rangeTo ) {
	
	/*
		对传入的num参数进行判断
	*/
	if ( num !== parseInt(num) && num <= 0 ) console.info( 'num参数最好使用整数并大于0' ); 
	
	/*
		将传参进行判断，并赋值
	*/
	num = num ? ( num > 0 ? parseInt(num) : 0 ) : 50;
	rangeFrom = rangeFrom || 1;
	rangeTo = rangeTo || 1000;
		
	/*
		声明三个空数组；
		arrRan放入取值区间；
		arrNum生成取值区间的所有整数；
		arrTar放入随机取出的整数，并返回出去；
	*/
	
	var arrRan = [], arrNum = [], arrTar = [];
	
	/*
		将rangeFrom和rangeTo放入arrRan，并按照大小排序，并取整；
	*/
	
	arrRan.push( rangeFrom, rangeTo );
	arrRan.sort( function ( a, b ) {
		return a-b;
	});
		
	arrRan[0] = Math.ceil( arrRan[0] );
	arrRan[1] = Math.floor( arrRan[1] );
	
	/*
		num和取数区间的整数个数进行对比，range范围的整数个数为 arrRan[1] - ( arrRan[0] -1 )；
	*/
	
	if ( num > ( arrRan[1] - arrRan[0] + 1 )) return console.warn( 'num参数应大于取数区间整数个数' ); 
	
	/* 
		生成取值整数数组并随机取数，并返回目标数组；
	*/
	
	for ( var i = arrRan[0]; i < arrRan[1]+1; i++) {
		arrNum.push(i);
	}
	
	while ( num > 0 ) {
		arrTar.push(
			arrNum.splice( Math.floor( Math.random()*arrNum.length ), 1)[0]
		);
		num--;
	}
	
	return arrTar;
};