import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image,ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
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
    maskType: boolean,
    conditionActive: number,
    jobList:Array<any>
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
        navigationBarTitleText: '订单'
    }




    constructor(props) {
        super(props)
        this.state = {
            maskType: false,
            conditionActive: 1,
            jobList:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:22}]

        }

    }
    componentWillReceiveProps(nextProps) {
        // console.log(this.props, nextProps)
    }

    componentDidMount() {
    }

    componentDidShow() { }

    componentDidHide() { }

    onScrollToLower(){
        console.log('触底')
    }
    

    setMaskType() {
        this.setState({ maskType: !this.state.maskType })
    }

    setCondition(index){
        this.setState({conditionActive:index,maskType:false})
    }

    handelClick(e){
        console.log(e)
    }

    render() {
        return (
            <View className='orderIndex'>
                <View className="headerTab">
                    <View className="left"></View>
                    <View className="center" onClick={this.setMaskType.bind(this)}>
                        保姆
                    {/* 弹出mask时的icon方向 */}
                        {this.state.maskType ? <Text className="iconfont icon-icon-test25"></Text> : <Text className="iconfont icon-icon-test23"></Text>}
                    </View>
                    <View className="right">
                        接单记录
                </View>
                </View>
                <ScrollView className="ScrollView" scrollY onScrollToLower={this.onScrollToLower.bind(this)}>
                    <View className="jobList">
                        <JobList handelClick={this.handelClick.bind(this)} dataList={this.state.jobList}></JobList>
                    </View>
                </ScrollView>

                {
                    this.state.maskType ?
                        <View className="headerTabMask">
                            <View className="conditionBox">
                                <View className="conditionList" onClick={this.setCondition.bind(this,1)}>
                                    {this.state.conditionActive === 1 ? <Text className="text active">保姆</Text> : <Text className="text ">保姆</Text>}
                                </View>
                                <View className="conditionList" onClick={this.setCondition.bind(this,2)}>
                                    {this.state.conditionActive === 2 ? <Text className="text active">月嫂</Text> : <Text className="text ">月嫂</Text>}
                                </View>
                                <View className="conditionList" onClick={this.setCondition.bind(this,3)}>
                                    {this.state.conditionActive === 3 ? <Text className="text active">育儿嫂</Text> : <Text className="text ">育儿嫂</Text>}
                                </View>
                                <View className="conditionList" onClick={this.setCondition.bind(this,4)}>
                                    {this.state.conditionActive === 4 ? <Text className="text active">保洁</Text> : <Text className="text ">保洁</Text>}
                                </View>
                            </View>

                        </View> : ''
                }
            </View>
        )
    }
}
export default Index
