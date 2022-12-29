/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-26 15:52:44
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-26 15:52:50
 * @FilePath: \taro-netEase\src\utils\error.ts
 * @Description: 打印错误信息
 */
import { formatTime } from './common'
/**
 *
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */
// eslint-disable-next-line
export const logError = (name: string, action: string, info?: string | object ) => {
  if (!info) {
    info = 'empty'
  }
  let time = formatTime(new Date())
  console.error(time, name, action, info)
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
}

