import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import clothing_items from "../data/ClothesData";


export default function HomeScreen({ navigation }) {

    const select = () => {
        // Alert.alert(clothing_items[0].id)
        // alert(clothing_items[0].title);
        navigation.navigate("ItemViewScreen")
    }

    return (
        <View>
            <TouchableOpacity onPress={() => select()}><Text>Press to go to ItemViewScreen</Text></TouchableOpacity>
        </View>
    );

}