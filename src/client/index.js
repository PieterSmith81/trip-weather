/*
Client index.js
*/

/*
Imports
*/

// See https://www.w3schools.com/js/js_modules.asp for details on JavaScript module exports and import.
import { performActions } from "./js/app";
import { createSubmitButtonEventListener } from "./js/app";
import { createEnterKeyEventListener } from "./js/app";

/* Comment out the inline JavaScript stylesheets imports below when deploying to production,
and uncomment the main.css stylesheet line at the top of the src/client/views/index.html file
to use the minified main.css stylesheet for production rather than the "slow performing" inline stylesheets below. */
import "./styles/theme.scss";
import "./styles/style.scss";
import "./styles/content-header.scss";
import "./styles/content-destination.scss";
import "./styles/content-weather.scss";

/*
Exports
*/

export { performActions };

/* Export an IIFE (immediately invoked function expression) which creates an event listener (using the createSubmitButtonEventListener function that was imported from the /client/js/app.js file above).
This IIFE will execute immediately when it is defined, i.e. imported by Webpack/Babel, and subsequently create our event listener. */
export default (() => {
  createSubmitButtonEventListener();
  createEnterKeyEventListener();
})();
