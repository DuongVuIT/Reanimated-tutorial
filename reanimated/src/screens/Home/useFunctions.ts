/**
 * @description
 * @since         Sunday, 3 23rd 2025, 20:11:50 pm
 * @author        Vũ Đại Dương <duongvd@getflycrm.com>
 * @copyright     Copyright (c) 2025, GETFLY VN TECH.,JSC
 */
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { RootStackParamList } from "../../navigation";

export const useFunctions = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();
  const handleToDetail = useCallback(() => {
    navigation.navigate("Detail", {
      item: { id: 1, name: "Detail 1" },
    });
  }, []);
  return { handleToDetail };
};
