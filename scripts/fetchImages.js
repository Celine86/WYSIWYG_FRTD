async function showImages() {
    try {
        const response  = await fetch(`${urlApi}/images/allimages`, {
            method: 'GET',
            headers: { 
            Authorization: "Bearer " + sessionStorage.getItem("token"),
            }
        })
        if(response.status === 200) { 
            const data = await response.json();
            const allImgs = data.allImages;
            console.log(allImgs);
            for (let img in allImgs){
                img = allImgs[img]
                console.log(img.id);
                console.log(img.imageUrl);
                console.log(img.imageTitle);   
            }
        } else { 
            alert ("Pas d'images");
        }
    } catch (error) {
        alert ("Oups Images !");
    }
}