const allGenres = ["nouveau", "populaire", "recommandé"];

const genreContainer = document.getElementById("genreContainer");

allGenres.forEach((genre) => {
  const genreTitle = document.createElement("h1");
  genreTitle.className = "genre-title";
  genreTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
  genreContainer.appendChild(genreTitle);

  const genreDiv = document.createElement("div");
  genreDiv.className = "genre-div";
  genreContainer.appendChild(genreDiv);

  const genreDivs = {}; // Removed the genreDivs object creation from here

  manhwasData.forEach((manhwa) => {
    // Loop through all genres
    if (manhwa.genre.includes(genre)) {
      // Check if manhwa belongs to the current genre
      const manhwaDiv = document.createElement("div");
      manhwaDiv.className = "manhwa";

      const link = document.createElement("a");
      link.href = manhwa.link;
      link.appendChild(manhwaDiv);

      const image = document.createElement("img");
      image.src = manhwa.image;
      image.alt = manhwa.name;
      manhwaDiv.appendChild(image);

      const details = document.createElement("div");
      details.className = "details";

      const name = document.createElement("div");
      name.className = "name";
      name.textContent = manhwa.name;
      details.appendChild(name);

      const genreEl = document.createElement("div");
      genreEl.className = "genre";
      genreEl.textContent = `Genre: ${manhwa.genre.join(", ")}`;
      details.appendChild(genreEl);

      const author = document.createElement("div");
      author.className = "author";
      author.textContent = `Auteur: ${manhwa.author}`;
      details.appendChild(author);

      const statut = document.createElement("div");
      statut.className = "statut";
      statut.textContent = `Statut: ${manhwa.statut}`;
      details.appendChild(statut);

      manhwaDiv.appendChild(details);

      genreDiv.appendChild(link); // Modified to append to genreDiv
    }
  });
});
