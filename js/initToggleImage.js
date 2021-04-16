const img = document.getElementById('nike-reveal');

img.onmouseover = function () {
  this.src = 'images/nike-reveal.png';
};

img.onmouseout = function () {
  this.src = 'images/nike-reveal-white.png'
};