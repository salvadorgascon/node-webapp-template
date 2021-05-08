import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { HashRouter, Route, Link, Switch, withRouter, matchPath } from 'react-router-dom'

import { IntlProvider, addLocalesData, injectIntl } from 'react-intl'

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

class App extends React.Component {
    constructor(props) {
      super(props);
  

      this.language = 'en';
      window.intlMessages = {};
      // this.language = getHtmlLanguage();  
      // window.intlMessages = buildIntlMessages();
  
      const initialState = {};
  
      const emptyReducer = function (state = {}, action) {
          return state;
      };
  
      const reducers = combineReducers({
          emptyReducer
      });
  
      this.store = createStore(reducers, initialState, applyMiddleware(thunk));
    }
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <Provider store={this.store}>
          <IntlProvider locale={this.language} messages={window.intlMessages}>
              <HashRouter>
              </HashRouter>
          </IntlProvider>
        </Provider>);
    }
  }
  
  export default App
  
  
  
  
  