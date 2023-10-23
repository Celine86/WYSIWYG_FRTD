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
                        headers: { 
                            'Content-Type': 'application/json',
                        }
                }) 
                if(response.status === 200) { 
                    response = await response.json()
                    sessionStorage.setItem("token", response.token)
                    sessionStorage.setItem("username", response.username)
                    window.location = 'editor.html';
                } else { 
                    alert ("Mot de passe ou Identifiant incorrect");
                }
            } catch (error) {
                alert ("Oups !");
            }
        }
    });
} else {
    console.log("no el")
}
