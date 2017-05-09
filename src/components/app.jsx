import React from 'react';
import NewsHeader from './header/news_header_Login_Reg'
import NewsFooter from './footer/news_footer'
import '../componentsCss/PCindex.css'

class App extends React.Component{
    render(){
        return (
          <div>
            <NewsHeader />
            {this.props.children}
            <NewsFooter/>
          </div>
        )
      }
    }

export default App