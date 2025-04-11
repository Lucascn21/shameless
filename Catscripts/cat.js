const cat = document.getElementById('cat');
const itemsContainer = document.getElementById('items');

const things = [
  '🧶', '🐟', '🎁', '🐁', '🍣'
];

let pos = 50;

cat.addEventListener('click', () => {
  pos = pos === 50 ? 250 : 50;
  cat.style.left = `${pos}px`;

  // Crear un "objeto traído"
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = things[Math.floor(Math.random() * things.length)];
  itemsContainer.appendChild(item);

  // Quitarlo después de unos segundos
  setTimeout(() => {
    item.remove();
  }, 3000);
});
