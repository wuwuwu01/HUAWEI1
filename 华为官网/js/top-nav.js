window.onload = function () {
    var pull = document.getElementsByClassName("pull");
    var net = document.getElementsByClassName("net")[0];
    var region=document.getElementsByClassName("region")[0];
    let icon1=pull[1].getElementsByTagName("i")[1];
    var icon0=pull[0].getElementsByTagName("i")[1];
    pull[1].onclick=function(){
        //另外一个箭头向下
        icon0.classList.replace("fa-angle-up","fa-angle-down");
        //另外一个隐藏
        region.style.height="";
        //当前框是隐藏状态时
        if(net.style.height==""){
            net.style.height="180px";
            net.style.transition="height 0.5s";//设置其显示高度及转换时间
            this.classList.add("change");//为所点击的元素添加设置背景的类
            pull[0].classList.remove("change");//移除另外一个的背景类
            icon1.classList.replace("fa-angle-down","fa-angle-up");//将箭头朝下
        }else{
            net.style.height="";
            net.style.transition="height 0.5s";
            this.classList.remove("change");
            pull[0].classList.remove("change");
            icon1.classList.replace("fa-angle-up","fa-angle-down");
        }
    };
    pull[0].onclick=function(){
        icon1.classList.replace("fa-angle-up","fa-angle-down");
        net.style.height="";
        if(region.style.height==""){
            region.style.height="450px";
            region.style.transition="height 0.5s";
            this.classList.add("change");
            pull[1].classList.remove("change");
            icon0.classList.replace("fa-angle-down","fa-angle-up");
        }else{
            region.style.height="";
            region.style.transition="height 0.5s";
            this.classList.remove("change");
            pull[1].classList.remove("change");
            icon0.classList.replace("fa-angle-up","fa-angle-down");
        }
    };
    //设置个人及家庭产品鼠标移入移出效果
    var personal = document.getElementsByClassName("personal")[0];
    var closeper = document.getElementById("closeper");
    var product=document.getElementsByClassName("product")[0];
    product.onmouseover = function () {
        personal.style.height = "520px";
        personal.style.transition = "height 0.5s";
        this.style.borderBottom="1px solid red";
        closeper.onclick = function () {
            personal.style.height = "";
            personal.style.transition = "height 0.5s";
        };
    };
    product.onmouseout=function(){
        personal.style.height = "";
        personal.style.transition = "height 0.5s";
        this.style.borderBottom="";
    };
    //设置商用产品及方案鼠标移入移出效果
    var business=document.getElementsByClassName("business")[0];
    var closebus=document.getElementById("closebus");
    var scheme=document.getElementsByClassName("scheme")[0];
    scheme.onmouseover=function(){
        business.style.height="501px";
        business.style.transition = "height 0.5s";
        this.style.borderBottom="1px solid red";
        closebus.onclick=function(){
            business.style.height = "";
            business.style.transition = "height 0.5s";
        };
    };
    scheme.onmouseout=function(){
        business.style.height="";
        business.style.transition="height 0.5s";
        this.style.borderBottom="";
    };
    //设置服务支持鼠标移入移出效果
    var serve=document.getElementsByClassName("serve")[0];
    var support=document.getElementsByClassName("support")[0];
    var closeser=document.getElementById("close-ser");
    support.onmouseover=function(){
        serve.style.height="440px";
        serve.style.transition="height 0.5s";
        this.style.borderBottom="1px solid red";
        closeser.onclick=function(){
            serve.style.height="";
            serve.style.transition="height 0.5s";
        };
    };
    support.onmouseout=function(){
        serve.style.height="";
        serve.style.transition="height 0.5s";
        this.style.borderBottom="";
    };
    //设置合作伙伴与开发者鼠标移入移出效果
    var developer=document.getElementsByClassName("developer")[0];
    var partner=document.getElementsByClassName("partner")[0];
    var closepart=document.getElementById("close-part");
    developer.onmouseover=function(){
        partner.style.height="440px";
        partner.style.transition="height 0.5s";
        this.style.borderBottom="1px solid red";
        closepart.onclick=function(){
            partner.style.height="";
            partner.style.transition="height 0.5s";
        };
    };
    developer.onmouseout=function(){
        partner.style.height="";
        partner.style.transition="height 0.5s";
        this.style.borderBottom="";
    };
    //设置关于华为鼠标移入移出效果
    var huawei=document.getElementsByClassName("huawei")[0];
    var about=document.getElementsByClassName("about")[0];
    var closeabout=document.getElementById("close-about");
    huawei.onmouseover=function(){
        about.style.height="360px";
        about.style.transition="height 0.5s";
        this.style.borderBottom="1px solid red";
        closeabout.onclick=function(){
            about.style.height="";
            about.style.transition="height 0.5s";
        };
    };
    huawei.onmouseout=function(){
        about.style.height="";
        about.style.transition="height 0.5s";
        this.style.borderBottom="";
    };
    //设置在线购买鼠标移入移出效果
    var buy=document.getElementById("buy");
    var cart=document.getElementsByClassName("cart")[0];
    var updown=buy.getElementsByTagName("i")[1];
    buy.onmouseover=function(){
        cart.style.display="block";
        updown.classList.replace("fa-angle-down","fa-angle-up");
    };
    buy.onmouseout=function(){
        cart.style.display="none";
        updown.classList.replace("fa-angle-up","fa-angle-down");
    };
    //设置弹出搜索框
    var center=document.getElementsByClassName("center")[0];
    var right=document.getElementsByClassName("right")[0];
    var find=right.getElementsByClassName("fa-search")[0];
    var search=document.getElementsByClassName("search")[0];
    var findover=document.getElementById("findover");
    find.onclick=function(){
        center.style.display="none";
        right.style.display="none";
        search.style.display="block";
    };
    findover.onclick=function(){
        center.style.display="block";
        right.style.display="block";
        search.style.display="none";
    };
    //设置热门搜索
    var inp=document.getElementById("inp");
    var hot=document.getElementsByClassName("hot")[0];
    //当输入框获取焦点时
    inp.addEventListener("focus",function(){
        hot.style.height="390px";
    });
    //当输入框失去焦点时
    inp.addEventListener("blur",function(){
        hot.style.height="";
    });
    //设置轮播图
    var slideshow=document.getElementsByClassName("slideshow")[0];
    var active=document.getElementsByClassName("active")[0];
    var line=active.getElementsByTagName("div");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var imgcon=document.getElementsByClassName("imgcon")[0];
    var showimg=slideshow.getElementsByTagName("img");
    var index=0;
    var timer=null;
    function autoplay(){
        for(var i=0;i<line.length;i++){
            line[i].className="";
        }
        if(imgcon.style.marginLeft=="200%"){
            imgcon.style.marginLeft="";
            imgcon.style.transition="";
        }else{
            var cur=parseInt(imgcon.style.marginLeft);
            imgcon.style.marginLeft=parseInt("0"+cur)+100+"%";
            imgcon.style.transition="margin-left 2s";
        }
        index++;
        index = index % showimg.length;
        line[index].className="buffer";
    }
    timer1 = setInterval(autoplay, 5000);
    slideshow.onmouseout = function () {
        prev.style.display="none";
        next.style.display="none";
        timer2 = setInterval(autoplay, 5000);
    };
    slideshow.onmouseover=function(){
        prev.style.display="block";
        next.style.display="block";
        clearInterval(timer1);
        clearInterval(timer2);
    };
    /* prev.onclick=function(){
        for(var i=0;i<line.length;i++){
            line[i].className="";
        }
        index--;
        if(index<0){
            index=(index+imgArr.length)%imgArr.length;
        }
        line[index].className="buffer";
    };
    next.onclick=function(){
        for(var i=0;i<line.length;i++){
            line[i].className="";
        }
        index++;
        index=index%imgArr.length;
        if(imgcon.style.marginLeft=="200%"){
            imgcon.style.marginLeft="";
            imgcon.style.transition="";
        }else{
            var cur=parseInt(imgcon.style.marginLeft);
            imgcon.style.marginLeft=parseInt("0"+cur)+100+"%";
            imgcon.style.transition="margin-left 2s";
        }
        line[index].className="buffer";
    }; */
    /* for(var i=0;i<line.length;i++){
        (function(arr){
            line[arr].onclick=function(){
                showimg.src = imgArr[arr];
                for(var i=0;i<line.length;i++){
                    line[i].className="";
                }
                line[arr].className="buffer";
            };
        })(i);
    } */
    //设置新闻滚动条
    var news=document.getElementsByClassName("news3")[0];
    var tip=news.getElementsByClassName("tip3")[0];
    var fog=news.getElementsByClassName("fog")[0];
    news.onscroll=function(){
        if(news.scrollTop==""){
            fog.style.display="block";
            tip.style.top="";
        }else{
            fog.style.display="none";
            tip.style.top=this.scrollTop+"px";
        }
    };
    //设置下方搜索按钮
    var mine=document.getElementsByClassName("mine")[0];
    var look=document.getElementById("search-link");
    var seainp=mine.getElementsByClassName("search")[0];
    var cloinp=seainp.getElementsByClassName("fa-times")[0];
    var inpready=seainp.getElementsByTagName("input")[0];
    var advice=seainp.getElementsByClassName("hot")[0];
    look.onclick=function(){
        this.style.display="none";
        seainp.style.display="block";
    };
    cloinp.onclick=function(){
        seainp.style.display="none";
        look.style.display="block";
    };
    inpready.addEventListener("focus",function(){
        advice.style.height="390px";
    });
    inpready.addEventListener("blur",function(){
        advice.style.height="";
    });
    //设置回到顶部按钮
    var totop=document.getElementsByClassName("to-top")[0];
    var istop=true;
    var timer=null;
    window.onscroll=function(){
        if(window.scrollY>=700){
            totop.style.display="block";
        }else{
            totop.style.display="none";
        }
    };
    totop.onclick=function(){
        timer=setInterval(function(){
            var len=window.scrollY;
            var speed=Math.floor(len/10);
            var y=len-speed;
            if(y<0){
                y=0;
            }
            window.scrollTo(0,y);
            if(window.scrollY==0){
                clearInterval(timer);
                istop=true;
            }
        },20);
    };
};