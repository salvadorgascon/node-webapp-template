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

import RootWrapper from 'scripts/core/components/layouts/root-wrapper'
import Page from 'scripts/core/components/layouts/page'
import Wrapper from 'scripts/core/components/layouts/wrapper'
import Header from 'scripts/core/components/layouts/header'
import Content from 'scripts/core/components/layouts/content'
import Toolbar from 'scripts/core/components/layouts/toolbar'
import Post from 'scripts/core/components/layouts/post'
import Footer from 'scripts/core/components/layouts/footer'
import ScrollTop from 'scripts/core/components/layouts/scroll-top'

import PageTitle from 'scripts/core/components/labels/page-title'
import PageDescription from 'scripts/core/components/labels/page-description'
import TextSeparator from 'scripts/core/components/labels/text-separator'

import ToolbarButtons from 'scripts/core/components/layouts/toolbar-buttons'

import Breadcrumb from 'scripts/core/components/links/breadcrumb'
import BreadcrumbHome from 'scripts/core/components/links/breadcrumb-home'
import BreadcrumbRoute from 'scripts/core/components/links/breadcrumb-route'

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
                <RootWrapper>
                  <Page>
                    <Wrapper>
                      <Header/>
                      <Content>                        
                        <Switch>
                          <Route exact path="/">
                            <Toolbar buttons={<ToolbarButtons><button>aasas</button></ToolbarButtons>}
                              info={
                                <React.Fragment>
                                  <PageTitle text="Home"/>
                                  <PageDescription text="This is home"/>
                                  <TextSeparator/>
                                  <Breadcrumb>
                                    <BreadcrumbHome/>
                                    <BreadcrumbRoute text="Customers" route="/customers"/>
                                  </Breadcrumb>
                                </React.Fragment>}/>
                          </Route>
                        </Switch>                                                                     
                        <Post>
                          <Switch>
                            <Route exact path="/">
                            </Route>
                          </Switch>
                        </Post>                        
                      </Content>
                      <Footer />
                    </Wrapper>
                  </Page>
                </RootWrapper>
                <ScrollTop/>
              </HashRouter>
          </IntlProvider>
        </Provider>);
    }
  }

  export default App
  
  
  
  
  