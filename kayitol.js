function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="kullanıcı adı giriniz*"
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="en az 6 harf!"
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="e-posta giriniz*"
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="şifre giriniz*"
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="şifre en az 6 haneden oluşmalıdır*"
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="şifreyi yeniden giriniz*"
        return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="şifreler eşleşmiyor*"
        return false;
    }
    else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
  

}
var popup=document.getElementById('popup');
function closeSlide(){
    popup.classList.remove("open-slide")
}