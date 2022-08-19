$(document).ready(function(){
    checkLogin();
    function checkLogin(){
        var UserLogin =localStorage.getItem('UserLogin');
        if(UserLogin != null){
            document.getElementById('btnDownload').style.display = "block";
        }
        else{
            document.getElementById('btnDownload').style.display = "none";
        }
    }
});