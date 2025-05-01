fetch('./declarations.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('declaration-list');
    data.forEach(declaration => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = declaration.title;
      link.href = `declaration.html?id=${declaration.id}`;
      item.appendChild(link);
      list.appendChild(item);
    });
  });
