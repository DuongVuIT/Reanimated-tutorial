/*
 * @description
 * @since         Sunday, 3 23rd 2025, 20:01:57 pm
 * @author        Vũ Đại Dương <duongvd@getflycrm.com>
 * @copyright     Copyright (c) 2025, GETFLY VN TECH.,JSC
 */
import React, { useCallback } from "react";
import { Button } from "react-native";
import Animated, {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Home = () => {
  const width = useSharedValue<number>(200);
  const height = useSharedValue<number>(200);
  const backgroundColor = useSharedValue<string>("red");
  const startAnimation = useCallback(() => {
    const randomWidth = Math.floor(Math.random() * 300) + 100;
    const randomHeight = Math.floor(Math.random() * 300) + 100;
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    width.value = withTiming(randomWidth, {
      duration: 1000,
      easing: Easing.back(3),
      reduceMotion: ReduceMotion.Always,
    });
    height.value = withTiming(randomHeight);
    backgroundColor.value = withTiming(randomColor, {
      duration: 2000,
    });
  }, []);

  return (
    <Animated.View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button title="Hello" onPress={startAnimation} />
      <Animated.View
        style={{
          backgroundColor: backgroundColor,
          height: height,
          width: width,
        }}
      />
    </Animated.View>
  );
};

export default Home;
