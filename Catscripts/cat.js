const cat = document.getElementById("cat");
const itemsContainer = document.getElementById("items");

const things = ["🧶", "🐟", "🎁", "🐁", "🍣", "💥", "🌈", "🔥", "💎"];

let pos = 50;

cat.addEventListener("click", () => {
  pos = Math.floor(Math.random() * 300) + 50;
  cat.style.left = `${pos}px`;
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;

  // Crear un "objeto traído"
  const item = document.createElement("div");
  item.className = "item loco";
  item.textContent = things[Math.floor(Math.random() * things.length)];
  item.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random()
  })`;
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
  cat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;

  // Crear un objeto aleatorio sin necesidad de click
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

// Crear y posicionar muchos más gatos
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

  // Asignar color o transformación aleatoria
  extraCat.style.transform = `rotate(${Math.random() * 360}deg) scale(${
    0.5 + Math.random() * 1.5
  })`;
  extraCat.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 360
  )}, 80%, 60%)`;

  extraCat.addEventListener("click", () => {
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

// Mueve todos los divs cada 2 segundos
setInterval(moveAllDivsRandomly, 2000);
