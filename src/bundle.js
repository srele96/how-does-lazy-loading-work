// Gets chunk-loader button and adds event listener that will load the chunk
// closure scopes the code to the bundle.js file
(function () {
  var chunkLoader = document.querySelector('#chunk-loader');

  function chunkAlreadyExist(chunkName) {
    return !!document.querySelector(`script[src*="${chunkName}"]`);
  }

  // create a script element and append it to the head
  // after the chunk is appended the chunks code will run
  function loadChunk() {
    // Without this function pressing button to load the chunk will always
    // add new script element with the src pointing to the chunk.js file
    // this will cause the browser to load the same chunk more than once
    if (!chunkAlreadyExist('chunk.js')) {
      var script = document.createElement('script');
      script.src = 'chunk.js';

      document.head.appendChild(script);
    }
  }

  chunkLoader.addEventListener('click', loadChunk);
})();
