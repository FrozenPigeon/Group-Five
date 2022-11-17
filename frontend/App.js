import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native'

import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SellScreen from "./screens/sell";
import ItemViewScreen from "./screens/itemView";
import CartScreen from "./screens/cart";
import Purchased from "./screens/purchased";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Tabs = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

export default function App() {

  const [tokens, setTokens] = useState("0")
  const [itemPurchased, setItemPurchased] = useState('');

  const getItemPurchased = async () => {
      const value = await AsyncStorage.getItem('purchased_item');
      if (value === 'false') {
          setItemPurchased('false');
      } else setItemPurchased('true');
  };


  useEffect(() => {
      setInterval(() => {
        getItemPurchased();
      }, 1000)
  },[]);


  function openCart() {
    App.navigation.navigate('CartScreen')
  }

  const getTokens = async () => {

    try {
      const value = await AsyncStorage.getItem('@tokens')
      setTokens(value)
    } catch (error) {
      console.log(error);

    }

  }

  // currently loads 10 tokens on app start.. need to change depending on profile implementation
  const setup = async () => {

    try {
      await AsyncStorage.setItem('@tokens', "20")
      await AsyncStorage.setItem('purchased_item', "false")
      await AsyncStorage.setItem('@purchasecompleted', "false")
      await AsyncStorage.setItem('@sold_item', "false")
      await AsyncStorage.removeItem('@sold_item_valuation')
      await AsyncStorage.removeItem('@sold_item_title')
      await AsyncStorage.removeItem('@sold_item_photo')
    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {

    setup();
    getTokens();

  }, []);
  
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
        header: ({navigation}) => (
          <SafeAreaView style={{display: "flex"}}>
            <View style={{display: "flex", borderBottomColor: "grey", flexDirection: "row", backgroundColor: "white", height: 60, alignItems: "center", justifyContent: "space-between"}}>
              <Text style={{marginLeft: 20, fontSize: 30, fontWeight: "bold"}}> Thriftease </Text>
              <View style={{display: "flex", flexDirection: "row"}}>
              <TouchableOpacity
              style={{marginRight: 15}}
              onPress={ () => navigation.navigate('CartScreen')}>
                <View>
                  <Ionicons name="cart-outline" size={"40px"}/>
                  { itemPurchased === "true" && <View style={{  width: 10, height: 10, borderRadius: 10, backgroundColor: '#167D7F',  position: 'absolute', alignSelf: "flex-end"}}></View> }
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              style={{marginRight: 20, borderWidth: 2, borderRadius: 8, alignItems: "center", justifyContent: "center"}}
              onPress={()=> Alert.alert("Not implemented", "Buying tokens is not currently implemented", [
                {
                    text: 'OK'
                }
          
              ])}
              >
                <Text style={{marginLeft: 5, marginRight: 5, fontSize: 25, fontWeight: "600"}}> {tokens} <Ionicons name="logo-bitcoin" size={"25px"}/> </Text>
              </TouchableOpacity>
              </View>
              
            </View>

          </SafeAreaView>

        ),
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
    <NavigationContainer theme={{ colors: { background: '#FFFFFF' } }}>
      <RootStack.Navigator initialRouteName="BottomNavigation">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ItemViewScreen" component={ItemViewScreen} options={{headerTitle: ""}}/>
        <RootStack.Screen name="CartScreen" component={CartScreen} />
        <RootStack.Screen name="Purchased" component={Purchased} options={{headerTitle: ""}}/>
        <RootStack.Screen name="BottomNavigation" component={TabsNav} options={{ headerShown: false }} />

      </RootStack.Navigator>

    </NavigationContainer>
  );
}

