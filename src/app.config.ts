/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-06 21:28:00
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-12 20:31:03
 * @FilePath: \taro-netEase\src\app.config.ts
 * @Description: 全局配置文件，https://docs.taro.zone/docs/app-config
 */
export default {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // 申明需要后台运行的能力，这里是音频
  requiredBackgroundModes: ["audio"],
  // 分包，初次进入只下载主包，其他按需加载，优化了首屏加载时间
  "subpackages": [
    {
      "root": "pages/packageA",
      "pages": [
        "pages/videoDetail/index",
        "pages/djprogramListDetail/index",
        "pages/search/index",
        "pages/searchResult/index",
        "pages/songDetail/index",
        "pages/playListDetail/index",
        "pages/login/index",
        "pages/myFans/index",
        "pages/myFocus/index",
        "pages/myEvents/index",
        "pages/recentPlay/index",
      ]
    }
  ]
}
