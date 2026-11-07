const grid = document.getElementById("bestiary-grid");
const searchInput = document.getElementById("search-input");
const typeSelect = document.getElementById("type-filter");
const traditionSelect = document.getElementById("tradition-filter");

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