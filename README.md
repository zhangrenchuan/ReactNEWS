# 新闻资讯项目 React_NEWS
## 第一阶段: 准备
### 1.1 项目描述
- 此项目为新闻咨询的SPA Web App
- PC端, 移动端双端自适应
- 功能模块包括: 首页, 新闻详情, 新闻评论, 个人中心, 用户注册/登陆
- 使用React + ES6 + Webpack+Babel等前端最新最热的技术
- 用户界面主要使用蚂蚁金服基于React的UI库: Ant Design
- 项目采用模块化、组件化、工程化的模式开发

### 1.2 项目功能界面
- 首页
- 注册/登录功能
- 新闻详情页
- 新闻评论区
- 用户个人中心

### 1.3 技术选型
- 前端数据展现\交互\组件化
	- react
	- react-router
	- antd
- 前后台交互
	- axios
	- API接口
	- postman
	- json-server [可选]
- 模块化
	- ES6
	- babel
- 项目构建\工程化
	- webpack
	- react-create-app (脚手架)
	- eslint

### 1.4 前端路由
- 首页
	- 根路由 `:/`  app.jsx
	- 首页默认路由 `IndexRoute` news_container.jsx
- 新闻详情/评论
	- `path="/news_detail/:news_id"`
	- news_detail.jsx
- 个人中心
	- `path="/user_center"`
	- user_center.jsx
	
### 1.5 API接口
- 接口
	- URL
	- 请求方式
	- 请求参数格式
	- 响应数据格式
- 接口文档
- 前后端对接口
- 联调
- 前后台分离
- mock数据

### 1.6.1 React 组件
- app.jsx
	- news_header.jsx
	- news_footer.jsx
	- 子路由
- 子路由
	- news_container.jsx
		- `news_block.jsx`
		- `news_img_block.jsx`
		- `news_product.jsx`
	- news_detail.jsx
		- `news_img_block.jsx`
		- `news_comments.jsx`
	- user_center.jsx
	

----------


	* app.jsx: 应用根路由组件
	* news_header.jsx: 头部组件
	* news_footer.jsx: 底部组件
	* news_container.jsx: 首页显示各种新闻列表组件
	* news_block.jsx: 新闻列表组件
	* news_image_block.jsx: 图片新闻列表组件
	* products.jsx: 产品列表组件
	* news_detail.jsx: 新闻详情组件
	* news_comments.jsx: 新闻评论组件
	* user_center.jsx: 个人中心组件

### 1.6.2 React Antd组件
- Geberal (常规)
	- Button 按钮
	- Icon 图标
- Layout (布局)
	- Row 行
	- Col 列
- Navigation (导航)
	- BackTop 回到顶部
	- Tabs 选项卡
	- Menu 菜单
- Data Entry (数据实体)
	- Form 表单
	- Input 输入框
	- Upload 上传
- Data Display (数据显示)
	- Card 卡片
	- Carousel 走马灯
- Feedback (反馈)
	- Modal 对话框
	- Notification 通知提醒框
	- message 消息提示

### 1.7 npm 常用指令
* npm init  //初始化当前应用包, 生成package.json
* npm install  //根据package.json下载所有依赖包
* npm install packageName --save   //下载某个运行时依赖包
* npm install packageName --save-dev  //下载某个开发编译期依赖包
* npm install packageName -g  //全局下载某个依赖包
* npm install package@version  //下载指定版本的某个依赖包
* npm info packageName  //查看某个包有远程仓库中的相关信息
* npm rm packageName --save  //移除已下载的运行依赖包
* npm rm packageName –save-dev  //移除已下载的开发依赖包
* npm list  //查看安装的所有的包
* npm help  //查看命令的详细帮助
* npm install -g cnpm --registry=https://registry.npm.taobao.org  //安装淘宝镜像
* npm config set registry="https://registry.npm.taobao.org" //将淘宝镜像设置为npm的默认仓库
* npm run xxx //执行package.json的scripts中配置的命令

### 1.8	git常用命令
* git config --global user.name "username"  //配置用户名
* git config --global user.password "xx@gmail.com" //配置邮箱
* git init  //初始化生成一个本地仓库 
* git clone url  //将远程仓库克隆下载到本地 
* git add *   //添加到暂存区 
* git commit –m “message”  //提交到本地仓库 
* git remote add origin url  //关联到远程仓库 
* git push origin master  //push到远程 
* git pull origin master  //从远程pull更新


----------
## 第二阶段: 应用开发分析
### 2.1 使用react-create-app(脚手架)搭建项目
- 全局安装 `npm install -g create-react-app`
- 项目目录搭建 `create-react-app react-news`
- 集成 react-router `npm install react-router@3 --save`
- 集成 axios `npm install axios --save`
- 集成 antd `npm install antd --save`
	- `npm run eject`
	- `npm install babel-plugin-import --save-dev`
	- 修改config/ webpack.config.dev.js
	- ![](http://i.imgur.com/eCA9ol8.jpg)
	- plugins: [['import',[{ libraryName:"antd",style:'css' }]]]


### 2.2 项目结构

	react-news
		|--build -------项目打包文件夹
		|--config-------webpack相关的配置文件夹(基本不需要修改)
			|-- webpack.config.dev.js ---- 开发测试webpack配置
			|-- webpack.config.prod.js ---- 打包的webpack配置
		|--node_modules --- 第三方依赖模块文件夹
		|--public
			|-- index.html ----------------- 主页面
		|--scripts
			|-- build.js ----------------- build打包引用配置
		    |-- start.js ----------------- start运行引用配置
		
		|--src------------源码文件夹
			|--components -------------- react组件
				|-detail_comments ---- 评论区
					|- news_comments.jsx
				|-footer  ------------ 底部内容
					|- news_footer.jsx
				|-header ------------- 顶部内容
					|- news_header_Login_Reg.jsx
				|-Mobile ------------- 移动端适配页面
				|-news --------------- 新闻区内容
				|-app.jsx  --------- 主组件
				|-news_container.jsx 首页显示的新闻
				|-news_detail.jsx -- 新闻详情页
				|-user_center.jsx -- 个人中心
			|--componentsCss ----------- react样式
			|--images ------------------ 本地图片
			|--index.js ----------------- 应用入口js
		
		|--.gitignore------git版本管制忽略的配置
		|--package.json----应用包配置文件 
		|--README.md-------应用描述说明的readme文件

----------
## 第三阶段: 基本路由实现
### `index.js`

	import React from 'react'
	import ReactDOM from 'react-dom'
	import {Router,Route,IndexRoute,hashHistory} from 'react-router'
	
	import App from './components/app'
	import NewsContainer from './components/news_container'
	import NewsDetail from './components/news_detail'
	import UserCenter from './components/user_center'
	
	ReactDOM.render(
	    (
		  <Router history={hashHistory}>
	        <Route path="/" component={App}>
	          <IndexRoute component={NewsContainer}></IndexRoute>
	          <Route path="/news_detail/:news_id" component={NewsDetail}></Route>
	          <Route path="/user_center" component={UserCenter}></Route>
	        </Route>
	      </Router>
	    ),
	    document.getElementById('root')
	);

### `app.jsx`
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

### 样式资源 componentsCss \ `PCindex.css`
	body{
	  /*min-width: 1024px;*/
	  max-width: 1366px;
	  margin: 0 auto;
	}
	
	/*header组件*/
	/*应用图标和名称*/
	.logo {
	  align-items: center;
	  display: flex;
	}
	.logo img {
	  width: 48px;
	  height: 48px;
	}
	.logo span {
	  font-size: 24px;
	  padding-left: 5px;
	}
	
	/*注册/登陆*/
	.register {
	  float: right !important; /*优先级最高*/
	}
	.login-form-forgot{
	  float: right;
	}
	.login-form-button{
	  width: 100%;
	}
	.register-form-button{
	  width: 100%;
	  color: #fff;
	  background-color: pink;
	}
	/*Footer组件*/
	.footer {
	  text-align: center;
	  padding-top: 20px;
	}
	
	/*news_container/news_detail组件*/
	.container {
	  text-align: center;
	  padding-top: 10px;
	  margin-top: 5px;
	}
	.leftContainer {
	  width: 400px;
	  float: left;
	}
	/*水平导航*/
	.ant-menu-horizontal>.ant-menu-item>a, .ant-menu-horizontal>.ant-menu-submenu>a {
	  display: inline-block !important;
	}
	/*新闻列表*/
	.tabs_news {
	  padding-left: 10px;
	  width: 400px;
	  float: left;
	}
	.tabs_news li {
	  height: 27px;
	  line-height: 27px;
	  font-size: 14px;
	  white-space: nowrap;
	  overflow: hidden;
	  width: 417px;
	  float: left;
	  text-overflow: ellipsis;
	}
	/*产品列表*/
	.tabs_product {
	  width: 300px;
	  padding-left: 10px;
	  float: left;
	}
	.tabs_product li {
	  height: 27px;
	  line-height: 27px;
	  font-size: 14px;
	  white-space: nowrap;
	  overflow: hidden;
	  width: 257px;
	  text-overflow: ellipsis;
	}
	/*轮播图*/
	.carousel {
	  width: 400px;
	  float: left;
	}
	.carousel img {
	  width: 400px;
	  height: 260px;
	}
	
	/*image_block/news_block组件*/
	.imageblock {
	  float: left;
	}
	.custom-card {
	  padding: 5px;
	}
	.custom-card p {
	  color: #999;
	}
	.topNewsList {
	  float: left;
	  text-align: left;
	  font-size: 14px;
	  margin-bottom: 10px;
	}
	.topNewsList a {
	  line-height: 22px !important;
	  color: #666 !important;
	}
	
	.ant-card{
	  margin-top: 5px !important;
	}
	.ant-card-head-title{
	  text-align: left !important;
	}
	.ant-card-body{
	  text-align: left !important;
	  padding: 15px !important;
	}
	.ant-tabs-bar {
	  margin-bottom: 0 !important;
	}
	
	/*news_detail组件*/
	.title,.article-title .title {
	  font-size: 22px !important;
	  line-height: 1.4em
	}
	.article-src-time {
	  font-size: 0.3rem !important;
	}
	.article-content .txt {
	  font-size: 0.36rem !important;
	}
	.article {
	  text-align: justify
	}
	.article-content .img .img-wrap,.hot-news img {
	  background-repeat: no-repeat;
	  background-position: center
	}
	.hn-title h2,.in-title h2 {
	  z-index: 1;
	  font-weight: 600
	}
	#title {
	  margin: 16px 16px 0!important;
	  border-bottom: 1px solid #e5e5e5
	}
	.article-title {
	  margin-bottom: .2rem
	}
	#title .title,.article-title .title {
	  font-size: 1.44rem;
	  line-height: 1.4em
	}
	.title {
	  color: #000
	}
	.article-src-time {
	  font-size: 1rem;
	  color: #999;
	  padding-bottom: .2rem
	}
	.article-content .section {
	  line-height: 1.6em;
	  margin-bottom: .3rem;
	  margin-top: 0
	}
	.article-content .txt {
	  font-size: 1.36rem
	}
	.article-content .img {
	  margin-bottom: .3rem
	}
	.article-content .img .img-wrap {
	  position: relative;
	  display: block;
	  width: 100%;
	  height: 0;
	  overflow: hidden;
	  background-size: 40%
	}
	#content {
	  margin: .3rem 16px 16px
	}
	.article-content .img .img-wrap img {
	  position: absolute;
	  left: 0;
	  top: 0;
	  display: block;
	  width: 60%
	}
	.article-content .img .txt-wrap {
	  font-size: .36rem;
	  line-height: 2em
	}
	
	
	/*user_center组件*/
	.uc_setting{
	  margin-top: 20px;
	}
	
	/**网易代码引入演示**/
	.productlinks {
	  width: 298px;
	  height: 380px;
	  margin-top: 6px;
	  background: #F7F7F7;
	  -webkit-transition: all .3s;
	  -moz-transition: all .3s;
	  -o-transition: all .3s;
	  transition: all .3s;
	}
	
	.productlinks-item {
	  text-align: left;
	  float: left;
	  width: 290px;
	  position: relative;
	  z-index: 1;
	  padding: 13px 0 13px 10px;
	  line-height: 25px;
	  -webkit-transition: all .3s;
	  -moz-transition: all .3s;
	  -o-transition: all .3s;
	  transition: all .3s;
	}
	
	.productlinks-i {
	  text-indent: -10em;
	}
	
	.productlinks-item strong {
	  position: absolute;
	  z-index: 2;
	  left: 0;
	  top: 50%;
	  margin-top: -20px;
	  overflow: hidden;
	  width: 40px;
	  height: 40px;
	}
	
	.productlinks-item a {
	  padding: 0 4px 0 0;
	  white-space: nowrap;
	}
	
	.productlinks-item .last, .productlinks-item .pr0 {
	  padding: 0;
	}
	
	.productlinks-item .pr2 {
	  padding-right: 2px;
	}
	
	.changeview .productlinks-item {
	  padding: 4px 0 3px 50px;
	}
	
	.changeview .productlinks {
	  height: 300px;
	  margin-top: 56px;
	}
	
	.item-mail, .item-sns {
	  background: #fff;
	}
	
	.productlinks-i-mail, .productlinks-i-game, .productlinks-i-sns, .productlinks-i-recommend {
	  width: 40px;
	  height: 40px;
	  text-indent: -10em;
	  position: absolute;
	  z-index: 3;
	}
	
	.productlinks-i-mail {
	  background-position: 12px -167px;
	}
	
	.productlinks-i-game {
	  background-position: 7px -217px;
	}
	
	.productlinks-i-sns {
	  background-position: 12px -262px;
	}
	
	.productlinks-i-recommend {
	  background-position: 12px -308px;
	}
	
	.ntes-nav-select-unfold .productlinks-mail-fold {
	  display: block;
	}
	
	.productlinks-mail-fold {
	  position: absolute;
	  z-index: 100;
	  width: 118px;
	  height: 154px;
	  top: -163px;
	  left: -36px;
	  display: none;
	  background: url(http://img2.cache.netease.com/www/v2013/img/bg_fmail_v3.png) left top no-repeat;
	}
	
	.productlinks-mail-warp {
	  position: relative;
	  z-index: 100;
	  background: none;
	}
	
	.productlinks-fold-163, .productlinks-fold-126, .productlinks-fold-yeah, .productlinks-fold-mob {
	  float: left;
	  display: inline;
	  width: 116px;
	  height: 34px;
	  text-indent: -100em;
	  overflow: hidden;
	  margin-left: 1px;
	  margin-bottom: 1px;
	}
	
	.productlinks-fold-163 {
	  margin-top: 1px;
	}

### 图片资源
![](http://i.imgur.com/cNU72HM.jpg)


----------
## 第四阶段: 各组件实现
### header \ `news_header_Login_Reg.jsx` 组件
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


----------

### footer \ `news_footer.jsx` 组件

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

### componentsCss \ `news_footer.css`
	.news_footer{
	  text-align: center;
	  font-size: 16px;
	}

----------
### news\ `news_block.jsx` 组件
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

### componentsCss \ `news_img_block.css`
	.imgNews{
	  float: left;
	  margin-right: 12px;
	  margin-bottom: 10px
	}
	
	.imgNews h3{
	  /*不换行*/
	  white-space: nowrap;
	  overflow: hidden;
	  /*文本溢出显示省略号*/
	  text-overflow: ellipsis;
	  color: #666;
	}

----------

### news \ `news_img_block.jsx` 组件

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

----------

### news \ `news_product.jsx` 组件

	import React from 'react'
	
	class NewsProduct extends React.Component{
	    render(){
	        return (
	          <div>
	            <div className="pro pro_bg">
	              <a href="http://im.qq.com/">腾讯软件</a>
	              <a href="http://mail.qq.com/">腾讯邮箱</a>
	              <a href="http://vip.qq.com/">腾讯会员</a>
	              <a href="http://pcmgr.qq.com/?ADTAG=tr.pcmgr.qqcom.QQCOM">电脑管家</a>
	              <a href="http://news.qq.com/">腾讯新闻</a>
	              <a href="http://winxin.qq.com/">微信</a>
	              <a href="http://qzone.qq.com/">QQ空间</a>
	              <a href="http://ke.qq.com/">腾讯课堂</a>
	              <a href="http://browser.qq.com/">QQ浏览器</a>
	              <a href="http://www.jd.com/">京东</a>
	              <a href="http://pay.qq.com/">QQ币</a>
	              <a href="http://sports.qq.com/">腾讯体育</a>
	              <a href="http://auto.qq.com/">腾讯汽车</a>
	              <a href="http://stock.qq.com/">腾讯证券</a>
	              <a href="http://house.qq.com/">腾讯房产</a>
	              <a href="http://ent.qq.com/">腾讯娱乐</a>
	            </div>
	            <div className="pro">
	              <a href="http://lol.qq.com/">LOL</a>
	              <a href="http://cf.qq.com/">CF</a>
	              <a href="http://dnf.qq.com/">DNF</a>
	              <a href="http://dn.qq.com/">龙之谷</a>
	              <a href="http://iwan.qq.com/">爱玩</a>
	              <a href="http://nz.qq.com/">逆战</a>
	              <a href="http://huoying.qq.com/">火影OL</a>
	              <a href="http://pvp.qq.com/">王者荣耀</a>
	              <a href="http://game.qq.com/">腾讯游戏</a>
	              <a href="http://x5.qq.com/">QQ炫舞</a>
	            </div>
	            <div className="pro pro_bg">
	              <a href="http://xyq.163.com/">梦幻西游</a>
	              <a href="http://my.163.com/">梦幻西游手游</a>
	              <a href="http://xy2.163.com/">新大话2</a>
	              <a href="http://play.163.com/blizzard/">暴雪综合</a>
	              <a href="http://play.163.com/ow/">守望先锋</a>
	              <a href="http://d.163.com/">暗黑破坏神</a>
	              <a href="http://w.163.com/">魔兽世界</a>
	              <a href="http://play.163.com/hs/">炉石传说</a>
	              <a href="http://play.163.com/fb/">风暴英雄</a>
	              <a href="http://play.163.com/sc/">星际争霸</a>
	            </div>
	            <div className="pro">
	              <a href="http://sitemap.163.com/" className="productlinks-i-recommend">推荐</a>
	              <a href="http://888.163.com/?from=tgnh2">1元购</a>
	              <a href="https://pop.lmlc.com/web/activity/practice/index.html?from=tgn163productlist2">赚钱</a>
	              <a href="http://fa.163.com/?from=tgn163cp">贵金属</a> <a href="http://caipiao.163.com/#from=www">彩票</a>
	              <a href="http://baoxian.163.com/car/?from=wycp">车险</a>
	              <a href="http://qian.163.com/">有钱</a>
	              <a href="http://cidian.youdao.com/">有道词典</a>
	              <a href="http://fanyi.youdao.com/?vendor=163homepage">翻译</a>
	              <a href="http://note.youdao.com/?vendor=163index" className="pr0">云笔记</a>
	              <a href="http://yxp.163.com/">印像派</a>
	              <a href="http://open.163.com/">公开课</a>
	              <a href="http://you.163.com?from=web_in_wyshouye">严选</a>
	              <a href="http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">云课堂</a>
	              <a href="http://yuedu.163.com">云阅读</a>
	              <a href="http://music.163.com/#f=index_productlist">云音乐</a>
	              <a href="http://trip.163.com/">火车票</a>
	              <a href="http://mall.163.com/?from=mmwww">商城</a>
	              <a href="http://gzy.mail.163.com/?from=163product">公正邮</a>
	              <a href="http://1.163.com/?from=portal163cp">1元夺宝</a>
	              <a href="http://i.money.163.com/?imb1">财经客户端</a>
	              <a href="http://www.163.com/newsapp/">新闻客户端</a>
	              <a href="http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">大学MOOC</a>
	            </div>
	            <div className="pro pro_bg">
	              <a href="http://email.163.com/#from=ntes_product">免费邮</a>
	              <a href="http://mail.163.com/#from=ntes_product">163邮箱</a>
	              <a href="http://mail.126.com/#from=ntes_product">126邮箱</a>
	              <a href="http://www.yeah.net/#from=ntes_product">yeah邮箱</a>
	              <a href="http://mail.163.com/index.htm#tab=tab2&from=ntes_product">免费注册手机帐号</a>
	              <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
	              <a href="http://qiye.163.com/">企业邮箱</a>
	              <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
	              <a href="http://yixin.im">易信</a>
	              <a href="http://rd.da.netease.com">考拉海购</a>
	              <a href="http://www.lofter.com/?act=qb163rk_20141031_12">LOFTER</a>
	              <a href="http://blog.163.com/?fromService">博客</a>
	              <a href="http://cc.163.com/">CC语音</a>
	              <a href="http://www.bobo.com/">BoBo直播</a>
	              <a href="http://y.163.com/download/index?from=wscp">美聊</a>
	              <a href="http://tie.163.com/">跟贴</a>
	              <a href="http://rd.da.netease.com/redirect?t=f9vnCt&p=fvxKel&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F">秀品</a>
	              <a href="http://photo.163.com/" className="pr0">相册</a>
	              <a href="http://love.163.com/?from=wscp">花田</a>
	              <a href="http://yuehui.163.com/?from=wscp">约会</a>
	              <a href="http://manhua.163.com/">漫画</a>
	              <a href="http://x.163.com?source=163webproduct">青果</a>
	            </div>
	          </div>
	        )
	      }
	    }
	export default NewsProduct

----------

### `news_container.jsx` 组件
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

### componentsCss \ `news_container.css`
	/*设置新闻页面样式*/
	.news_Container{
	  margin-top: 15px;
	}
	/*设置轮播图宽度*/
	.leftCont{
	  width: 500px;
	  float: left;
	}
	
	/*页签新闻样式*/
	.news_tabs{
	  float: left;
	  width: 450px;
	  padding-left: 10px;
	  margin-bottom: 5px;
	}
	
	.news_tabs a{
	  display: block;
	
	  font-size: 14px;
	
	  /*设置文本样式*/
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	
	  color: #666666;
	}
	
	/*右页签链接样式*/
	.news_product{
	  float: left;
	  width: 300px;
	
	  padding-left: 10px;
	  margin-bottom: 5px;
	}
	
	/*设置外链样式*/
	.pro{
	  padding: 5px;
	  overflow: hidden;
	  font-size: 15px;
	}
	.pro a{
	  float: left;
	  line-height: 30px;
	  margin-right: 8px;
	}
	.pro_bg{
	  background-color: #eee;
	  margin-top: 10px;
	}

----------
### detail_comments \ `news_comments.jsx` 组件
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
                <Col span={6} push={9}>
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

----------

### `news_detail.jsx` 组件
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

----------
### `user_center.jsx` 组件
	import React from 'react';
	import {
	  Row,
	  Col,
	  Tabs,
	  Card,
	  Upload,
	  Modal,
	  Icon
	} from 'antd'
	import axios from 'axios'
	import {Link} from 'react-router'
	const TabPane = Tabs.TabPane;

    class UserCenter extends React.Component{
	  constructor(props){
	    super(props);
	    this.state={
	      comments:[],
	      collections:[],

      //上传头像初始化设置
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
     }
    }

	  //上传头像定义的方法
	  handleCancel = () => this.setState({ previewVisible: false });
	  handlePreview = (file) => {
	    this.setState({
	      previewImage: file.url || file.thumbUrl,
	      previewVisible: true,
	    });
	  };
	  handleChange = ({ fileList }) => this.setState({ fileList });

    //将要挂在时获得数据
    componentWillMount(){
    //获取评论列表数据
    let userId = JSON.parse(localStorage.getItem('user_KEY')).userId;
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userId}`;

    axios.get(url)
      .then(response =>{
        let comments = response.data;
        this.setState({comments})
      })
      .catch(error =>{
        console.log(error.message);
      });

    //获取收藏列表数据
    url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userId}`;
    axios.get(url)
      .then(response =>{
        let collections = response.data;
        this.setState({collections})
      })
      .catch(error =>{
        console.log(error.message);
      });
    }


    render(){

    let {comments,collections} = this.state;
    let commentsList = comments.length > 0
    ?(
      comments.map((item,index)=>{
        return(
            <Card key={index} title={`于:${item.datetime}评论了${item.uniquekey}`} extra={<p style={{color:'blue'}}><Link to={`/news_detail/${item.uniquekey}`}>查看</Link></p>}>
              {item.Comments}
            </Card>
        )
      })
    ):'目前没有任何评论';

    let collectionsList = collections.length > 0
    ?(
      collections.map((item,index)=>{
        return(
            <Card key={index} title={item.uniquekey} extra={<p style={{color:'blue'}}><Link to={`/news_detail/${item.uniquekey}`}>查看</Link></p>}>
              {item.Title}
            </Card>
         )
      })
    )
    :'目前没有任何收藏文章';

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div>
          <Row>
            <Col span={1}></Col>
            <Col span={22}>
              <Tabs>
                <TabPane tab="我的评论列表" key="1">
                  {commentsList}
                </TabPane>
                <TabPane tab="我的收藏列表" key="2">
                  {collectionsList}
                </TabPane>
                <TabPane tab="头像设置" key="3">
                  <div className="clearfix">
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
						            multiple="true"
                    >
                      {fileList.length >= 10 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
            <Col span={1}></Col>
          </Row>
        </div>
      )
     }
    }
    export default UserCenter

----------
## 第五阶段  移动端适配
### React扩展库: react-responsive
- [https://github.com/contra/react-responsive](https://github.com/contra/react-responsive "react-responsive")
- 项目安装 `npm install react-responsive --save`
- 引入 `import MediaQuery from 'react-responsive'`

### 两套适配处理不同窗口的情况 `index.js`
	import React from 'react'
	import ReactDOM from 'react-dom'
	import {Router,Route,IndexRoute,hashHistory} from 'react-router'
	import MediaQuery from 'react-responsive'
	
	import App from './components/app'
	import NewsContainer from './components/news_container'
	import NewsDetail from './components/news_detail'
	import UserCenter from './components/user_center'
	
	import MobileApp from './components/Mobile/mobile_app'
	import MobileNewsContainer from './components/Mobile/mobile_container'
	import MobileNewsDetail from './components/Mobile/mobile_detail'
	import MobileUserCenter from './components/Mobile/mobile_center'


    ReactDOM.render(
     (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={NewsContainer}></IndexRoute>
              <Route path="/news_detail/:news_id" component={NewsDetail}></Route>
              <Route path="/user_center" component={UserCenter}></Route>
            </Route>
          </Router>
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={MobileApp}>
              <IndexRoute component={MobileNewsContainer}></IndexRoute>
              <Route path="/news_detail/:news_id" component={MobileNewsDetail}></Route>
              <Route path="/user_center" component={MobileUserCenter}></Route>
            </Route>
          </Router>
        </MediaQuery>
      </div>
    ),
     document.getElementById('root')
    );

----------

### 移动端适配的样式 componentsCss \ `mobile.css`
	html{
	    font-size: 50px;
	}
	
	/*header组件*/
	#mobileheader{
	    flex: 1;/*使得内部子元素 的宽度一样， 忽略内部的内容*/
	    background: #f6f6f6;
	}
	#mobileheader header{
	    border-bottom: 1px solid #2db7f5;
	    padding-left: 10px;
	    position: relative;
	}
	#mobileheader header img{
	    height: 50px;
	}
	#mobileheader header span{
	    font-size: 35px;
	    vertical-align: top;
	    padding-left: 5px;
	    color: #2db7f5;
	}
	/*个人中心按钮*/
	.i1{
	    font-size: 0.5rem;
	    position: absolute;
	    top:15px;
	    right:45px;
	    color:#2db7f5;
	}
	/*退出按钮*/
	.i2{
	    font-size: 0.5rem;
	    position: absolute;
	    top:15px;
	    right:10px;
	    color:#2db7f5;
	}
	#mobileheader ul li{
	    font-size: 30px;
	}
	#mobileheader .slick-list img{
	    height: 220px;
	    width:100%;
	}
	
	/*news_block组件*/
	.m_article{font-size:14px;padding:.2rem 0;border-bottom:1px solid #e5e5e5;margin:0 .3rem}
	.m_article .m_article_img{float:left;width:27%;height:1.4rem;overflow:hidden;position:relative;margin-right:.2rem}
	.m_article .m_article_img img{width:100%;display:block;min-height:1.4rem}
	.m_article .m_article_desc .m_article_channel{display:inline-block;color:rgba(255,51,51,0.9);font-size:12px;padding:2px;line-height:12px;margin-right:.1rem;background:url(http://img2.cache.netease.com/f2e/wap/common/images/border_red.png) no-repeat;background-size:100% 100%}
	.m_article .m_article_desc .m_article_time{font-size:.24rem;color:#888;display:inline-block}
	.m_article .m_article_desc .m_article_desc_l{float:left}
	.m_article .m_article_info{overflow:hidden;padding-bottom:4px}
	.m_article .m_article_info .m_article_title{text-align: left;font-size:.34rem;margin-bottom:.2rem;color:#404040;line-height:.42rem;width:100%;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;-webkit-line-break:auto;-webkit-box-orient:vertical}
	
	/*news_detail组件*/
	#mobileDetailsContainer .title,.article-title .title {
	    font-size: 0.44rem !important;
	    line-height: 1.4em
	}
	#mobileDetailsContainer .article-src-time {
	    font-size: 0.3rem !important;
	}
	#mobileDetailsContainer .article-content .txt {
	    font-size: 0.36rem;
	}
	#mobileDetailsContainer .ant-row{
	    margin-top: 20px;
	}


----------

### Mobile \ `mobile_app.jsx` 组件
	import React from 'react';
	import MobileNewsHeader from './mobile_header'
	import NewsFooter from '../footer/news_footer'
	import '../../componentsCss/mobile.css'
	
	class MobileApp extends React.Component{
	    render(){
	        return (
	          <div>
	            <MobileNewsHeader />
	            {this.props.children}
	            <NewsFooter/>
	          </div>
	        )
	      }
	    }
	
	export default MobileApp

----------

### Mobile\ `mobile_header.jsx` 组件
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


----------
### Mobile \ `mobile_news_block.jsx` 组件
	import React from 'react'
	import {Card} from 'antd'
	import {Link} from 'react-router'
	import axios from 'axios'
	
	/**
	 * mobile端新闻列表组件
	 */
	export default class MobileNewsBlock extends React.Component{
	
	  constructor () {
	    super();
	    this.state = {
	      newsArr: []
	    }
	  }

    componentDidMount () {
    const {type, count} = this.props;
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
    axios.get(url)
        .then(response => {
          const newsArr = response.data;
          this.setState({newsArr})
        })
    }

    render () {
    const {newsArr} = this.state;
    const newsList = newsArr.length
        ? newsArr.map((newsItem, index) => (
            <Card key={index} className="m_article list-item special_section clearfix">
              <Link to={`news_detail/${newsItem.uniquekey}`}>
                <div className="m_article_img">
                  <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                </div>
                <div className="m_article_info">
                  <div className="m_article_title">
                    <span>{newsItem.title}</span>
                  </div>
                  <div className="m_article_desc clearfix">
                    <div className="m_article_desc_l">
                      <span className="m_article_channel">{newsItem.realtype}</span>
                      <span className="m_article_time">{newsItem.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
        ))
        : '没有加载到任何新闻';
    return (
        <div>
          {newsList}
        </div>
       )
     }
    }
 
	MobileNewsBlock.propTypes = {
	  type: React.PropTypes.string.isRequired,
	  count: React.PropTypes.number.isRequired,
	};


----------
### Mobile \ `mobile_container.jsx` 组件
	import React from 'react'
	import {
	  Carousel,
	  Tabs
	} from 'antd'
	const TabPane = Tabs.TabPane;
	
	import MobileNewsBlock from './mobile_news_block'
	
	import carousel_1 from '../../images/carousel_1.jpg'
	import carousel_2 from '../../images/carousel_2.jpg'
	import carousel_3 from '../../images/carousel_3.jpg'
	import carousel_4 from '../../images/carousel_4.jpg'
	
	/**
	 * mobile端首页主体组件
	 */
	export default class MobileNewsContainer extends React.Component {
	
	  render () {
	    return (
	        <Tabs>
	          <TabPane tab="头条" key="top">
	            <div style={{width: '100%'}}>
	              <Carousel autoplay infinite>
	                <div><img src={carousel_1}/></div>
	                <div><img src={carousel_2}/></div>
	                <div><img src={carousel_3}/></div>
	                <div><img src={carousel_4}/></div>
	              </Carousel>
	            </div>
	            <MobileNewsBlock count={20} type="top"/>
	          </TabPane>
	          <TabPane tab="社会" key="shehui">
	            <MobileNewsBlock count={20} type="shehui"/>
	          </TabPane>
	          <TabPane tab="国内" key="guonei">
	            <MobileNewsBlock count={20} type="guonei"/>
	          </TabPane>
	          <TabPane tab="国际" key="guoji">
	            <MobileNewsBlock count={20} type="guoji"/>
	          </TabPane>
	          <TabPane tab="娱乐" key="yule">
	            <MobileNewsBlock count={20} type="yule"/>
	          </TabPane>
	          <TabPane tab="科技" key="keji">
	            <MobileNewsBlock count={20} type="keji"/>
	          </TabPane>
	          <TabPane tab="体育" key="tiyu">
	            <MobileNewsBlock count={20} type="tiyu"/>
	          </TabPane>
	        </Tabs>
	      )
	  }
	}

----------
### Mobile \ `mobile_detail.jsx` 组件
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

----------
### Mobile \ `mobile_comments.jsx` 组件
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

----------

### Mobile \ `mobile_center.jsx` 组件
	import React from 'react';
	import {
	  Tabs,
	  Card,
	  Upload,
	  Modal,
	  Icon
	} from 'antd'
	import axios from 'axios'
	import {Link} from 'react-router'
	const TabPane = Tabs.TabPane;
	
	class MobileUserCenter extends React.Component{
	  constructor(props){
	    super(props);
	    this.state={
	      comments:[],
	      collections:[],

      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
     }
    }

	  //上传头像
	  handleCancel = () => this.setState({ previewVisible: false });
	
	  handlePreview = (file) => {
	    this.setState({
	      previewImage: file.url || file.thumbUrl,
	      previewVisible: true,
	    });
	  };
	
	  handleChange = ({ fileList }) => this.setState({ fileList });

    componentWillMount(){
    //获取评论列表数据
    let userId = JSON.parse(localStorage.getItem('user_KEY')).userId;
    let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userId}`;

    axios.get(url)
        .then(response =>{
          let comments = response.data;
          this.setState({comments})
        })
        .catch(error =>{
          console.log(error.message);
        });

    //获取收藏列表数据
    url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userId}`;
    axios.get(url)
        .then(response =>{
          let collections = response.data;
          this.setState({collections})
        })
        .catch(error =>{
          console.log(error.message);
        });
    }


    render(){
    let {comments,collections} = this.state;
    let commentsList = comments.length > 0
        ?(
            comments.map((item,index)=>{
              return(
                  <Card key={index} title={`于:${item.datetime}评论了${item.uniquekey}`} extra={<p style={{color:'blue'}}><Link to={`/news_detail/${item.uniquekey}`}>查看</Link></p>}>
                    {item.Comments}
                  </Card>
              )
            })
        ):'目前没有任何评论';

    let collectionsList = collections.length > 0
        ?(
            collections.map((item,index)=>{
              return(
                  <Card key={index} title={item.uniquekey} extra={<p style={{color:'blue'}}><Link to={`/news_detail/${item.uniquekey}`}>查看</Link></p>}>
                    {item.Title}
                  </Card>
              )

            })

        )
        :'目前没有任何收藏文章';

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div>

              <Tabs>
                <TabPane tab="我的评论列表" key="1">
                  {commentsList}
                </TabPane>
                <TabPane tab="我的收藏列表" key="2">
                  {collectionsList}
                </TabPane>
                <TabPane tab="头像设置" key="3">
                  <div className="clearfix">
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        multiple="true"
                    >
                      {fileList.length >= 10 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </div>
                </TabPane>
              </Tabs>
        </div>
       )
     }
    }

    export default MobileUserCenter

----------

> 本笔记由 **张人川** &copy; &#x262D; &#x264F;编写
> 
> 博客地址: [Incheon'life](http://www.zhangrenchuan.com)
> 
> 转载请注明作者信息 &copy;