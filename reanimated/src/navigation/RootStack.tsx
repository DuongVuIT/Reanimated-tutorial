/**
 * @description
 * @since         Sunday, 3 23rd 2025, 19:59:38 pm
 * @author        Vũ Đại Dương <duongvd@getflycrm.com>
 * @copyright     Copyright (c) 2025, GETFLY VN TECH.,JSC
 */
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Detail from "../screens/Detail/Detail";
export type RootStackParamList = {
  Home: undefined;
  Detail: { item: any };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Detail"
>;
export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
