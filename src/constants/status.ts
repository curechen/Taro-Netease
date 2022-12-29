/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-26 10:27:05
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-26 10:27:10
 * @FilePath: \taro-netEase\src\constants\status.ts
 * @Description: 
 */
export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 301,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}
  
export const REFRESH_STATUS = {
  NORMAL: 0,
  REFRESHING: 1,
  NO_MORE_DATA: 2
}
  