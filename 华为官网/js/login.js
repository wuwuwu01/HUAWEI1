window.onload=function(){
    var account=document.getElementById("account-input");
    var password=document.getElementById("password-input");
    var erracc=document.getElementsByClassName("account-error")[0];
    var errpass=document.getElementsByClassName("password-error")[0];
    var testaccount=document.getElementsByClassName("testaccount")[0];
    var eamilReg=/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
    account.addEventListener("blur",function(){
        if(this.value==""){
            erracc.style.display="block";
            this.style.border="1px solid #FF6560";
        }else if(!eamilReg.test(account.value)){
            testaccount.style.display="block";
            account.style.border="1px solid #FF6560";
        }
        if((this.value=="")&&(!eamilReg.test(account.value))){
            erracc.style.display="block";
            testaccount.style.display="none";
        }
    });
    var timer1=setInterval(function(){
        if(account.value!=""){
            erracc.style.display="none";
        }
        if(eamilReg.test(account.value)){
            testaccount.style.display="none";
            account.style.border="1px solid #00B5EB";
        }
    },10);
    password.addEventListener("blur",function(){
        if(this.value==""){
            errpass.style.display="block";
            this.style.border="1px solid #FF6560";
        }
    });
    var timer2=setInterval(function(){
        if(password.value!=""){
            errpass.style.display="none";
            password.style.border="1px solid #00B5EB";
        }
    },10);
};