// require('@babel/register');
const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {default: App} = require('./app');
const {default: appCommon} = require('../client/es5/app');
const AppCommon = require('../client/es5/app-commonjs');

//renderToString 接收的是React Element, server端无法使用未经编译的jsx<App />, 需要先经babel转译或者webpack打包(libraryTarget: "commonjs2")
const html = ReactDOMServer.renderToString(React.createElement(AppCommon, null));
const port = process.env.PORT || 5000;

app.use('/server', (req, res) => {
    res.send(html);
});

app.listen(port,() => console.log(`Server listening on ${port}`));
