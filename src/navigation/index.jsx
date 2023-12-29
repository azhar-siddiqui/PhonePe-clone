import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Stores, Insurance, Wealth, History } from "../screens";
import {
  AntDesign,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#6739B7">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          // headerBackground: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarLabel: "Stores",
          tabBarIcon: () => (
            <SimpleLineIcons name="bag" size={22} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{
          tabBarLabel: "Insurance",
          tabBarIcon: () => (
            <MaterialIcons name="security" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Wealth"
        component={Wealth}
        options={{
          tabBarLabel: "Wealth",
          tabBarIcon: () => (
            <FontAwesome name="rupee" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: () => <AntDesign name="swap" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

// export default RootNavigator;
