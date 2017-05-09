import React from 'react'
import {Card} from 'antd'
import axios from 'axios'
import {Link} from 'react-router'
import '../../componentsCss/news_img_block.css'

class NewsImg extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        //初始化图片新闻的状态
        newsArr : []
      }
    }

    //将要挂载时 发送
    componentWillMount(){
      let {type,count} = this.props;
      //配置URL参数
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
      //发送ajax请求获取图片新闻
      axios.get(url)
        .then(response => {
          //获取新闻数据
          let newsArr = response.data;
          console.log('这是URL获得的新闻数据',response.data);
          //更新状态
          this.setState({newsArr})
        })
        .catch(error => {
          console.log(error.message);
        })
    }

    render(){
      let {title,type,count,width,imgWidth} = this.props;
      let {newsArr} = this.state;
      let newsList = newsArr.length > 0
      ?(
        newsArr.map((item,index) => {
          return (
            <div className="imgNews" key={index}>
              <Link to={`/news_detail/${item.uniquekey}`}>
                <div>
                  <img style={{width:imgWidth}} src={item.thumbnail_pic_s} alt=""/>
                </div>
                <div>
                  <h3 style={{width:imgWidth}}>{item.title}</h3>
                  <p style={{width:imgWidth}}>{item.author_name}</p>
                </div>
              </Link>
            </div>
          )
        })
       )
       :'没有新闻推送';

        return (
          <div>
            <Card title={title} style={{width,marginBottom:'20px'}}>
              {newsList}
            </Card>
          </div>
        )
      }
    }

//规定组件props属性的数据类型
NewsImg.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  width: React.PropTypes.string.isRequired,
  imgWidth: React.PropTypes.string.isRequired,
};
export default NewsImg