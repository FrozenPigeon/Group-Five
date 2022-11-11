import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SellScreen from "./screens/sell";
import { Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Sell') {
              iconName = focused
                ? 'pricetags'
                : 'pricetags-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'teal',
          tabBarInactiveTintColor: 'gray',
          headerTintColor: 'teal',
          tabBarStyle: {
          }
          
        })}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tabs.Screen
          name="Sell"
          component={SellScreen}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

