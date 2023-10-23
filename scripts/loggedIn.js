token =  sessionStorage.getItem("token");
if(!token) {
    document.getElementById("connectedUser").innerHTML = "Vous n'êtes pas connecté";
} else {
    window.location = 'loggedIn.html';
}