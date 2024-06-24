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
            for (let img in allImgs){
                img = allImgs[img]
                const templateImgs = document.getElementById('templateImgs')
                const seeImg = document.importNode(templateImgs.content, true)
                seeImg.getElementById('imgTitle').textContent = img.imageTitle
                seeImg.getElementById('imgUrl').src = img.imageUrl
                seeImg.getElementById('imgLink').href = `myimage.html?id=${img.id}`
                document.getElementById('allImgs').appendChild(seeImg)  
            }
        } else {
            console.log(response)
        }
    } catch (error) {
        console.log(error)
    }
}
showImages();