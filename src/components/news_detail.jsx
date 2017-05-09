import React from 'react';
import {
  Row,
  Col,
  BackTop
} from 'antd';
import axios from 'axios'

import NewsComments from './detail_comments/news_comments'
import NewsImgBlock from './news/news_img_block'

class NewsDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news:''
    }
  }

  componentWillMount(){
    this.showDetail(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.showDetail(nextProps)
  }

  showDetail = (props)=>{
    let newsId = props.params.news_id;
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${newsId}`;
    //发送ajax
    axios.get(url)
      .then(response =>{
        let news = response.data;
        //更新状态
        this.setState({news})
      })
      .catch(error =>{
        console.log(error.message);
      })
  };


  render(){
    let {news} = this.state;
    return (
        <div>
          <Row>
            <Col span={1}></Col>
            <Col span={16}>
              <div dangerouslySetInnerHTML={{__html:news.pagecontent}}></div>
              <br/><br/><hr/>
              <div>
                <p style={{fontSize:'20px',fontWeight:'bold'}}>评论区</p>
              </div>
              <NewsComments newsId={this.props.params.news_id}/>
            </Col>
            <Col span={6}>
              <NewsImgBlock type="guonei" count={18} width="300px" imgWidth="115px"/>
            </Col>
            <Col span={1}></Col>
          </Row>
          <BackTop></BackTop>
        </div>
    )
  }
}

export default NewsDetail