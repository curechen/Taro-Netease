/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-06 21:28:00
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-13 15:21:02
 * @FilePath: \taro-netEase\src\app.tsx
 * @Description: 
 * 
 */
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可
import { FC } from 'react'
import { Provider } from "react-redux";

import configStore from "./store";


import "./app.scss";
import "./assets/iconFont/icon.scss";

const store = configStore();
  
const App:FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default App