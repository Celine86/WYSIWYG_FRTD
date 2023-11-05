const title = document.getElementById('title');
const content = document.getElementById('content');
const saveButton = document.getElementById('sendPost');

let savedTitle = localStorage.getItem('title');
let savedContent = localStorage.getItem('content');
if (savedTitle) {
  title.innerHTML = savedTitle;
}
if (savedContent) {
    content.innerHTML = savedContent;
}

function save() {
    localStorage.setItem('title', title.innerHTML);
    localStorage.setItem('content', content.innerHTML);
}

saveButton.addEventListener('submit', save);