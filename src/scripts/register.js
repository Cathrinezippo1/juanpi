var strong=document.getElementsByClassName("strong");
var phone_ipt=document.getElementById("phone_ipt");
var tishi=document.getElementById("tishi");
var pwd_ipt=document.getElementById("pwd_ipt");
var ti=document.getElementById("ti");




phone_ipt.addEventListener("blur",confirm_phone);
var flag_phone=null;
function confirm_phone(){
	var phone_reg=/^1[34578]\d{9}$/;
	var phone_value=phone_ipt.value;
	if(phone_reg.test(phone_value)){
		tishi.className =tishi.className ;
		flag_phone=true;
	//	tishi.className =".tishi.active";
	}else{
	    tishi.className =".tishi.active";
	    flag_phone=false;
	}
}

pwd_ipt.addEventListener("blur",confirm_pwd);
var flag_pwd=null;
function confirm_pwd(){
	var pwd_reg=/^1[34578]\d{9}$/;
	var pwd_value=pwd_ipt.value;
	if(pwd_reg.test(pwd_value)){
		ti.className =ti.className ;
		flag_pwd=true;
	//	tishi.className =".tishi.active";
	}else{
	    ti.className =".tishi.active";
	    flag_pwd=false;
	}
}
 