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