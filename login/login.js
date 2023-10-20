const signin = () => {
    if (
        document.getElementById("email-login").value === "" || document.getElementById("password-login").value === ""
    ){
        alert("Enter your credentials")
    }else{
        let username2 = document.getElementById("email-login").value
        let password2 = document.getElementById("password-login").value
        if (username2 == localStorage.getItem("name") && password2 == localStorage.getItem("pass")){
            alert("Signed In")
            window.location.href="/"
        }else{
            alert("Credentials doesn't match")
        }
        document.getElementById("email-login").value = ""
        document.getElementById("password-login").value = ""
    }
}
