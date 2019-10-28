var changed_color="rgb(255, 255, 255)";
//抓取头部的导航栏
var header=document.getElementsByName("a")[0];
console.log(header);
var adiv=document.getElementsByClassName("nav")

 window.onscroll = function() {     
    if(window.scrollY==0){
     //设置文档的背景颜色：
     document.getElementsByName("a")[0].style.backgroundColor="transparent";
     for (var i = 0; i < adiv.length; i++) {
        adiv[i].style.color="#FFFFFF";
     }
    }
    else{
     //设置文档的背景颜色：
     document.getElementsByName("a")[0].style.backgroundColor=changed_color
     for (var i = 0; i < adiv.length; i++) {
         adiv[i].style.color="#333";
      }
    }
}
