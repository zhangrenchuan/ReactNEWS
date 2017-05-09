import React from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Menu,
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

//定义常量菜单标签
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
//定义常量TabPane标签
const TabPane = Tabs.TabPane;
//定义常量FormItem标签
const FormItem = Form.Item;



class NewsHeader extends React.Component{
  constructor(props){
    super(props);
    //TODO 初始化状态
    this.state = {
      key:'top',  //按钮默认状态
      username:null,
      userId:null,
      isShow:false  //对话框默认隐藏
    }
  }


  //TODO 定义点击菜单切换key的方法 (onClick参数为解构赋值{item, key, keyPath})
  changeKey = (event) => {
    //判断点击的是否是登录注册的按钮
    if(event.key === 'login'){
        this.setState({
          key:event.key,
          isShow:true   //点击时对话框弹出
        });
      this.props.form.resetFields(); //关闭对话框清除输入框内容
    }
    this.setState({key:event.key});
  };


  //TODO 定义点击对话框(onOk/onCancel)按钮的方法 (通过bind传参修改显示状态为false)
  handleShow = (isShow,event) => {
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
    //验证表单
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

    //获取表单项的参数
    let {r_username,r_password,r_confirmPassword} = this.props.form.getFieldsValue();
    //验证表单
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



  //TODO 处理点击退出按钮的方法
  handleOut = () =>{
    this.setState({
      username:null,
      userId:null
    });
    localStorage.removeItem('user_KEY'); //退出后删除用户信息
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


  render(){
    //TODO 获取初始化状态
    let {key,username,userId,isShow} = this.state;

    //TODO 用户登录菜单框 登录和未登录的
    let UserMenu = username
    ?(
      <MenuItem key="person" className="register">
        <Button type='primary'>{username}</Button>
        <Button type='Ghost'><Link to="/user_center">个人中心</Link></Button>
        <Button type="danger" onClick={this.handleOut}>退出</Button>
      </MenuItem>
     )
    :(
      <MenuItem key="login" className="register">
        <Icon type="user"/>登录/注册
      </MenuItem>
     );

    //TODO 定义form 对象的方法
    let {getFieldDecorator} = this.props.form;

    return (
        <div>
          <Row>
            <Col span={1}></Col>
            <Col span={4}>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo"/>
                  <span>ReactNEWS</span>
                </Link>
              </div>
            </Col>
            <Col span={18}>
              <Menu onClick={this.changeKey} mode="horizontal" selectedKeys={[key]}>
                <MenuItem key="top">
                  <Link to="/"><Icon type="notification"/>头条</Link>
                </MenuItem>
                <MenuItem key="guonei">
                  <Icon type="copy"/>国内
                </MenuItem>
                <MenuItem key="guoji">
                  <Icon type="global"/>国际
                </MenuItem>
                <MenuItem key="qiche">
                  <Icon type="car"/>汽车
                </MenuItem>
                <SubMenu key="shehui" title={<span><Icon type="api" /><span>社会</span></span>}>
                  <MenuItem key="1">热点聚焦</MenuItem>
                  <MenuItem key="2">人文轶事</MenuItem>
                  <MenuItem key="3">街坊闲话</MenuItem>
                  <MenuItem key="4">都市闲情</MenuItem>
                </SubMenu>
                <SubMenu key="tiyu" title={<span><Icon type="trophy" /><span>体育</span></span>}>
                  <MenuItem key="5">国内体育</MenuItem>
                  <MenuItem key="6">国际体育</MenuItem>
                  <MenuItem key="7">篮球</MenuItem>
                  <MenuItem key="8">足球</MenuItem>
                </SubMenu>
                <SubMenu key="keji" title={<span><Icon type="github" /><span>科技</span></span>}>
                  <MenuItem key="9">手机</MenuItem>
                  <MenuItem key="10">电脑</MenuItem>
                  <MenuItem key="11">软件</MenuItem>
                  <MenuItem key="12">硬件</MenuItem>
                </SubMenu>
                <SubMenu key="shishang" title={<span><Icon type="shopping-cart" /><span>购物</span></span>}>
                  <MenuItem key="13">淘宝</MenuItem>
                  <MenuItem key="14">京东</MenuItem>
                  <MenuItem key="15">亚马逊</MenuItem>
                  <MenuItem key="16">国美在线</MenuItem>
                </SubMenu>
                {UserMenu}
              </Menu>
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
            </Col>
            <Col span={1}></Col>
          </Row>
        </div>
    )
  }
}

//可以获取 this.props.form
export default Form.create()(NewsHeader);

