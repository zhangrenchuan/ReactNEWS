import React from 'react';
import MobileNewsHeader from './mobile_header'
import NewsFooter from '../footer/news_footer'
import '../../componentsCss/mobile.css'

class MobileApp extends React.Component{
    render(){
        return (
          <div>
            <MobileNewsHeader />
            {this.props.children}
            <NewsFooter/>
          </div>
        )
      }
    }

export default MobileApp