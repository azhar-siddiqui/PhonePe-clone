import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/navigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
