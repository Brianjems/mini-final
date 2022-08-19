$(document).ready(function(){
    checkLogin();

    function checkLogin(){

        var UserLogin =localStorage.getItem('UserLogin');
        var divLogin = $("#divLogin").attr("class");
     
       
        if(UserLogin != null){
            var UserInfo = JSON.parse(UserLogin);
            $('#displayUser').text("Welcome:"+UserInfo.FirstName);
            document.getElementById('btnsignup').style.display = "none";
            document.getElementById('btnlogin').style.display = "none";
            document.getElementById('btnlogout').style.display = "block";
            document.getElementById('btnDisplayUser').style.display = "block";
            if(divLogin.includes('active')){
                popupLogin();
            }
        }
        else{
            document.getElementById('btnsignup').style.display = "block";
            document.getElementById('btnlogin').style.display = "block";
            document.getElementById('btnlogout').style.display = "none";
            document.getElementById('btnDisplayUser').style.display = "none";
           
        }
    }

    function popupLogin(){
        let container = document.querySelector('.container');
        container.classList.toggle('active');
        let popup = document.querySelector('.login-form');
        popup.classList.toggle('active');
    }
    
   
   
    $('#btnlogout').on('click',function(e){
        swal("info", "Logged Out", "info");
        localStorage.removeItem('UserLogin');
        checkLogin();
    })
   

    $('#signupForm').on('submit',function(e){

        if($('#txtPassword').val() != $('#txtConfirmPassword').val()){
            swal("Error", "Password Does not Match", "error");
        }
        else{
            var Id = CreateGuid();
            var data = {
                Id:Id,
                FirstName:$('#txtFirstName').val(),
                LastName:$('#txtLastName').val(),
                Email:$('#txtEmailAddress').val(),
                Password:$('#txtPassword').val(),
               }

            var jsonStringData = JSON.stringify(data);
            localStorage.setItem(Id,jsonStringData);
            swal("Good job!", "You have successfully registered", "success");
        }
    });

    function CreateGuid() {
        function _p8(s) {
        var p = (Math. random(). toString(16)+"000000000"). substr(2,8);
        return s ? "-" + p. substr(0,4) + "-" + p. substr(4,4) : p ;
        }
        return _p8() + _p8(true) + _p8(true) + _p8();
    }

    $('#login').on('submit',function(){

        var allStorage = getAllStorage();

        var email = $('#txtLoginEmail').val();
        var password = $('#txtLoginPassword').val();
        
        let login = allStorage.filter(e=>e.Email ==email && e.Password == password);


        if(login.length >= 1){
            swal("Welcome", "You Are Logged In!", "success");
            localStorage.setItem('UserLogin',JSON.stringify(login[0]));
            $('#txtLoginEmail').val('');
            $('#txtLoginPassword').val('');
            checkLogin();
        }
        else{
            swal("Error", "Incorrect Username and Password", "error");
        }

    });

    function getAllStorage() {
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
    
        for (; key = keys[i]; i++) {
            archive.push(JSON.parse(localStorage.getItem(key)));
        }
        return archive;
    }

});