import React from 'react'
import {
  Row,
  Col,
} from 'antd';
import '../../componentsCss/news_footer.css'

class NewsFooter extends React.Component{
  render(){
    return (
        <div className="news_footer">
          <Row>
            <Col span={24}>
              &copy; 2017 React_NEWS |
              京ICP备2017666666号 |
              京公网安备11020176666号 |
              隐私声明和 Cookie
            </Col>
          </Row>
        </div>
    )
  }
}

export default NewsFooter
