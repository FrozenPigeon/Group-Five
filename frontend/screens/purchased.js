import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import clothing_items from "../data/ClothesData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Purchased({ navigation }) {

    const removeFromCart = async () => {
        try {
            await AsyncStorage.setItem('purchased_item', "false")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.main_container}>
            <Text style={styles.heading}>Item(s) Purchased</Text>
            <View style={styles.item}>
                <View style={styles.itemContent}>
                    <Text style={styles.itemHeading}>{clothing_items[6].title}</Text>
                    <View style={styles.itemBodyContainer}>
                        <Text style={styles.itemBody}>Size: {clothing_items[6].size}</Text>
                        <Text style={styles.itemBody}>Condition: {clothing_items[6].condition}</Text>
                        <Text style={styles.itemBody}>Cost: {clothing_items[6].price} tokens</Text>
                    </View>
                </View>
                <View>
                    <Image source={clothing_items[6].image} />
                </View>
            </View>

            <TouchableOpacity style={styles.purchaseButton} onPress={() => {navigation.pop('2'); removeFromCart()}}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Return Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        margin: 20,
        flex: 1
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    item: {
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        marginVertical: 12,
        alignItems: 'center'
    },
    itemHeading: {
        fontSize: 20,
        fontWeight: '600'
    },
    itemBodyContainer: {
        paddingVertical: 12,
        display: 'flex',
        gap: 4
    },
    itemBody: {
        fontSize: 16,
        fontWeight: '300'
    },
    removeButton: {
        borderWidth: 1,
        borderColor: '#616164',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    purchaseButton: {
        backgroundColor: '#167D7F',
        width: "100%",
        borderRadius: 8,
        textAlign: 'center',
        alignItems: "center",
        paddingVertical: 12,
        marginTop: 'auto',
        marginBottom: 30,
    }
});
