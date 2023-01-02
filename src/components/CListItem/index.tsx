/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-01-01 15:39:57
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-01-01 20:04:14
 * @FilePath: \taro-netEase\src\components\CListItem\index.tsx
 * @Description: 
 */
import { FC, memo } from "react";
import classnames from "classnames";
import { View, Image, Text } from "@tarojs/components";
import "./index.scss";

type Props = {
  item: {
    id: number;
    picUrl: string;
    playCount: number;
    name: string;
  },
  clickMethod: () => any;
  // picUrl?: string;
};

const CListItem: FC<Props> = ({ item, clickMethod }) => {
  const cls = classnames({
    recommend_playlist__item: true,
  });
  return (
    <View
      className={cls}
      key={item.id}
      onClick={clickMethod}
    >
      <Image
        src={`${item.picUrl}?imageView&thumbnail=250x0`}
        className="recommend_playlist__item__cover"
      />
      <View className="recommend_playlist__item__cover__num">
        <Text className="at-icon at-icon-sound"></Text>
        {item.playCount < 10000
          ? item.playCount
          : `${Number(item.playCount / 10000).toFixed(0)}万`}
      </View>
      <View className="recommend_playlist__item__title">
        {item.name}
      </View>
    </View>
  );
};

export default memo(CListItem, (oldProps, newProps) => {
  return (
    oldProps.item === newProps.item
  );
});
