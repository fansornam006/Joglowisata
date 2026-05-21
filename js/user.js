let user = JSON.parse(localStorage.getItem("userlogin"))

if(user){
    alert("Silahkan Login terlebih dahulu")
    window.location.href="login.html"
}

document.getElementById("welcome").innerHTML=
"selamat datang, " + user.nama