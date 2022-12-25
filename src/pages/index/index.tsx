/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-06 21:28:00
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-25 14:35:43
 * @FilePath: \taro-netEase\src\pages\index\index.tsx
 * @Description:
 */
import Taro from "@tarojs/taro";
import { Component } from "react";
import classnames from "classnames";
import { AtTabBar } from "taro-ui";
import { View, Button, Text } from "@tarojs/components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { connect } from "@/utils/connect";

import "./index.scss";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
  current: number;
  test: number;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({})
)

// 使用泛型去标识组件中的属性或状态变量
class Index extends Component<IProps, PageState> {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      test: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 下面是自定义方法
  
  // tab栏路由跳转
  switchTab(value) {
    console.log(value);
    // reLaunch会清楚
    Taro.reLaunch({
      url: "/pages/my/index"
    });
  }

  buttonClick() {
    this.setState({
      test: this.state.test + 1,
    });
  }

  render() {
    return (
      <View
        className={classnames({
          index_container: true,
        })}
      >
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View> */}
        <View>
          <Text>当前的test:{this.state.test}</Text>
        </View>
        <Button onClick={this.buttonClick.bind(this)}>这是一个按钮</Button>
        <AtTabBar
          fixed
          selectedColor='#d43c33'
          tabList={[
            { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
            { title: "我的", iconPrefixClass: "fa", iconType: "music" }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
