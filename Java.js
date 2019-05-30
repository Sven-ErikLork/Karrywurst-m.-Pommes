function validation(){
    var navn = document.login.navn.value;
    var email = document.login.email.value;
    //check empty field
    if(navn=="" || email==""){
        alert("Du mangler Navn og/eller Email");
        return;
    }
}