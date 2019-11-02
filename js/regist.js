/* function fnRegist() {
    var oPass = document.getElementById("upass").value;
    var oPass1 = document.getElementById("upass1").value;
    if (oPass != oPass1) {
        document.getElementById("error_box").innerHTML = "两次密码输入不一致"
    }
}
 */
function validate(){
    var upass=document.getElementById("upass").value;
    var upass1=document.getElementById("upass1").value;
    if(upass==upass1){
        document.getElementById("tishi").innerHTML="<font color='green'>两次密码相同</font>";
        document.getElementById("submit").disabled=false;
    }
   else{
    document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
    document.getElementById("submit").disabled = true;
   }

}

