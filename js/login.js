const el = document.getElementById('login');
if (el) {
    el.addEventListener('submit', async function sendLoginInfos(e) {
        e.preventDefault();
    
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
    
        if(!username || !password) {
            alert ("merci de renseigner l'identifiant et le mot de passe");
        }
        else {
            try {
                let response = await fetch(`${urlApi}/users/login`, {
                        method: 'POST',
                        body: JSON.stringify({
                            username,
                            password
                        }),
                        headers: { 'Content-Type': 'application/json' }
                })
                response = await response.json()
                localStorage.setItem("token", response.token);
                alert ("Vous êtes connecté !");
            } catch (error) {
                alert ("connexion impossible");
            }
        }
    });
} else {
    console.log("no el")
}
