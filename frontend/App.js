import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SellScreen from "./screens/sell";
import { Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemViewScreen from "./screens/itemView";

const Tabs = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function App() {

  const TabsNav = () => (
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
              tabBarActiveTintColor: '#167D7F',
              tabBarInactiveTintColor: '#515154',
              headerTintColor: '#167D7F',
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

  );


  return (
    <NavigationContainer theme={{colors: {background: '#FFFFFF'}}}>
      <RootStack.Navigator initialRouteName="BottomNavigation">
        <RootStack.Screen name="Home" component={HomeScreen}/>
        <RootStack.Screen name="ItemViewScreen" component={ItemViewScreen}/>
        <RootStack.Screen name="BottomNavigation" component={TabsNav} options={{ headerShown: false }}/>
        
      </RootStack.Navigator> 

    </NavigationContainer>
  );
}

