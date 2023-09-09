function getRandomPositionAndSize(maxX, maxY, minSize, maxSize) {
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  const size = Math.random() * (maxSize - minSize) + minSize;
  return { x, y, size };
}

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const { x, y, size } = getRandomPositionAndSize(maxX, maxY, 1, 5);
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  return star;
}

function addStars(numStars) {
  const starsContainer = document.querySelector(".stars-container");
  for (let i = 0; i < numStars; i++) {
    const star = createStar();
    starsContainer.appendChild(star);
  }
}

addStars(150);
