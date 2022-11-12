import React from 'react'
import { View, TouchableOpacity, Text, Image } from "react-native";

export default function ItemViewScreen({route}) {
    const {title, price, description, size, condition, location, image} = route.params
    return (
        <View>
            <TouchableOpacity><Text>{title}</Text></TouchableOpacity>
            <Image source={image} />
        </View>
    );
}
