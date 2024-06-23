function deleteDraft() {
    localStorage.removeItem('title');
    localStorage.removeItem('content');
    document.getElementById("title").innerHTML = "";
    document.getElementById("content").innerHTML = "";
}