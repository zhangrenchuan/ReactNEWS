import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import MediaQuery from 'react-responsive'

import App from './components/app'
import NewsContainer from './components/news_container'
//import NewsContainer from './components/news2/news_container2'
//import NewsDetail from './components/news2/news_detail2'
import NewsDetail from './components/news_detail'
import UserCenter from './components/user_center'


import MobileApp from './components/Mobile/mobile_app'
import MobileNewsContainer from './components/Mobile/mobile_container'
import MobileNewsDetail from './components/Mobile/mobile_detail'
import MobileUserCenter from './components/Mobile/mobile_center'


ReactDOM.render(
    (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={NewsContainer}></IndexRoute>
              <Route path="/news_detail/:news_id" component={NewsDetail}></Route>
              <Route path="/user_center" component={UserCenter}></Route>
            </Route>
          </Router>
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={MobileApp}>
              <IndexRoute component={MobileNewsContainer}></IndexRoute>
              <Route path="/news_detail/:news_id" component={MobileNewsDetail}></Route>
              <Route path="/user_center" component={MobileUserCenter}></Route>
            </Route>
          </Router>
        </MediaQuery>
      </div>
    ),
    document.getElementById('root')
);