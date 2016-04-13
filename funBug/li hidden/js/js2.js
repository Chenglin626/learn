var oBody_signIn = document.getElementById('body_signIn');

oBody_signIn.onmouseover = function () {
	this.style.color = '#ff0';
	this.style.backgroundColor = '#00f';
};
oBody_signIn.onmouseout = function () {
	this.style.color = '#000';
	this.style.backgroundColor = '';
};
oBody_signIn.onclick = function () {
	var oFilter = document.createElement('div');
	oFilter.id = 'filter';
	document.body.appendChild(oFilter);
	var oSignIn = document.createElement('div');
	oSignIn.id = 'signIn';
	var str = '<table><tr><td>昵称：</td><td><input type="text"name="username"placeholder="请输入昵称"class="user"/><br/><span></span></td></tr><tr><td>密码：</td><td><input type="password"name="userpassword"placeholder="请输入密码"class="user"/><br/><span></span></td></tr><tr><td></td><td><input type="button"value="确定"/>\n<input type="button"value="退出"/><span></span></td></tr></table>';
	oSignIn.innerHTML = str;
	document.body.appendChild(oSignIn);
	signIn();
}


function signIn() {
	var oFilter = document.getElementById('filter');
	var oSignIn = document.getElementById('signIn');
	var aSignIn_inp = oSignIn.getElementsByTagName('input');
	var aSignIn_span = oSignIn.getElementsByTagName('span');
	
	var regSignIn = /^[0-9a-z]{6,12}$/ig;
	
	aSignIn_inp[0].onfocus = function () {
		this.style.background = 'yellow';
		this.placeholder = ''
		aSignIn_span[0].innerHTML = '昵称由6-12位数字或字母组成';
		aSignIn_span[0].style.color = 'orange';
	};
	aSignIn_inp[0].onblur = function () {
		this.style.background = 'none';
		var str = aSignIn_inp[0].value;
		if ( str == '' ) {
			this.placeholder = '请输入昵称';
			aSignIn_span[0].innerHTML = '请输入昵称';
			aSignIn_span[0].style.color = 'red';
		} else if ( !regSignIn.test(str) ) {
			aSignIn_span[0].innerHTML = '昵称由6-12位数字或字母组成';
			aSignIn_span[0].style.color = 'red';
		} else {
			aSignIn_span[0].innerHTML = '昵称可以使用';
			aSignIn_span[0].style.color = 'green';
		}
		regSignIn.test(str);
	};
	aSignIn_inp[1].onfocus = function () {
		this.style.background = 'yellow';
		this.placeholder = ''
		aSignIn_span[1].innerHTML = '密码长为6-18位';
		aSignIn_span[1].style.color = 'orange';
	}
	aSignIn_inp[1].onblur = function () {
		this.style.background = 'none';
		if ( this.value == '' ) {
			this.placeholder = '请输入密码';
			aSignIn_span[1].innerHTML = '请输入密码';
			aSignIn_span[1].style.color = 'red';
		} else if ( this.value.length < 6 && this.value.length != 0 || this.value.length > 18 ) {
			aSignIn_span[1].innerHTML = '密码长为6-18位';
			aSignIn_span[1].style.color = 'red';
		} else {
			aSignIn_span[1].innerHTML = '密码可以使用';
			aSignIn_span[1].style.color = 'green';
		}
	};
	aSignIn_inp[2].onclick = function () {
		if ( !regSignIn.test( aSignIn_inp[0].value ) ) {
			aSignIn_span[2].innerHTML = '昵称不通过';
		} else if ( aSignIn_inp[1].value.length <6 || this.value.length > 18 ) {
			aSignIn_span[2].innerHTML = '密码不通过';
		} else {
			aSignIn_span[2].innerHTML = '系统维护升级中，请稍后再试';
		}
		aSignIn_span[2].style.color = 'red';
		regSignIn.test( aSignIn_inp[0].value );
	};
	aSignIn_inp[3].onclick = function () {
		document.body.removeChild(oFilter);
		document.body.removeChild(oSignIn);
	}
}
