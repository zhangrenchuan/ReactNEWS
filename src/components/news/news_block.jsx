import React from 'react'
import {Card} from 'antd'
import axios from 'axios'
import {Link} from 'react-router'
import '../../componentsCss/news_img_block.css'

class NewsBlock extends React.Component{
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
      let {newsArr} = this.state;
      let newsList = newsArr.length > 0
      ?(
        newsArr.map((item,index) => {
          return (
              <li>
                <Link to={`/news_detail/${item.uniquekey}`}>{item.title}</Link>
              </li>
          )
        })
       )
       :'没有新闻推送';

        return (
          <div>
            <Card>
              <ul>
                {newsList}
              </ul>
            </Card>
          </div>
        )
      }
    }

//规定组件props属性的数据类型
NewsBlock.propTypes = {
  type: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired
};
export default NewsBlock