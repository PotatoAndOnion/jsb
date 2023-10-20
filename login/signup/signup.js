const signup = () => {
    if (
        document.getElementById("email").value === "" || document.getElementById("password").value === "" || document.getElementById("passwordc").value === ""
    ){
        alert("Enter your credentials")
    }else{
        let username = document.getElementById("email").value
        let password = document.getElementById("password").value
        localStorage.setItem("name", username)
        localStorage.setItem("pass", password)
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        alert("Signed Up")
        console.log(username)
        console.log(password)
        window.location.href="/login/index.html"
    }
}