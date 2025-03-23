import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigation } from "./src";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}
