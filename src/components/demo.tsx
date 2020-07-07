import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import courseImg from '../../asset/avatar_15.png'
import { add, minus, asyncAdd } from '../../actions/counter'


type PageStateProps = {
  counter: {
    num: number,
  }
  dataList:any

}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {

}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;

}

class Index extends Component {
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

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='homeIndex'>
             123
      </View>
    )
  }
}
export default Index as ComponentClass<PageOwnProps, PageState>
