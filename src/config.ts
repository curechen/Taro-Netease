/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-26 15:56:08
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-30 13:55:07
 * @FilePath: \taro-netEase\src\config.ts
 * @Description: 这里配置的这个url是后端服务的请求地址，示例中代表在本地启用的服务端口是3000，如果希望在真机上调试，那么就需要将后端服务部署到一个云主机上
 *               值得注意的是，微信小程序默认情况下是会对网络请求进行域名检测的，所以写下面的url其实是不行的，想要解决这一问题有两种方法，一种是去小程序后台配置请求地址，
 *               这种情况适用于线上环境，另一种是在项目设置里勾选不检验合法域名选项，这种适用于本地环境
 */
export const baseUrl: string = 'http://localhost:3000'