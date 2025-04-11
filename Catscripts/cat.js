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
