/*
 * @description
 * @since         Sunday, 3 23rd 2025, 20:58:41 pm
 * @author        Vũ Đại Dương <duongvd@getflycrm.com>
 * @copyright     Copyright (c) 2025, GETFLY VN TECH.,JSC
 */
import { Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
//Animation sample with withTiming

export const WithTiming = () => {
  // //Description: Change opacity from 0 to 1 (Fade in and Fade out)
  // const opacity = useSharedValue<number>(0);
  // const height = useSharedValue<number>(150);
  // const width = useSharedValue<number>(150);
  // const animatedStyle = useAnimatedStyle(() => ({
  //   opacity: opacity.value,
  // }));
  // const handleOnPress = () => {
  //   opacity.value = withTiming(opacity.value === 0 ? 1 : 0, {
  //     duration: 500,
  //   });
  // };
  //Description: Change view use translate x and y
  const height = useSharedValue<number>(150);
  const width = useSharedValue<number>(150);
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const handleOnPress = () => {
    translateY.value = withTiming(translateY.value === 0 ? 150 : 0, {
      duration: 600,
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          { width: width, height: height, backgroundColor: "blue" },
          animatedStyle,
        ]}
      />
      <Button title="Toggle Fade" onPress={handleOnPress} />
    </View>
  );
};
