import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from "react-native";


export default function ProfileScreen({ navigation }) {

  const [flagPurchased, setFlagPurchased] = useState(0);
  const [flagSold, setFlagSold] = useState(0);
  const [filterParam, setFilterParam] = useState(["All"]);


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
      </View>
  );

}

const styles = StyleSheet.create({
  main_container: {
    margin: 20,
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

},
})


