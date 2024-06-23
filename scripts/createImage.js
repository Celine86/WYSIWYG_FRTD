document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('image', document.getElementById('image').files[0]);
    formData.append('title', document.getElementById('title').value);

    try {
        let response = await fetch(`${urlApi}/images/create`, {
            method: 'POST',
            body: formData,
            headers: { 
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data'
        }
        }) 
        if(response.status === 200) { 
            console.log(response)
        } else { 
            console.log("NOK");
        }
    } catch (error) {
        console.log(error);
    }
});
