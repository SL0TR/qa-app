## Getting Started

##### First install all the dependncies for the project, run this command

`npm i` or `npm install`

##### To start the developement server and hot reload module, run this command

`npm start`

##### To run the build process which formats, lints, adds css prefixes, runs transpilers and polyfill and afterwards generates the assets, run this command

`npm run predeploy`

##### To deploy to gh-pages, run

`npm run deploy`


## App Login

##### To login as an admin use these credentials
###### email: admin@abc.com
###### password: admin

##### For regular user experience, feel free to signup

## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Express](https://expressjs.com/).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:3001/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ ├── api/ - Handles API calls for routes
│ ├── app.js - Adds middleware to the express server
│ ├── config - Defines the config constants for the endpoints and port and jwt secrets
│ └── server.js - Configures Port and HTTP Server
├── src - React front-end
│ ├── components - React components for each page
│ ├── App.js - React routing
│ ├── pages/ - The page route components
│ ├── services/ - custom util functions
│ └── index.js - React root component
└── README.md
```

## Additional Documentation


- React - https://reactjs.org/
- React Router - https://reacttraining.com/react-router/

- Bootstrap CSS - https://getbootstrap.com/
- Express - https://expressjs.com/

