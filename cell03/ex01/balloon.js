const balloon = document.getElementById('balloon');

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let size = 200;
let shrinkInterval = null;

function updateBalloon() {
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', () => {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
  }

  updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
  if (!shrinkInterval) {
    shrinkInterval = setInterval(() => {
      if (size > 200) {
        size -= 5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
      } else {
        clearInterval(shrinkInterval);
        shrinkInterval = null;
      }
    }, 200);
  }
});

balloon.addEventListener('mouseenter', () => {
  if (shrinkInterval) {
    clearInterval(shrinkInterval);
    shrinkInterval = null;
  }
});

updateBalloon();