function toggleMenu() {
  const menuBurger = document.getElementById("menu-burger");
  const menu = document.getElementById("menu");

  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
    menu.classList.add("hidden");

    setTimeout(function () {
      menu.style.display = "none";
    }, 500);
  } else {
    menu.style.display = "block";
    menu.classList.remove("hidden");
    menu.classList.add("visible");
  }

  menuBurger.classList.toggle("clicked");
}
const manhwasData = [
  {
    image:
      "https://i.pinimg.com/236x/41/b4/37/41b43772420af25271ebfee7082b3a5b.jpg",
    genre: [
      "manhwa",
      "anime",
      "populaire",
      "action",
      "action",
      "fantastique",
      "surnaturel",
    ],
    link: "solo-leveling.html",
    name: "Solo leveling",
    author: "Chu-Gong",
    statut: "Fini",
  },
  {
    image:
      "https://i.pinimg.com/236x/9a/ad/09/9aad098d0b41ed5bc4685c490235d888.jpg",
    genre: [
      "manhwa",
      "populaire",
      "action",
      "ecole",
      "fantaisie",
      "magie",
      "reincarnation",
      "surnaturel",
    ],
    link: "tbate.html",
    name: "The begening after the end",
    author: "TurtleMe",
    statut: "En cours",
  },
  {
    image:
      "https://i.pinimg.com/564x/42/ac/5f/42ac5fb0d62cf6ed02915c38d2bde20d.jpg",
    genre: [
      "manhwa",
      "anime",
      "populaire",
      "action",
      "art-martial",
      "ecole",
      "gangs",
      "romance",
      "surnaturel",
    ],
    link: "lookism.html",
    name: "Lookism",
    author: "Park Tae Jun",
    statut: "en cours",
  },
  {
    image:
      "https://i.pinimg.com/564x/bf/84/aa/bf84aa6b1d8f8bc8308b3d4b2e0d7a42.jpg",
    genre: ["manhwa", "action", "drame", "ecole", "gangs"],
    link: "to-not-die.html",
    name: "To not die",
    author: "Parae",
    statut: "En cours",
  },
  {
    image:
      "https://i.pinimg.com/236x/33/87/5d/33875dcc7e0b1a9a7ef9ea33f1a9a360.jpg",
    genre: ["manhwa", "anime", "action", "drame", "ecole", "surnaturel"],
    link: "noblesse.html",
    name: "Noblesse",
    author: "Son Jae-Ho",
    statut: "Terminé",
  },
  {
    image:
      "https://mangas-origines.xyz/wp-content/uploads/2023/06/wRoXRXSdBXzOSrXEkbbkkyCX-193x278.jpg",
    genre: ["Manhwa", "action", "drame", "fantastique", "nouveau"],
    link: "monsters.html",
    name: "Monsters",
    author: " Dream Factory Studio, High Ground",
    Statut: "En cours",
  },
  {
    image:
      "https://mangas-origines.xyz/wp-content/uploads/2023/06/Great-Mage-Returns-193x278.jpg",
    genre: ["manhwa", "populaire", "magie", "reincarnation", "ecole"],
    link: "the-great-mage-returns-after-4000-years.html",
    name: "The great mage returns after 4000 years",
    author: " Barnicle, Nakhasan",
    statut: "En cours",
  },
  {
    image:
      "https://mangas-origines.xyz/wp-content/uploads/2023/06/AvqPvSqOCmgxKKYwQdlnxOAT-193x278.jpg",
    genre: [
      "manhwa",
      "populaire",
      "art-martial",
      "reincarnation",
      "Fantastique",
      "surnaturel",
    ],
    link: "magic-eperor.html",
    name: "Magic emperor",
    author: " Wuer Manhua",
    statut: "En cours",
  },
];

const manhwasSearch = manhwasData;

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
let hasUserTyped = false;

function showResults(results) {
  searchResults.innerHTML = "";

  if (hasUserTyped && results.length === 0) {
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent =
      "Aucun resultat ne correspond a votre recherche.";
    noResultsMessage.classList.add("error-message-search");
    searchResults.appendChild(noResultsMessage);
    return;
  }

  results.forEach((result) => {
    const div = document.createElement("div");
    div.className = "result";
    const link = document.createElement("a");
    link.href = result.link;
    const image = document.createElement("img");
    image.src = result.image;
    image.alt = result.name; // Remplacer result.title par result.name
    link.appendChild(image);

    const details = document.createElement("div");
    details.className = "details-search";
    const title = document.createElement("h2");
    title.textContent = result.name; // Remplacer result.title par result.name
    details.appendChild(title);

    if (result.author) {
      const author = document.createElement("p");
      author.textContent = "Auteur: " + result.author;
      details.appendChild(author);
    }

    if (result.statut) {
      const statut = document.createElement("p");
      statut.textContent = "Statut: " + result.statut;
      details.appendChild(statut);
    }

    link.appendChild(details);
    div.appendChild(link);
    searchResults.appendChild(div);

    setTimeout(() => {
      div.style.opacity = 1;
    }, 50);
  });

  const hasResults = results.length > 0;
  searchResults.style.opacity = hasResults ? "1" : "0";
  searchResults.style.zIndex = hasResults ? "1" : "-1";
  searchResults.style.pointerEvents = hasResults ? "auto" : "none";
  searchResults.style.overflowY = hasResults ? "scroll" : "hidden";
}

function search(query) {
  if (query === "") {
    hasUserTyped = false;
    showResults([]);
    return;
  }

  const regex = new RegExp(query.toLowerCase(), "i");
  const results = manhwasSearch.filter(
    (item) => regex.test(item.name.toLowerCase()) // Remplacer item.title par item.name
  );

  hasUserTyped = true;
  showResults(results);
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  search(query);
});

searchResults.style.opacity = "0";
searchResults.style.zIndex = "-1";
searchResults.style.pointerEvents = "none";
searchResults.style.overflowY = "hidden";

search("");

const manhwas = manhwasData;

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  const errorMessage = document.getElementById("error-message");
  resultsDiv.innerHTML = "";
  errorMessage.classList.toggle("hidden", results.length > 0);

  if (results.length === 0) {
    errorMessage.classList.remove("hidden");
  } else {
    results.forEach((manhwa) => {
      const manhwaDiv = document.createElement("div");
      manhwaDiv.classList.add("manhwa");

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      const image = document.createElement("img");
      image.src = manhwa.image;
      image.alt = manhwa.name;
      imageDiv.appendChild(image);

      const detailsDiv = document.createElement("div");
      detailsDiv.classList.add("details");

      const name = document.createElement("h3");
      name.textContent = manhwa.name;
      detailsDiv.appendChild(name);

      const genre = document.createElement("p");
      genre.classList.add("genre");
      genre.textContent = `Genre: ${manhwa.genre.join(", ")}`;
      detailsDiv.appendChild(genre);

      const author = document.createElement("p");
      author.classList.add("author");
      author.textContent = `Auteur: ${manhwa.author}`;
      detailsDiv.appendChild(author);

      const statut = document.createElement("p");
      statut.classList.add("statut");
      statut.textContent = `Statut: ${manhwa.statut}`;
      detailsDiv.appendChild(statut);

      manhwaDiv.addEventListener("click", () => {
        window.location.href = manhwa.link;
      });

      manhwaDiv.appendChild(imageDiv);
      manhwaDiv.appendChild(detailsDiv);

      resultsDiv.appendChild(manhwaDiv);
    });
  }
}

function filterManhwas(genres) {
  return manhwas.filter((manhwa) => {
    return genres.every((genre) => manhwa.genre.includes(genre));
  });
}

function updateSelectedGenres() {
  const selectedGenres = [];
  const tagLinks = document.querySelectorAll(".tag-link.active");

  tagLinks.forEach((link) => {
    selectedGenres.push(link.getAttribute("data-tag"));
  });

  return selectedGenres;
}

const tagLinks = document.querySelectorAll(".tag-link");
tagLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.classList.toggle("active");

    const selectedGenres = updateSelectedGenres();
    const filteredManhwas = filterManhwas(selectedGenres);
    displayResults(filteredManhwas);

    const errorMessage = document.getElementById("error-message");
    errorMessage.classList.toggle("hidden", filteredManhwas.length > 0);
  });
});

const clearTagsButton = document.getElementById("clearTagsButton");
clearTagsButton.addEventListener("click", () => {
  clearSelectedTags();
});

displayResults(manhwas);
