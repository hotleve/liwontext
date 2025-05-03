const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

fetch('declarations.json')
  .then(res => res.json())
  .then(data => {
    const declaration = data[id-1];
    if (!declaration) return;

    document.getElementById('title').textContent = declaration.title;
    document.getElementById('name').textContent = declaration.name;
    document.getElementById('content').textContent = declaration.content;

    document.getElementById('prevBtn').onclick = () => {
      if (id > 0) window.location.href = `declaration.html?id=${id - 1}`;
    };
    document.getElementById('nextBtn').onclick = () => {
      if (id < data.length - 1) window.location.href = `declaration.html?id=${id + 1}`;
    };
  });

function goBack() {
  window.location.href = 'index.html';
}
