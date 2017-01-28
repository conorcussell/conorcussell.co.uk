function ready() {
  var images = [].slice.call(document.querySelectorAll('.js-lazy-load'));
  images.map(function(img) { img.src = img.getAttribute('data-src') });
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
