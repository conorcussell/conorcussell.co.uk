function ready() {
  var lastKnownScrollPosition = 0;
  var ticking = false;

  window.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        getImages(lastKnownScrollPosition);
        ticking = false;
      });
    }
    ticking = true;
  });
}

if (document.readyState !== 'loading') {
  ready();
} else {
  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'interactive') {
      ready();
    }
  });
}



function getImages(scrollPos) {
  var images = [].slice.call(document.querySelectorAll('.js-lazy-load'));
  images.map(function(image) {
    if((image.getBoundingClientRect().top - window.innerHeight) < 50) {
      image.src = image.getAttribute('data-src');
    }
  });
}
