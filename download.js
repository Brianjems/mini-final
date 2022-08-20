$(document).ready(function(){
    checkLogin();
    function checkLogin(){
        var UserLogin =localStorage.getItem('UserLogin');
        if(UserLogin != null){
            document.getElementById('btnDownload').style.display = "block";
            document.getElementById('btnDownloadApp').style.display = "block";
            windows.location.reload()
            
        }
        else{
            document.getElementById('btnDownload').style.display = "none";
            document.getElementById('btnDownloadApp').style.display = "none";
            windows.location.reload()
           
        }
    }
});