const cat = document.getElementById("cat");
const itemsContainer = document.getElementById("items");

const things = ["🧶", "🐟", "🎁", "🐁", "🍣", "💥", "🌈", "🔥", "💎"];
let pos = 50;

// Cargar sonido
const meowSound = new Audio("fuera-bicho.mp3");

// Función para reproducir el sonido
function playSound() {
  meowSound.currentTime = 0;
  meowSound.play().catch((e) => {
    console.warn("Interacción requerida para reproducir audio:", e);
  });
}

cat.addEventListener("click", () => {
  pos = Math.floor(Math.random() * 300) + 50;
  cat.style.left = `${pos}px`;
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;
  cat.style.zIndex = 1000;
  cat.style.transition = "transform 0.5s ease-in-out, left 0.5s ease-in-out";

  // Reproducir sonido
  playSound();

  // Crear un "objeto traído"
  const item = document.createElement("div");
  item.className = "item loco";
  item.textContent = things[Math.floor(Math.random() * things.length)];
  item.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random()
  })`;
  itemsContainer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 3000);
});

// Acciones aleatorias cada cierto tiempo
setInterval(() => {
  pos = Math.floor(Math.random() * 300) + 50;
  cat.style.left = `${pos}px`;
  cat.style.top = `${Math.floor(Math.random() * 300) + 50}px`;
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;

  const item = document.createElement("div");
  item.className = "item loco";
  item.textContent = things[Math.floor(Math.random() * things.length)];
  item.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.3 + Math.random()
  })`;
  itemsContainer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 2000);
}, 2000);

// Crear y posicionar más gatos
for (let i = 0; i < 100; i++) {
  spawnCat();
}

function spawnCat() {
  const extraCat = document.createElement("div");
  extraCat.className = "cat loco";
  extraCat.style.position = "absolute";
  extraCat.style.left = `${Math.floor(Math.random() * 800)}px`;
  extraCat.style.top = `${Math.floor(Math.random() * 600)}px`;
  extraCat.style.width = `${Math.floor(Math.random() * 500) + 10}px`;
  extraCat.style.height = `${Math.floor(Math.random() * 500) + 10}px`;

  extraCat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;
  extraCat.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 360
  )}, 80%, 60%)`;

  extraCat.addEventListener("click", () => {
    playSound();
    spawnCat();
  });

  document.body.appendChild(extraCat);
}

function moveAllDivsRandomly() {
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach((elem) => {
    elem.style.position = "absolute";
    elem.style.left = `${Math.floor(Math.random() * 800)}px`;
    elem.style.top = `${Math.floor(Math.random() * 600)}px`;
    elem.style.transform = `rotate(${Math.random() * 360}deg) scale(${
      0.5 + Math.random() * 1.5
    })`;
  });
}

setInterval(moveAllDivsRandomly, 200);