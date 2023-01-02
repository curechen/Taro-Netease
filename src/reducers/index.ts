/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-06 21:28:00
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-01-02 15:12:26
 * @FilePath: \taro-netEase\src\reducers\index.ts
 * @Description: 
 */
import { combineReducers } from 'redux'
import counter from './counter'
import song from './song'

export default combineReducers({
  counter,
  song
})
