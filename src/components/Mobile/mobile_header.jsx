import React from 'react';
import axios from 'axios';
import {
  Icon,
  Button,
  Checkbox,
  Modal,
  Tabs,
  Form,
  Input,
  message
} from 'antd';
import {Link} from 'react-router'


//引入logo图片
import logo from '../../images/logo.png';

//定义常量TabPane标签
const TabPane = Tabs.TabPane;
//定义常量FormItem标签
const FormItem = Form.Item;



class MobileNewsHeader extends React.Component{
  constructor(props){
    super(props);
    //TODO 初始化状态
    this.state = {
      username:null,
      userId:null,
      isShow:false  //对话框默认隐藏
    }
  }


  //TODO 定义点击对话框(onOk/onCancel)按钮的方法 (通过bind传参修改显示状态为false)
  handleShow = (isShow,event) => {
      console.log('这是isShow的状态:',isShow,'这是event事件:',event);
      this.setState({isShow})
  };


  //TODO 处理表单项登录的方法
  handlelogin = (event) => {
    // 阻止默认行为
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    //获取表单项的参数
    let {username,password} = this.props.form.getFieldsValue();

    if(username === undefined && password === undefined){
      return
    }

    //url
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}`;

    //ajax请求
    axios.get(url)
      .then(response => {
        let data = response.data;
          //判断登录是否成功
          if(!data){
            message.error('登录失败,请重试');
          }else{
            console.log('登录成功');
            message.success('登录成功');
            //登录成功后修改用户状态
            this.setState({
              username:data.NickUserName,
              userId:data.UserId
            });
            //修改对话框为隐藏状态
            this.setState({
              isShow:false
            });
            //保存用户登录信息到localStorage中
            let {username,userId} = this.state;
            localStorage.setItem('user_KEY',JSON.stringify({username,userId}))
          }
        })
  };


  //TODO 定义表单注册的方法
  handleregister = (event) =>{
    // 阻止默认行为
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    let {r_username,r_password,r_confirmPassword} = this.props.form.getFieldsValue();

    if(r_username === undefined || r_password === undefined || r_confirmPassword === undefined || r_password !== r_confirmPassword){
      return
    }else{
      let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_username=${r_username}&r_password=${r_password}&r_confirmPassword=${r_confirmPassword}`;
      //发ajax请求
      axios.get(url)
        .then(response => {
          let data = response.data;
          if(data){
            console.log('注册成功');
            message.success('注册成功');
            //修改对话框为隐藏状态
            this.setState({
              isShow:false
            })
          }
        })
    }
  };


  //TODO 读取保存的用户信息(在将要挂载的时候)
  componentWillMount(){
    let user = JSON.parse(localStorage.getItem('user_KEY'));

    //判断 user 是否有值
    if(user){ //读取到就更新状态
      this.setState({
        username:user.username,
        userId:user.userId
      })
    }
  }


  //TODO 处理点击退出按钮的方法
  handleOut = () =>{
    this.setState({
      username:null,
      userId:null
    });
    localStorage.removeItem('user_KEY'); //退出后删除用户信息
  };

  render(){
    //TODO 获取初始化状态
    let {username,userId,isShow} = this.state;

    //TODO 用户登录菜单框 登录和未登录的
    const UserMenu = username
        ?
        <div>
          <Link to='/user_center'>
            <Icon className="i1" type="home"/>
          </Link>
          <Icon className="i2" type="poweroff" onClick={this.handleOut}/>
        </div>
        :
        <Icon type="desktop" onClick={this.handleShow.bind(this, true)}/>


    //TODO 定义form 对象的方法
    let {getFieldDecorator} = this.props.form;
    return (
        <div id="mobileheader">
          <header>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo"/>
                <span>ReactNEWS</span>
              </Link>
              {UserMenu}
            </div>
          </header>
		      <Modal title="用户中心" visible={isShow}
                   okText='关闭' onOk={this.handleShow.bind(this,false)}
                   onCancel={this.handleShow.bind(this,false)}>
              <Tabs type="card" onChange={()=>this.props.form.resetFields()}>
                <TabPane tab={<span><Icon type="desktop" />登录</span>} key="1">
                  <Form onSubmit={this.handlelogin}>
                    <FormItem label='用户名'>
                      {
                        getFieldDecorator('username',{
                          rules: [{ required: true, message: '必须输入用户名!' }],
                        })(
                            <Input type="text" placeholder="请输入用户名" prefix={<Icon type="user" />}/>
                        )
                      }
                    </FormItem>
                    <FormItem label='密码'>
                      {
                        getFieldDecorator('password',{
                          rules: [{ required: true, message: '必须输入密码!' }],
                        })(
                            <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock" />}/>
                        )
                      }
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(
                          <Checkbox>记住我!</Checkbox>
                      )}
                      <a className="login-form-forgot" href="#">忘记密码?</a>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>
                    </FormItem>
                  </Form>
                </TabPane>
                <TabPane tab={<span><Icon type="user-add" />注册</span>} key="2">
                  <Form onSubmit={this.handleregister}>
                    <FormItem label='用户名'>
                      {
                        getFieldDecorator('r_username',{
                          rules: [{ required: true, message: '必须输入用户名!' }],
                        })(
                            <Input type="text" placeholder="请输入用户名" prefix={<Icon type="user" />}/>
                        )
                      }
                    </FormItem>
                    <FormItem label='密码'>
                      {
                        getFieldDecorator('r_password',{
                          rules: [{ required: true, message: '必须输入密码!' }],
                        })(
                            <Input type="password" placeholder="请输入密码" prefix={<Icon type="lock" />}/>
                        )
                      }
                    </FormItem>
                    <FormItem label="确认密码:">
                      {
                        getFieldDecorator('r_confirmPassword',{
                          rules: [{ required: true, message: '必须输入密码!' }],
                        })(
                            <Input type="password" placeholder="请再次输入密码" prefix={<Icon type="lock" />}/>
                        )
                      }
                    </FormItem>
                    <Button type="danger" ghost htmlType='submit' className="register-form-button">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
        </div>
    )
  }
}

//可以获取 this.props.form
export default Form.create()(MobileNewsHeader);

