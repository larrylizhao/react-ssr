require('@babel/register');
const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../client/app-commonjs');

//renderToString 接收的是React Element, server端无法使用未经编译的jsx<App />
const html = ReactDOMServer.renderToString(React.createElement(App, null));
const port = process.env.PORT || 5000;

app.use('/server', (req, res) => {
    res.send(html);
});

app.listen(port,() => console.log(`Server listening on ${port}`));
