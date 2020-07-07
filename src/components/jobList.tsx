import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import courseImg from '../../asset/avatar_15.png'
import { add, minus, asyncAdd } from '../../actions/counter'

import './jobList.scss'
type PageStateProps = {
    dataList:Array<any>
   
}

type PageDispatchProps = {
    handelClick: (e:any) => any
}

type PageOwnProps = {
    dataList: Array<any>
}

type PageState = {
    jobList:Array<any>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
    props: IProps;
}

class Index extends Component<{}, PageState>{
    constructor(props) {
        super(props)
        this.state = {
            jobList: []
        }

    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
    }

    componentDidShow() { }

    componentDidHide() { }

    demoClick(id){
        console.log(id)
        this.props.handelClick(id)
    }

    render() {
        return (
            <View className='jobList'>
                {
                    this.props.dataList.map(item=>{
                        return <View className="list">
                                    <View className="title">
                                        钟点工|主要老人陪护|女性半自理或者男性自理|辅助做饭或者做家务
                                    </View>
                                    <View className="salary">
                                        工资：1100左右【工资可商量】
                                    </View>
                                    <View className="other">
                                        上班时间：10点-12点
                                    </View>
                                    <View className="other">
                                        客户住址：霞山区
                                    </View>
                                    <View className="bottom">
                                        <View className="time">2019-01-01 10：00发布</View>
                                        <View className="btn"   onClick={this.demoClick.bind(this,item.id)}>去看看</View>
                                    </View>
                                </View>
                    })
                }
            </View>
        )
    }
}
export default Index
