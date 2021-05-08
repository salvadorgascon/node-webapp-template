import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { HashRouter, Route, Link, Switch, withRouter, matchPath } from 'react-router-dom'

import { IntlProvider, addLocalesData, injectIntl } from 'react-intl'

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import getHtmlLanguage from 'scripts/core/functions/dom/get-html-language';
import buildIntlMessages from 'scripts/core/functions/build-intl-messages';

import Content from 'scripts/core/components/layouts/content'
import Wrapper from 'scripts/core/components/layouts/wrapper'
import RootWrapper from 'scripts/core/components/layouts/root-wrapper'
import Page from 'scripts/core/components/layouts/page'
import Header from 'scripts/core/components/layouts/header'
import HeaderMobile from 'scripts/core/components/layouts/header-mobile'
import Footer from 'scripts/core/components/layouts/footer'
import QuickUser from 'scripts/core/components/layouts/quick-user'
import ScrollTop from 'scripts/core/components/layouts/scroll-top'

class App extends React.Component {
    constructor(props) {
      super(props);      
      
      this.language = getHtmlLanguage();  
      window.intlMessages = buildIntlMessages();
  
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
              <HeaderMobile />
              <RootWrapper>
                <Page>
                  <Wrapper>
                    <Header/>
                    <Content>
                      <Switch>
                      </Switch>
                    </Content>
                    <Footer />
                  </Wrapper>
                </Page>
              </RootWrapper>
              <QuickUser/>
              <ScrollTop/>
              </HashRouter>
          </IntlProvider>
        </Provider>);
    }
  }
  
  export default App
  
  
  
  
  