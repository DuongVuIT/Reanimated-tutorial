/**
 * @description
 * @since         Sunday, 3 23rd 2025, 20:24:38 pm
 * @author        Vũ Đại Dương <duongvd@getflycrm.com>
 * @copyright     Copyright (c) 2025, GETFLY VN TECH.,JSC
 */
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";

export const useFunctions = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "Detail">>();
  const { item } = params;
  console.log("item", item);
  return {};
};
