import {Provider} from "react-redux";
import React from 'react';
import {Route,Router,browserHistory} from 'react-router'
import App from './App'

const Root = ({store}) => (
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/(:filter)" component={App} />
  </Router>
</Provider>
)
export default Root;