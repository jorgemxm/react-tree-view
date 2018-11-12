## React: TreeView Component

### Install
- Open your terminal app, cd into this directory.
- Run: `npm i` or `npm install`.

### Dependencies
- *NodeJS 8.x* or newer version is required.
- *NPM is required*. Recomended version 5.x or newer.

### NPM Scripts
- `npm run dev`: Start Development Server. <http://localhost:4000>
- `npm start`: Shortcut for the previous script (Start Development Server).
- `npm run build`: Create production ready files under the folder `./dist`.
- `npm run prod`: Run this application in production mode, it starts a HTTP server and creates all the production ready files that need to be served. <http://localhost:8080>
- `npm t` or `npm run test`: Run unit tests.
- `npm run test:watch`: Run unit tests. Watch mode enabled.

### Dev-Environment
- This Application uses Webpack 3.10 as the build system.
- The Environment was configured using a tool called `POI` which provides a webpack/webpack-dev-server environment that requires minimum webpack configuration. (However, It can be extended easily based on the project needs).
- Javascript code is written using ES6 Syntax and transpiled with Babel.
- ESLint is used for JavaScript code linting. (ESLints runs both with the dev-server and the production builds).
- Tests were written using Jest and Enzyme.
- Additional polyfills were included for older browsers (Fetch/Promises).

### Serve Prod Builds
- npm run build && http-server dist -p 8080 -o -s
