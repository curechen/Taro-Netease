/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-17 20:26:55
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-21 21:19:58
 * @FilePath: \taro-netEase\src\utils\connect.ts
 * @Description: 因为ts会有类型判断，所以在这里要重新封装一下
 */
import { connect as connectComponent } from 'react-redux';

export const connect = (mapStateToProps: any, actions: any) => {
  return (target: any) => (
    connectComponent(mapStateToProps, actions)(target) as any
  );
};