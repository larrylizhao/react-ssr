//需要引入React以使用JSX
import React from 'react';
import { render } from 'react-dom';
// import App from './app';
const App = require('./app-commonjs');

//<App /> 是React.createElement(App, null)的语法糖
//render 或者 renderToString接收的参数都是React Element
render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
