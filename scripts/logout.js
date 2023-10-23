document.getElementById('logout').addEventListener('click', async function logout(e) {
    e.preventDefault();
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    window.location = 'index.html';
}) 