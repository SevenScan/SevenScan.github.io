const invertButton = document.getElementById("invertButton");
const chapterList = document.getElementById("chapterList");

let inverted = false;

invertButton.addEventListener("click", () => {
  const chapters = Array.from(chapterList.children);
  chapters.reverse();

  if (inverted) {
    chapters.forEach((chapter) => chapterList.appendChild(chapter));
  } else {
    chapters.forEach((chapter) =>
      chapterList.insertBefore(chapter, chapterList.firstChild)
    );
  }

  inverted = !inverted;
});

const retourHautButton = document.querySelector(".bouton-retour-haut");

retourHautButton.addEventListener("click", () => {
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollStep(timestamp) {
    const currentTime = timestamp || performance.now();
    const timeElapsed = currentTime - startTime;
    const scrollTo = Math.easeInOutQuad(
      timeElapsed,
      startPosition,
      -startPosition,
      1000
    );
    window.scrollTo(0, scrollTo);

    if (timeElapsed < 1000) {
      requestAnimationFrame(scrollStep);
    }
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(scrollStep);
}
