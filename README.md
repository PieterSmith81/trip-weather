# Trip Weather

An interactive travel planner web app that provides users with real-time weather updates before departure.

## Live Website

### Coming Soon!

## Table of Contents

- [Overview](#overview)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Testing](#testing)
- [Browser compatibility](#browser-compatibility)
- [Development](#development)

## Overview

This is my fifth and final project in the Udacity front-end web developer course. The requirement for this capstone project was to create a travel planner web application. This web app should allow users to enter a travel destination and an arrival date. The app should then show the user a picture of their destination, the current weather at their destination, and the forecasted weather on arrival.

The above might sound relatively straightforward, but it requires fetching data from three different web APIs, including:

- **The GeoNames web API** - for fetching geo-location information for the destination, including the location name and latitude and longitude coordinates.
  - https://www.geonames.org/export/geonames-search.html
- **The Weatherbit web API** - for fetching current and forecast weather data (using the latitude and longitude coordinates from the GeoNames API).
  - https://www.weatherbit.io/api/weather-current
  - https://www.weatherbit.io/api/weather-forecast-16-day
- **The Pixabay API** - for fetching a picture of the destination (using the location name from the GeoNames API).
  - https://pixabay.com/api/docs

There was also a requirement to implement at least one special feature to make our project stand out. For this, I chose to incorporate weather icons into my weather forecasts (the weather icons are also provided by the Weatherbit web API).

Additionally, our web app also incorporates many design and code elements, as learnt from the previous four Udacity front-end web developer lessons and projects.

These include:

- **HTML, CSS, and JavaScript** which are the basic building blocks of any website.
- **Responsive web design** using CSS media queries to change the website appearance and layout depending on the device and screen size that it is being viewed on.
- **Input validation** to validate that all input into our web app is in the correct format and inside acceptable ranges.
- **Chained JavaScript promises** to enable the use of asynchronous JavaScript code, especially when fetching data from various web APIs that are dependent on one another.
- **Webpack** to bundle, transform, and deploy all our web assets into smaller, quicker-loading website builds.
- **Node and Express** to allow us to run server-side JavaScript code, use Node modules, spin up a web server, and handle HTTP routing.
- **Service workers** to provide client-side, offline browsing capability.
- **The Jest JavaScript testing framework** to allow us to perform unit testing on our server-side and client-side JavaScript code.

[(Back to top)](#table-of-contents)

## Dependencies

- **Node.js**, or simply **Node**
  - a Server-side JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Node includes the Node Package Manager (npm), which allows you to install Node packages and modules like Express, body-parser, and CORS from the macOS/Unix terminal or Windows command line.
  - https://nodejs.org
- **Express.js**, or simply **Express**
  - a Back-end web application framework for Node.js. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express allows you to spin up a web server and then add additional features and middleware to that web server. Express also handles all HTTP routing (a.k.a. client requests) on our behalf.
  - https://expressjs.com
- **Webpack**
  - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. It supports many loaders and plugins to allow you to, for example, transpile SASS (a CSS extension language) to CSS, minify your JavaScript, HTML, and style sheet files into smaller files for quicker website load times, create production and development-specific website builds, and provide offline functionality to your website using service workers. Webpack also includes the webpack-dev-server. This provides you with a rudimentary web server and the ability to use live reloading. Live reloading greatly assists with web design and web development since it allows you to see your client-side design and code changes in real time.
  - https://webpack.js.org
- **Other dependencies**
  - Please see the project's package.json, webpack.dev.js, and webpack.prod.js files for all other Node, Express, and Webpack dependencies that were used in this project. Details on most of these dependencies can be found by searching for the dependency package's name in the search bar at the Node Package Manager website at:
  - https://www.npmjs.com

[(Back to top)](#table-of-contents)

## Usage

- **Node.js**

  - Uninstall any pre-existing installations of Node.js:

    - This project and its dependencies were built and tested on Node version 22.10.0. Subsequently, you will need to install Node.js v22.10.0 on your Mac or PC before being able to use this project.
    - Subsequently, you might first need to uninstall the current version of Node.js that is installed on your Mac or PC before installing Node.js v22.10.0, which is required for this project.
    - To uninstall a prior/newer version of Node.js from your Mac that was previously installed using the Node.js Mac pkg installer, run the following two commands (taken from https://github.com/nodejs/node-v0.x-archive/issues/4058) in the macOS terminal:

      ```
      sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}

      sudo rm -Rf /usr/local/lib/dtrace/node.d; sudo rm -Rf /usr/local/include/node
      ```

      Node uninstall instructions for Windows and Unix should be Googled if required.

  - Install Node.js v22.10.0:
    - Next, download and install Node.js version 22.10.0 from the following link:
      https://nodejs.org/download/release/v22.10.0
      - For macOS, download and install the node-v22.10.0.pkg Mac installer file.
      - For Windows, download and install the node-v22.10.0-x64.msi Windows installer file.
      - For Unix, use the instructions at https://nodejs.org/en/download/package-manager to install Node.js for your particular Unix/Linux distro.

- **Clone repository from GitHub**
  - Next, clone (or download and extract) this project repository from GitHub to your local machine.
  - This can be done using the "git clone" command in the terminal or the "Code > Download ZIP" button on the GitHub website itself.
- **Install dependencies**

  - Then, use the npm command from the Visual Studio Code terminal, macOS/Unix terminal, or Windows command line to install the project dependencies. A package.json file has been provided as part of this project, which can be used to install all the dependencies used by the project. This can be done by running the following command from the folder where you cloned/extracted the project files:
    ```
    npm install
    ```
  - Note that the dependency files installation can take a couple of minutes to complete.

- **Obtain and enter API keys**

  - Register for free GeoNames, Weatherbit, and Pixabay API accounts at:
    - https://www.geonames.org/login
    - https://www.weatherbit.io/account/create
    - https://pixabay.com/api/docs (use the "join" link in the top right-hand corner to register for a Pixabay API account)
  - Create a new file named ".env" in the root of your project folder.
  - Then copy and paste your API keys from the GeoNames, Weatherbit, and Pixabay websites into this new .env file in the following format:

    ```
    GEONAMES_API_USERNAME=[geonames username]
    WEATHERBIT_API_KEY=[weatherbit API key]
    PIXABAY_API_KEY=[pixabay API key]

    For example:
    GEONAMES_API_USERNAME=yourusername
    WEATHERBIT_API_KEY=788d327eff065a244edb69234b0f629e
    PIXABAY_API_KEY=73105429-7b5d8ea13a6241f8bdc89173d
    ```

  - Finally, save your .env file.

- **Launch the project**

  - We are now ready to launch the project. You can launch the project in production or development mode.

    - **Production mode**, which is optimised for performance (it runs on minified JavaScript and CSS files), can be built and launched as follows:

      - Run the following command in the Visual Studio Code terminal, macOS/Unix terminal, or Windows command line to build the production website (i.e., to create a dist subfolder with optimised/minimised web assets in it):
        ```
        npm run build
        ```
      - Then run the following command to spin up the Express web server:
        ```
        npm start
        ```
      - You can then open the production site in your browser at http://localhost:8082.

    - **Development mode**, which is optimised for readability (no minification of web assets) and live reloading (client-side code changes are visible immediately with no need to build a dist subfolder first), can be launched as follows:
      - Run the following command to spin up the Express web server (if you haven't already started it as part of the production mode launch process above):
        ```
        npm start
        ```
      - Then run the following command to start the Webpack live reloading development server and launch the development site:
        ```
        npm run dev
        ```
      - The development site is then accessible at http://localhost:8083 (a browser window with this URL should automatically be opened by the Webpack dev server when you run the "npm run dev" command above).

- **Web app usage**

  - You can now enter a destination name and arrival date (within 7 days from today's date) in the Trip Weather web app and click the Submit button. You will then be presented with a picture of your destination, as well as the current weather and the forecasted weather on arrival at your destination.

  - Please note that the Pixabay free image library might not contain images for more obscure locations, in which case you will not be presented with a picture of your destination.

[(Back to top)](#table-of-contents)

## Testing

Code testing is provided by the Jest JavaScript testing framework (https://jestjs.io). The Jest testing specification files can be found in the "\_\_test\_\_" subfolder in the root folder of the project. To test the various server-side and client-side JavaScript functions in this project, execute the Jest tests by running the following command in the Visual Studio Code terminal, macOS/Unix terminal, or Windows command line:

```
npm run test
```

Please note the following regarding the Jest tests for this project:

- Server-side Jest tests will only be completed successfully if the Express web server is not already running. To stop the Express web server, hit Ctrl+C in the terminal window where the Express web server is running (i.e., in the terminal window where you originally ran "npm start").
- You might receive a warning after the server-side Jest tests have been completed stating that: _"A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them."_
  - This is to be expected due to the way we are testing our server-side code/Express routing. We are instructing Jest to fire up an entire Express web server instance using our existing src/server/server.js code and then perform its server-side tests. Jest then forcibly closes that web server instance after it has completed all its tests, hence the warning message above. So, in summary, you can ignore this warning when running the Jest tests for this project.

## Browser compatibility

This web app was tested and should work fine with the following web browsers:

- Chrome
- Brave Browser
- Firefox
- Safari
- Microsoft Edge

**Internet Explorer is <u>not</u> supported since it is a legacy browser and is not compatible with many new CSS styles.**

[(Back to top)](#table-of-contents)

## Development

The entire web app was developed using the Visual Studio Code editor (https://code.visualstudio.com). And the responsive design of the website was tested using Google Chrome DevTools' Device Mode (https://developer.chrome.com/docs/devtools/device-mode). This should help ensure the site displays correctly on various device sizes, including mobile phones, tablets, and computer monitors.

The following HTML, CSS, and JavaScript style guide was used during development:

- **Udacity frontend nanodegree style guide:** https://udacity.github.io/frontend-nanodegree-styleguide/index.html

[(Back to top)](#table-of-contents)
