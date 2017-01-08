import ReactDOM from 'react-dom';
import Root from './Components/Root'
import React from 'react';
import {config} from './actions/configStore'
const store = config()
ReactDOM.render(
<Root store={store} />,
document.getElementById('root')
);

  