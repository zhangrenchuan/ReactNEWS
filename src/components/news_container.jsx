import React from 'react';
import NewsImgBlock from './news/news_img_block'
import NewsBlock from './news/news_block'
import NewsProduct from './news/news_product'


import {
  Row,
  Col,
  Carousel,
  Tabs
} from 'antd';

import '../componentsCss/news_container.css'
import carousel1 from '../images/carousel_1.jpg'
import carousel2 from '../images/carousel_2.jpg'
import carousel3 from '../images/carousel_3.jpg'
import carousel4 from '../images/carousel_4.jpg'

const TabPane = Tabs.TabPane;


class NewsContainer extends React.Component{
  render(){
    return (
        <div className="news_Container">
          <Row>
            <Col span={1}></Col>
            <Col span={22}>
              <div className="leftCont">
                <Carousel autoplay>
                  <div><img src={carousel1} alt=""/></div>
                  <div><img src={carousel2} alt=""/></div>
                  <div><img src={carousel3} alt=""/></div>
                  <div><img src={carousel4} alt=""/></div>
                </Carousel>
                <NewsImgBlock title="国际头条" type='guoji' count={6} width='100%' imgWidth='140px'/>
              </div>

              <Tabs className="news_tabs">
                <TabPane tab="国内新闻" key="101">
                  <NewsBlock type='guonei' count={30}/>
                </TabPane>
                <TabPane tab="国际新闻" key="100">
                  <NewsBlock type='guoji' count={30}/>
                </TabPane>
                <TabPane tab="社会新闻" key="105">
                  <NewsBlock type='shehui' count={30}/>
                </TabPane>
                <TabPane tab="科技新闻" key="106">
                  <NewsBlock type='keji' count={30}/>
                </TabPane>
              </Tabs>


              <Tabs className="news_product">
                <TabPane tab="React" key="103">
                  <NewsProduct/>
                </TabPane>
              </Tabs>

              <div>
                <NewsImgBlock title="国内头条" type='guonei' count={10} width='100%' imgWidth='161px'/>
                <NewsImgBlock title="社会新闻" type='shehui' count={12} width='100%' imgWidth='140px'/>
                <NewsImgBlock title="科技新闻" type='keji' count={7} width='100%' imgWidth='140px'/>
                <NewsImgBlock title="娱乐新闻" type='yule' count={7} width='100%' imgWidth='140px'/>
                <NewsImgBlock title="体育新闻" type='tiyu' count={5} width='100%' imgWidth='200px'/>
                <NewsImgBlock title="时尚新闻" type='shishang' count={10} width='100%' imgWidth='140px'/>
              </div>

            </Col>
            <Col span={1}></Col>
          </Row>
        </div>
    )
  }
}

export default NewsContainer