function login(event){

event.preventDefault()

let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!email || !password){
    alert("email and Password must be filled in")
    return
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cari user
let user = akun.find(u =>
    u.email === email && u.password === password
)

if(!user){
    alert("Incorrect email or Password")
    return
}

// simpan session login
localStorage.setItem("userLogin", JSON.stringify(user))

alert("Login successful")

//pindahin ke halaman dashboard user
window.location.href = "user.html"
}