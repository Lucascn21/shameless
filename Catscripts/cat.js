const cat = document.getElementById("cat");
const itemsContainer = document.getElementById("items");

const things = ["🧶", "🐟", "🎁", "🐁", "🍣", "💥", "🌈", "🔥", "💎"];

let pos = 50;

cat.addEventListener("click", () => {
  pos = Math.floor(Math.random() * 300) + 50;
  cat.style.left = `${pos}px`;
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`;

  // Crear un "objeto traído"
  const item = document.createElement("div");
  item.className = "item loco";
  item.textContent = things[Math.floor(Math.random() * things.length)];
  item.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
  itemsContainer.appendChild(item);

  // Quitarlo después de unos segundos
  setTimeout(() => {
    item.remove();
  }, 3000);
});

// Agrega acciones aleatorias cada cierto tiempo
setInterval(() => {
  // Mover al gato a una posición aleatoria
  pos = Math.floor(Math.random() * 300) + 50;
  cat.style.left = `${pos}px`;
  cat.style.top = `${Math.floor(Math.random() * 300) + 50}px`;
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`;

  // Crear un objeto aleatorio sin necesidad de click
  const item = document.createElement("div");
  item.className = "item loco";
  item.textContent = things[Math.floor(Math.random() * things.length)];
  item.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.3 + Math.random()})`;
  itemsContainer.appendChild(item);

  setTimeout(() => {
    backgroundSound.play();
    item.remove();
  }, 2000);
}, 2000);

// Sonido de fondo (ajusta la ruta de tu archivo)
const backgroundSound = new Audio("../Catcosas/sonido.mp3");
backgroundSound.loop = true;
backgroundSound.play();

// Crear y posicionar 5 gatos adicionales
for (let i = 0; i < 50; i++) {
  spawnCat();
}

function spawnCat() {
  const extraCat = document.createElement("div");
  extraCat.className = "cat loco";
  extraCat.style.position = "absolute";
  extraCat.style.left = `${Math.floor(Math.random() * 600)}px`;
  extraCat.style.top = `${Math.floor(Math.random() * 400)}px`;

  extraCat.addEventListener("click", () => {
    spawnCat();
    backgroundSound.play();
  });

  document.body.appendChild(extraCat);
}
