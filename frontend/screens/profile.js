import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {

  const [flagPurchased, setFlagPurchased] = useState(0);
  const [flagSold, setFlagSold] = useState(0);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [itemPurchased, setItemPurchased]= useState(["false"]);
  const [tokens, setTokens] = useState(["false"])
  
  const getTokens = async () => {
    try {
      const value = await AsyncStorage.getItem('@purchasecompleted')
      console.log(value)
      setTokens(value)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    setInterval(() => {
      getTokens();
    }, 2000)
  }
  );

  const selectPurchased = () => {
    setFlagPurchased(flagPurchased === 0 ? 1 : 0);
    setFlagSold(0)
    if(flagPurchased === 0) {
        setFilterParam("Purchased")
    }
  }

  const selectSold = () => {
      setFlagSold(flagSold === 0 ? 1 : 0);
      setFlagPurchased(0)
      if(flagSold === 0) {
          setFilterParam("Sold")
      }
  }
  return (
      <View style={styles.main_container}>
        <View style={styles.info_container}>
          <Image source={require("../images/user.png")} style={styles.user} resizeMode="contain"/>
          <View>
            <Text>Bruce Shiny</Text>
            <Text>Description: I like sharks and shiny things</Text>
          </View>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => selectPurchased()} style={[styles.button, {backgroundColor: flagPurchased ? '#167D7F' : '#E4E4E4'}]}>
            <Text style={[styles.buttontext, {color: flagPurchased ? '#FFFFFF' : '#515154'}]}>Purchased Items</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectSold()}   style={[styles.button, {backgroundColor: flagSold ? '#167D7F' : '#E4E4E4'}]}>
              <Text style={[styles.buttontext, {color: flagSold ? '#FFFFFF' : '#515154'}]}>Sold Items</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between" }}>
        {tokens === 'true' &&
          <View style={styles.itemContainer}>
            <View style={[styles.typeContainer, { backgroundColor: '#AF638E' }]}>
                <Text style={{ color: '#FFFFFF', fontSize: 11 }}>Warehouse</Text>
            </View>

            <Image source={require("../images/green_hoodie.png")} resizeMode="contain" style={{ height: 120, width: 120, zIndex: 1}} />
            <View style={styles.itemInfoContainer}>
                <Text style={styles.itemText}>Green Hoodie</Text>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>5</Text>
                    <Ionicons name="logo-bitcoin" style={styles.itemText} />
                </View>
            </View>
          </View>}
        {tokens === 'false' &&
          <Text>No purchased items yet!</Text>
        }
        </View>
      </View>
  );

}

const styles = StyleSheet.create({
  main_container: {
    margin: 20,
    display: "flex"
  },
  user: {
    borderRadius: 8,
    marginVertical: 12,
    width: 50,
    height: 50,
  },
  info_container: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between"
  },
  button: {
    maxWidth: 130,
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
  button_container: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    // justifyContent: "space-between"
    alignContent: "center",
    alignSelf: "center"
  },
  itemContainer: {
    borderStyle:'solid', 
    borderColor:'#E4E4E4', 
    borderWidth:'1px', 
    flexBasis: '48%',  
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center'
  },
  typeContainer: {
      position:'absolute', 
      left: 84,
      margin: 4, 
      paddingHorizontal: 8, 
      paddingVertical: 3,
      borderRadius: 50,
      zIndex: 2
  },
  itemInfoContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 8,
      width: '100%'
  },
  itemTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  itemText: {
      fontSize: 14,
      color: '#515154',
      fontWeight: '200'
  }
})