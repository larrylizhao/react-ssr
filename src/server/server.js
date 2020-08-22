const express = require('express');
const app = express();
const ReactDOMServer = require('react-dom/server');
const App = require('../client/es5/app');

ReactDOMServer.renderToString(App);
const port = process.env.PORT || 5000;
app.use()
app.listen(port,() => console.log(`Server listening on ${port}`));
