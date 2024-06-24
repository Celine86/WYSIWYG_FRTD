document.getElementById('sendPost').addEventListener('submit', async function sendPostInfos(e) {
        e.preventDefault();

        let title = document.getElementById('title').innerHTML;
        let content = document.getElementById('content').innerHTML;

        if(!title || !content) {
            alert ("merci de renseigner le titre et le contenu de l'article");
        }
        else {
            try {
                let response = await fetch(`${urlApi}/posts/create`, {
                        method: 'POST',
                        body: JSON.stringify({
                            title,
                            content
                        }),
                        headers: { 
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + sessionStorage.getItem("token")
                    }
                }) 
                if(response.status === 200) { 
                    response = await response.json();
                    document.location.reload();
                } else { 
                    alert ("L'article n'a pas pu être posté");
                    console.log(response)
                }
            } catch (error) {
                console.log(error)
            }
        }
}) 