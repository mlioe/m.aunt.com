import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import courseImg from '../../asset/avatar_15.png'
import { add, minus, asyncAdd } from '../../actions/counter'
import bg1 from '../../asset/tab_bg1.png'
import bg2 from '../../asset/tab_bg2.png'
import bg3 from '../../asset/tab_bg3.png'
// import Demo from '../../components/demo'
import JobList from '../../components/jobList'
import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component<{}, PageState>{

  config: Config = {
    navigationBarTitleText: '牛牛生活'
  }
 



  constructor(props) {
      super(props)
      this.state = {
          addressList:[]
      }

  }
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
  }

  componentDidMount(){
  }

  componentDidShow() { }

  componentDidHide() { }

  jobListClick(e){
    console.log(e)
  }

  render() {
    return (
      <View className='homeIndex'>
        {/* <Demo>

             </Demo> */}
        <View className="banner">
             
        </View>
        <View className="tagListBox">
            <View className="tagList">
              <View className="tag"></View>
              <View className="tagText">家政保洁</View>
            </View>
            <View className="tagList">
              <View className="tag"></View>
              <View className="tagText">保姆月嫂</View>
            </View>
            <View className="tagList">
              <View className="tag"></View>
              <View className="tagText">家电清洗</View>
            </View>
            <View className="tagList">
              <View className="tag"></View>
              <View className="tagText">家政保洁</View>
            </View>
        </View>
        <View className="recommend">
             <View className="title">牛牛精选</View>
             <View className="box">
                  <View className="left">
                    {/* 小程序和h5定位不一样，需要动态判断下是那端 */}
                    {process.env.TARO_ENV === 'weapp' ?
                      <Image className="Img2" mode="aspectFit" src={bg1}></Image> : 
                      <Image className="Img" mode="aspectFit" src={bg1}></Image>
                    } 
                      <View className="main">
                          <View className="t1">热门职位</View> 
                          <View className="t2">本地热门职位</View>  
                      </View> 
                  </View>
                  <View className="right">
                      <View className="right_top">
                          <Image className="Img" src={bg2} mode="aspectFill"></Image>
                          <View className="text">找工作</View>
                      </View>
                      <View className="right_bottom">
                          <Image className="Img" src={bg3} mode="aspectFill"></Image>
                          <View className="text">职场聊</View>
                      </View>
                  </View>
             </View>
        </View>
        <View className="otherWorkBox">
              <View className="title">
                    好单推荐
              </View>
              <View>
                  <JobList handelClick={this.jobListClick.bind(this)} dataList={[{id:1},{id:2}]}></JobList>
              </View>
        </View>
        <View className="newJob">
          今日新增<Text className="newJobNum">99+</Text>个好单<Text className="iconfont icon-icon-test26"></Text>
        </View>
      </View>
    )
  }
}
export default Index
