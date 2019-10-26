var changed_color="#000000";
var header=document.getElementsByName("a")[0];
console.log(header)
//屏幕高度
let screen_h = window.innerHeight
 //页面内容高度
 let body_h =  document.body.scrollHeight || document.documentElement.scrollHeight
 if(body_h>screen_h){
     //设置文档的背景颜色：
     document.getElementsByName("a")[0].style.backgroundColor=changed_color
    
 }else{
  console.log('未超出一屏，不滚动')
}