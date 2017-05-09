import React from 'react';
import axios from 'axios'
import {Card,Form,Input,Button,Row,Col,message,notification } from 'antd';

const FormItem = Form.Item;

class NewsComments extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        comments: []
      }
    }

    //将要挂载时发送ajax数据
    componentWillMount(){
      let {newsId} = this.props;
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${newsId}`;

      axios.get(url)
        .then(response =>{
          let comments = response.data.map((item,index)=>{
            return {
              username: item.UserName,
              comment : item.Comments,
              time: item.datetime
            }
          });
          //更新状态
          this.setState({comments})
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    //提交评论的方法
    handleSubmit = (event)=>{
      //取消默认行为
      event.preventDefault();
      // 获取userId
      let userId = JSON.parse(localStorage.getItem('user_KEY') || '[]').userId;
      // 判断userId 用户是否登录
      if(!userId){
        message.warn('登录后评论');
        return
      }
      //获取新闻列表ID
      let {newsId} = this.props;
      //获取评论内容
      let comment = this.props.form.getFieldValue('comment');

      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${userId}&uniquekey=${newsId}&commnet=${comment}`
      //发送提交请求
      axios.get(url)
        .then(response =>{
            message.success('提交评论成功');
            this.componentWillMount();
            this.props.form.resetFields();
        })
        .catch(error =>{
          console.log(error.message);
        })  
    };

    //收藏文章的方法
    handleCollection = ()=>{
      // 获取userId
      let userId = JSON.parse(localStorage.getItem('user_KEY') || '[]').userId;
      // 判断userId 用户是否登录
      if(!userId){
        message.info('登录后收藏');
        return
      }
      //获取新闻列表ID
      let {newsId} = this.props;

      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${userId}&uniquekey=${newsId}`;
      //发送提交请求
      axios.get(url)
        .then(response =>{
          notification.success({
            message:"ReactNEWS友情提示",
            description:"收藏文章成功"
          });
        })
        .catch(error =>{
          console.log(error.message);
        })
    };

    //评论同步
    componentWillReceiveProps(nextProps){
      this.componentWillMount()
    }

    render(){
        let {comments} = this.state;
        let commentsList = comments.map((item,index)=>{
          return (
              <Card key={index}
                    title={item.username}
                    extra={<p style={{color:'red'}}>{`发布于:${item.time}`}</p>}>

                {item.comment}

              </Card>
          )
        });
        let {getFieldDecorator} = this.props.form;
        return (
          <div>

            {commentsList}

            <Form onSubmit={this.handleSubmit}>
              <FormItem label="您的评论" labelCol={{span:12}}>
                {
                  getFieldDecorator('comment')(
                      <Input type="textarea" placeholder="请输入评论"/>
                  )
                }
              </FormItem>

              <Row>
                <Col span={12} push={9}>
                  <Button htmlType="submit" type="primary">提交评论</Button>&nbsp;&nbsp;
                  <Button onClick={this.handleCollection} type="primary">收藏该文章</Button>
                </Col>
              </Row>

            </Form>

          </div>
        )
      }
    }

export default Form.create()(NewsComments)