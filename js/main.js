function createCard(creature, showButtons, isFavorite) {
  let buttons = "";
  let readMore = "";
  if (showButtons) {


  const card = document.createElement("article");
  card.className = "entry-card";
  card.innerHTML = `
    <img src="${creature.image}" alt="Illustration of ${creature.name}">
    <span class="entry-tag">${creature.tag}</span>
    ${buttons}
    <div class="entry-body">
      <span class="entry-origin">${creature.origin}</span>
      <h3>${creature.name}</h3>
      <p>${creature.description}</p>
      ${readMore}
    </div>`;
  return card;
}

function showCards(container, list, showButtons, favorites) {
  container.innerHTML = "";
  list.forEach(function (creature) {
    const isFavorite = favorites.includes(creature.id);
    container.appendChild(createCard(creature, showButtons, isFavorite));
  });
}

const featuredGrid = document.getElementById("featured-grid");
if (featuredGrid) {
  const featured = creatures.filter(function (creature) {
    return creature.featured;
  });
  showCards(featuredGrid, featured, false, []);
  document.getElementById("creature-count").textContent = creatures.length;
}
const rows = document.querySelectorAll(".tradition-row");
for (let i = 0; i < rows.length; i++) {
  const details = document.createElement("p");
  details.className = "tradition-details";
  details.textContent = traditions[i].details;
  rows[i].querySelector(".tradition-main").appendChild(details);
}}