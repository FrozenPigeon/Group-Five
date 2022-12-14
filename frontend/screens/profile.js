import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';


export default function ProfileScreen({ navigation }) {

  const [tab, setTab] = useState("Purchased");
  const [purchased, setPurchased] = useState("false")
  const [sold, setSold] = useState("false")
  const isFocused = useIsFocused();
  const [photoURI, setPhotoURI] = useState("")
  const [soldItemTitle, setSoldItemTitle] = useState("")
  const [soldItemValuation, setSoldItemValuation] = useState(0)

  function purchaseTab() {

    if (purchased === 'true'){
      return (<View style={styles.itemContainer}>
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
    </View>)
    } else {
      return (
        <View style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', paddingTop: 60}}>
          <Image source={require("../images/no_purchased_icon.png")} resizeMode="contain" style={{paddingTop: 40}}/>
        </View>
      )
    }
        
  }

  function sellTab() {

    if (sold === 'true'){
      return (<View style={styles.itemContainer}>
      <Image source={{ uri: photoURI}} resizeMode="contain" style={{ height: 120, width: 120, zIndex: 1}} />
      <View style={styles.itemInfoContainer}>
          <Text style={styles.itemText}>{soldItemTitle}</Text>
          <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>+{soldItemValuation}</Text>
              <Ionicons name="logo-bitcoin" style={styles.itemText} />
          </View>
      </View>
    </View>)
    } else {
      return (
        <View style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', paddingTop: 60}}>
          <Image source={require("../images/no_sold_icon.png")} resizeMode="contain" style={{paddingTop: 40}}/>
        </View>
      )
    }
        
  }
  
  const getPurchased = async () => {
    try {
      const value = await AsyncStorage.getItem('@purchasecompleted')
      // console.log(value)
      setPurchased(value)
    } catch (error) {
      console.log(error);
    }
  }
  const getSold = async () => {
    try {
      const value = await AsyncStorage.getItem('@sold_item')
      console.log("sold")
      console.log(value)
      const uri = await AsyncStorage.getItem("@sold_item_photo")
      const soldItemTitle = await AsyncStorage.getItem("@sold_item_title")
      const soldItemValuation = await AsyncStorage.getItem("@sold_item_valuation")
      setSold(value)
      setPhotoURI(uri)
      setSoldItemTitle(soldItemTitle)
      setSoldItemValuation(soldItemValuation)
      console.log(soldItemTitle)
      console.log(soldItemValuation)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
      getPurchased()
      getSold()
  },[isFocused]
  );

  const selectPurchased = () => {

    setTab("Purchased")

  }

  const selectSold = () => {

    setTab("Sold")
  }
  return (
      <View style={styles.main_container}>
        <View style={styles.profile_container}>
          <View style={styles.info_container}>
            <Image source={require("../images/profile.png")} style={styles.user} resizeMode="contain"/>
            <View style ={{marginLeft: 20}}>
              <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 10}}>Bruce Shiny</Text>
              <Text>I like sharks and shiny things</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-outline" style={{fontSize: 35}} />
          </TouchableOpacity>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => selectPurchased()} style={[styles.button, {backgroundColor: tab === "Purchased" ? '#167D7F' : '#E4E4E4', borderTopLeftRadius: 8, borderBottomLeftRadius: 8}]}>
            <Text style={[styles.buttontext, {color: tab === "Purchased" ? '#FFFFFF' : '#515154'}]}>Purchased Items</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectSold()}   style={[styles.button, {backgroundColor: tab === "Sold" ? '#167D7F' : '#E4E4E4', borderTopRightRadius: 8, borderBottomRightRadius: 8}]}>
              <Text style={[styles.buttontext, {color: tab === "Sold" ? '#FFFFFF' : '#515154'}]}>Sold Items</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between" }}>
        {tab === "Purchased" ? purchaseTab() : sellTab() }
        </View>
      </View>
  );

}

const styles = StyleSheet.create({
  main_container: {
    margin: 20,
    display: "flex",
  },
  user: {
    borderRadius: 8,
    marginVertical: 12,
    width: 70,
    height: 70,
  },
  profile_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info_container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center"

  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
  button_container: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    marginBottom: 20,
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