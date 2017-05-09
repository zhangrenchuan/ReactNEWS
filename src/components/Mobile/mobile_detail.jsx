import React from 'react'
import {BackTop} from 'antd';
import axios from 'axios'

import NewsComments from './mobile_comments';

/**
 * 移动端新闻详情
 */
export default class MobileNewsDetails extends React.Component{
  constructor () {
    super();
    this.state = {
      news: ''
    }
  }

  componentDidMount () {
    const {news_id} = this.props.params;
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${news_id}`;
    axios.get(url)
        .then(response => {
          const news = response.data;
          this.setState({news});
          document.title = news.title + " - React News | React驱动的新闻平台";
        })
  }

  render () {
    return (
        <div>
          <div className="mobileDetailsContainer" dangerouslySetInnerHTML={{__html: this.state.news.pagecontent}}></div>
          <hr/>
          <NewsComments uniquekey={this.props.params.uniquekey}/>
          <BackTop/>
        </div>
    )
  }
}
