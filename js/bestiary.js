const grid = document.getElementById("bestiary-grid");
const searchInput = document.getElementById("search-input");
const typeSelect = document.getElementById("type-filter");
const traditionSelect = document.getElementById("tradition-filter");
const favoritesButton = document.getElementById("favorites-toggle");
const modal = new bootstrap.Modal(document.getElementById("creature-modal"));

let favorites = [];
let onlyFavorites = false;

traditions.forEach(function (tradition) {
  const option = document.createElement("option");
  option.value = tradition.name;
  option.textContent = tradition.name;
  traditionSelect.appendChild(option);
});

function filterCreatures(list, searchText, type, tradition, onlyFavs, favoriteIds) {
  const search = searchText.trim().toLowerCase();
  return list.filter(function (creature) {
    const text = (creature.name + " " + creature.origin + " " + creature.description).toLowerCase();
    const matchesSearch = text.includes(search);
    const matchesType = type === "all" || creature.tag === type;
    const matchesTradition = tradition === "all" || creature.tradition === tradition;
    const matchesFavorite = !onlyFavs || favoriteIds.includes(creature.id);
    return matchesSearch && matchesType && matchesTradition && matchesFavorite;
  });
}

function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index === -1) { 
    favorites.push(id); 
  } else { 
    favorites.splice(index, 1); 
  }
}

function openModal(id) {
  const creature = creatures.find(function (item) { return item.id === id; });
  document.getElementById("modal-img").src = creature.image;
  document.getElementById("modal-title").textContent = creature.name;
  document.getElementById("modal-origin").textContent = creature.origin;
  document.getElementById("modal-text").textContent = creature.description;
  document.getElementById("modal-tradition").textContent = creature.tradition;
  document.getElementById("modal-tag").textContent = creature.tag;
  modal.show();
}

favoritesButton.addEventListener("click", function () {
  onlyFavorites = !onlyFavorites;
  favoritesButton.classList.toggle("active");
  updatePage();
});