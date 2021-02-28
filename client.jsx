import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import 'antd/dist/antd.less';

import Todo from './Todo';

const Hot = hot(Todo);

ReactDOM.render(<Hot />, document.querySelector('#root'));
