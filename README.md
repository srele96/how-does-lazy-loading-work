# How does lazy loading work?

1. The JavaScript chunk with code exists alongside other code.
2. The main bundle adds the script tag with src pointing to the JavaScript chunk.
3. The script tag is appended to the DOM.
4. The code from the JavaScript chunk is available.

Code in the JavaScript files is globally available. Because it is globally available, it can be used in any other JavaScript file. After chunk is appended, the main bundle can use its code.

## Steps to recreate the example

1. Create index HTML file.
2. Add the button with an id in the index HTMl file.
3. Add the script tag that points to the main JavaScript bundle.
4. In the main JavaScript bundle, add the function that will be called when the button is clicked.
5. The function should create the script with src pointing to the JavaScript chunk and append it to the DOM.
6. After clicking the button, the code from the JavaScript chunk is available.

**Note:** _The chunk has to be downloaded like any other file. That means the code won't be available immediately._

If you want to verify that the chunk is downloaded, go to the **network** tab in the browser. Then click the button to load the chunk. There should be a request with chunk name.
