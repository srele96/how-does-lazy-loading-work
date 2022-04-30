# How does lazy loading work?

1. The JavaScript chunk with code exists alongside other code.
2. The main bundle adds the script tag with src pointing to the JavaScript chunk in the DOM.
3. The code from the JavaScript chunk is available.

Code in the JavaScript files has global scope, and other files can use it. After the script becomes available in the DOM, it loads the chunk content, and the main bundle can use it.

## Steps to recreate the example

1. Create index HTML file.
2. Add the button with an id in the index HTML file.
3. Add the script tag that points to the main JavaScript bundle.
4. The button from the main JavaScript bundle should call a function to load the chunk.
5. The function should create the script with src pointing to the JavaScript chunk and append it to the DOM.
6. After clicking the button, the code from the JavaScript chunk is available.

**Note:** _The browser needs to download the chunk like any other file. That means the code won't be available immediately._

If you want to verify that the browser downloads the chunk, go to the **Network** tab in the browser. Then click the button to load the JavaScript chunk. There should be a request with a chunk name.
