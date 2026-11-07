const grid = document.getElementById("bestiary-grid");
const searchInput = document.getElementById("search-input");
const typeSelect = document.getElementById("type-filter");
const traditionSelect = document.getElementById("tradition-filter");
const favoritesButton = document.getElementById("favorites-toggle");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");
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

function updatePage() {
  const result = filterCreatures(creatures, searchInput.value, typeSelect.value,
    traditionSelect.value, onlyFavorites, favorites);
  showCards(grid, result, true, favorites);

  resultCount.textContent = "Showing " + result.length + " of " + creatures.length + " creatures";
  favoritesButton.textContent = "Favorites (" + favorites.length + ")";
  if (result.length === 0) {
    emptyMessage.classList.remove("d-none");
  } else {
    emptyMessage.classList.add("d-none");
  }

  document.querySelectorAll(".fav-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      toggleFavorite(Number(button.dataset.id));
      updatePage();
    });
  });
  document.querySelectorAll(".details-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(Number(button.dataset.id));
    });
  });
}

searchInput.addEventListener("input", updatePage);
typeSelect.addEventListener("change", updatePage);
traditionSelect.addEventListener("change", updatePage);
favoritesButton.addEventListener("click", function () {
  onlyFavorites = !onlyFavorites;
  favoritesButton.classList.toggle("active");
  updatePage();
});

updatePage();