/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-12-31 13:01:44
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2022-12-31 13:12:06
 * @FilePath: \taro-netEase\src\components\CLoading\index.tsx
 * @Description: 
 */
import { FC, memo } from "react";
import classnames from "classnames";
import { View } from "@tarojs/components";
import "./index.scss";

type Props = {
  fullPage?: boolean;
  hide?: boolean;
};

const CLoading: FC<Props> = ({ fullPage, hide }) => {
  const cls = classnames({
    loading_components: true,
    fullScreen: fullPage,
    hide: hide
  });
  return <View className={cls}></View>;
};

export default memo(CLoading, (oldProps, newProps) => {
  return (
    oldProps.fullPage === newProps.fullPage && oldProps.hide === newProps.hide
  );
});
