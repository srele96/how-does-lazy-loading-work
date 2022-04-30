// closure scopes the code to the chunk.js file
(function () {
  const p = document.createElement('p');
  p.textContent =
    'I am a paragraph that got appended to the DOM after the chunk was loaded.';

  document.body.appendChild(p);
})();
