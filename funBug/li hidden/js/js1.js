var oHead = document.getElementById('head');
var oHeadUl = oHead.getElementsByTagName('ul')[0];
var aHeadLi = oHeadUl.getElementsByTagName('li');
var timeStr = '';

function fnDate() {
	var iTime = new Date();
	var iHours = iTime.getHours();
	var iMin = iTime.getMinutes();
	var iSec = iTime.getSeconds();
	
	function toTwo( n ) {
		return n<10 ? '0' + n : '' + n ;
	}
	timeStr = toTwo( iHours ) + ':' + toTwo( iMin ) + ':' + toTwo( iSec );
}
fnDate();
setInterval( fnDate, 1000 );

function getStyle( obj, attr ) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr] ;
}

function onMove( obj, attr, dir, tar , endFn ) {
	dir = tar > parseInt(getStyle( obj, attr )) ? dir : -dir;
	clearInterval( obj.timer );
	obj.timer = setInterval( function () {
		obj.speed = parseInt(getStyle( obj, attr )) + dir;
		if ( dir>0 && obj.speed>tar || dir<0 && obj.speed<tar ) {
			obj.speed = tar;
		}
		obj.style[attr] = obj.speed + 'px';
		if ( obj.speed === tar ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
	}, 100 );
}

function diTa( i ) {
	var aImg = aHeadLi[i].getElementsByTagName('img');
	aImg[0].style.display = 'none';
	clearTimeout( aHeadLi[i].timer );
	aHeadLi[i].timer = setTimeout( function() {
		aImg[0].style.display = 'block';
	}, 100 );
	
}

for ( var i=0; i<aHeadLi.length; i++ ) {
	ini( i );
}

function ini( i ) {
	var aImg = aHeadLi[i].getElementsByTagName('img');
	var num = Number(timeStr.charAt(i));
	if ( i === 2 || i === 5 ) {
		aImg[0].style.display = 'block';
		aImg[0].src = 'images/clockPic/colon.png';
		aImg[1].src = 'images/clockPic/colonNo.png';
		
	} else {
		aHeadLi[i].style.top = 0;
		aImg[0].src = 'images/clockPic/' + num + '.png';
		if ( i === 1 || i === 4 || i === 7 ) {
			aImg[1].src = 'images/clockPic/' + (num+1)%10 + '.png';
		} else if ( i === 3 || i === 6 ) {
			aImg[1].src = 'images/clockPic/' + (num+1)%6 + '.png';
		} else if ( i === 0 ) {
			aImg[1].src = 'images/clockPic/' + (num+1)%2 + '.png';
		}
	}
}

function auto( i ) {
	onMove( aHeadLi[i], 'top', 6 , -30, ini(i));
}

setInterval( function() {
	var arrNum = [];
	for ( var i=0; i< aHeadLi.length; i++) {
		arrNum.push(Number(timeStr.charAt(i)));
	}
	setTimeout( function() { 
		auto(7);
		if ( arrNum[7] === 9 ) auto(6);
		if ( arrNum[6] === 5 && arrNum[7] === 9 ) auto(4);
		if ( arrNum[4] === 9 && arrNum[6] === 5 && arrNum[7] === 9 ) auto(3);
		if ( arrNum[3] === 5 && arrNum[4] === 9 && arrNum[6] === 5 && arrNum[7] === 9) auto(1);
		if ( arrNum[1] === 9 && arrNum[3] === 5 && arrNum[4] === 9 && arrNum[6] === 5 && arrNum[7] === 9) auto(0);
		diTa(5);
		diTa(2);
	}, 500 )
}, 1000 );

var oNavDiv = document.getElementById('navbar');
var oNavLi = oNavDiv.getElementsByTagName('li');
var oSumList = document.getElementById('sumList');
var arrA = oSumList.getElementsByTagName('a');

for ( var i = 0; i < oNavLi.length; i++ ) {
	oNavLi[i].index = i;
	oNavLi[i].onmouseover = function () {
		oNavLi[this.index].status = oNavLi[this.index].className;
		oNavLi[this.index].className = 'action';
	}
	oNavLi[i].onmouseout = function () {
		oNavLi[this.index].className = oNavLi[this.index].status;
	}
	oNavLi[i].onclick = function () {
		stipClick(this.index);
		oNavLi[this.index].className = 'action';
		oNavLi[this.index].status = oNavLi[this.index].className;
	}
}

function stipClick(n) {
	var arr = [oSumList, oShowbox, oSelfList];
	for ( var i = 0; i < oNavLi.length; i++ ) {
		oNavLi[i].className = '';
	}
	for ( var i = 0; i < arr.length; i++ ) {
		arr[i].style.display = 'none';
	}
	arr[n].style.display = 'block'
}

for ( var i = 0; i < arrA.length; i++ ) {
	arrStr = ['landscape', 'beach', 'road'];
	arrA[i].index = i;
	arrA[i].onclick = function () {
		stipClick(1);
		oNavLi[1].className = 'action';
		arrURL = jsonURL[arrStr[this.index]];
		arrMiniURL = jsonMiniURL[arrStr[this.index]];
		picTab();
		return false;
	};
}

var oShowbox = document.getElementById('showbox');
var oShowDiv = oShowbox.getElementsByTagName('div')[0];
var oShowImg = oShowDiv.getElementsByTagName('img')[0];
var oShowUl = oShowDiv.getElementsByTagName('ul')[0];
var aShowLi = oShowDiv.getElementsByTagName('li');
var aShowDiv = oShowDiv.getElementsByTagName('div');
var aShowI = oShowDiv.getElementsByTagName('i');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var attr = '';
var miniURL = '';
var that = '';

var jsonURL = {"landscape": ['images/landscape/landscape_1.png', 'images/landscape/landscape_2.png', 'images/landscape/landscape_3.png', 'images/landscape/landscape_4.png', 'images/landscape/landscape_5.png', 'images/landscape/landscape_6.png'], "beach": ['images/beach/beach_1.png', 'images/beach/beach_2.png', 'images/beach/beach_3.png', 'images/beach/beach_4.png', 'images/beach/beach_5.png', 'images/beach/beach_6.png'], "road": ['images/road/road_1.png', 'images/road/road_2.png', 'images/road/road_3.png', 'images/road/road_4.png', 'images/road/road_5.png', 'images/road/road_6.png']};
var jsonMiniURL = {"landscape": ['images/landscape/landscape_mini_1.png', 'images/landscape/landscape_mini_2.png', 'images/landscape/landscape_mini_3.png', 'images/landscape/landscape_mini_4.png', 'images/landscape/landscape_mini_5.png', 'images/landscape/landscape_mini_6.png'], "beach": ['images/beach/beach_mini_1.png', 'images/beach/beach_mini_2.png', 'images/beach/beach_mini_3.png', 'images/beach/beach_mini_4.png', 'images/beach/beach_mini_5.png', 'images/beach/beach_mini_6.png'], "road": ['images/road/road_mini_1.png', 'images/road/road_mini_2.png', 'images/road/road_mini_3.png', 'images/road/road_mini_4.png', 'images/road/road_mini_5.png', 'images/road/road_mini_6.png']};

var arrURL = jsonURL.landscape;
var arrMiniURL = jsonMiniURL.landscape;

function picTab() {
	oShowUl.innerHTML = '';
	var str = '';
	for ( var i = 0; i < arrURL.length; i++ ) {
		str += '<li><div class="mini_pic"><i></i></div></li>';
	}
	oShowUl.innerHTML = str;
		
	oShowUl.style.left = Math.floor((500 - 25*aShowLi.length)/2) + 'px';
	oShowUl.style.width = Math.floor(25*aShowLi.length) + 'px';
	
	function fn( num ) {
		oShowImg.src = arrURL[num];
		aShowLi[num].className = 'active';
		that = aShowLi[num];
	}
	oShowImg.num=0
	fn(oShowImg.num);
	
	for ( var j = 0; j <aShowLi.length; j++ ) {
		aShowLi[j].index = j;
		aShowLi[j].onmouseover = function () {
			aShowDiv[this.index].style.display = 'block';
			aShowI[this.index].style.backgroundImage = 'url('+ arrMiniURL[this.index] +')';
			
		};
		aShowLi[j].onmouseout = function () {
			aShowDiv[this.index].style.display = 'none';
		};
		aShowLi[j].onclick = function () {
			that.className = '';
			oShowImg.num = this.index;
			fn(oShowImg.num);
		};
	}
	
	
	prev.onclick = function() {
		that.className = '';
		oShowImg.num--;
		if ( oShowImg.num == -1 ) {
			oShowImg.num = arrURL.length - 1;
		}
		fn(oShowImg.num);
	};
	
	next.onclick = function () {
		that.className = '';
		oShowImg.num++;
		oShowImg.num %= arrURL.length;
		fn(oShowImg.num);
	};
}
picTab();

var oSelfList = document.getElementById('selfList');
var oSelfUl = oSelfList.getElementsByTagName('ul')[0];
var aSelfLi = oSelfUl.getElementsByTagName('li');
var aSelfBtn = oSelfList.getElementsByTagName('input');

for ( var attr in jsonMiniURL ) {
	for ( var i = 0; i < jsonMiniURL[attr].length; i++ ) {
		var oLi = document.createElement('li');
		oLi.url = jsonURL[attr][i];
		oLi.miniUrl = jsonMiniURL[attr][i];
		oSelfUl.appendChild(oLi);
		var oImg = document.createElement('img');
		oImg.src = jsonMiniURL[attr][i];
		oLi.appendChild(oImg);
	} 
}

for ( var i = 0; i < aSelfLi.length; i++ ) {
	
	aSelfLi[i].index = i;
	aSelfLi[i].onclick = function () {
		if ( aSelfLi[this.index].className == '' ) {
			aSelfLi[this.index].className = 'select';
		} else {
			aSelfLi[this.index].className = '';
		}
	}
}

aSelfBtn[0].onclick = function () {
	for ( var i = 0; i < aSelfLi.length; i++ ) {
		aSelfLi[i].className = 'select';
	}
}

aSelfBtn[1].onclick = function () {
	for ( var i = 0; i < aSelfLi.length; i++ ) {
		if ( aSelfLi[i].className == '' ) {
			aSelfLi[i].className = 'select';
		} else {
			aSelfLi[i].className = '';
		}
	}
}

aSelfBtn[2].onclick = function () {
	arrURL = [];
	arrMiniURL = [];
	for ( var i = 0; i < aSelfLi.length; i++ ) {
		if ( aSelfLi[i].className == 'select' ) {
			arrURL.push(aSelfLi[i].url);
			arrMiniURL.push(aSelfLi[i].miniUrl);
		}
	}
	if ( arrURL.length == 0 ) {
		arrURL = jsonURL.landscape;
		arrMiniURL = jsonMiniURL.landscape;
	}
	stipClick(1);
	oNavLi[1].className = 'action';
	picTab();
}

aSelfBtn[3].onclick = function () {
	for ( var i = 0; i < aSelfLi.length; i++ ) {
		aSelfLi[i].className = '';
	}
	arrURL = jsonURL.landscape;
	arrMiniURL = jsonMiniURL.landscape;
}

