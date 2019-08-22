## Getting Started

In the root directory of the project...

1. Install node modules `yarn install` or `npm install`.
2. Start development server `yarn start` or `npm start`.

## Next Steps




## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Express Generator](https://expressjs.com/en/starter/generator.html).

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
│ ├── App.jsx - React routing
│ └── index.jsx - React root component
└── README.md
```

## Additional Documentation


- React - https://reactjs.org/
- React Router - https://reacttraining.com/react-router/

- Bootstrap CSS - https://getbootstrap.com/
- Express - https://expressjs.com/

