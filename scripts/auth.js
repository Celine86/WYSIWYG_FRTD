token =  sessionStorage.getItem("token");
if(!token) {
    window.location = 'index.html';
} else {
    let username =  sessionStorage.getItem("username");
    document.getElementById("connectedUser").innerHTML = "Bienvenue " + username;
    document.getElementById("logout").innerHTML = "<button class='btn' id='logout'>LOGOUT</button>";
}