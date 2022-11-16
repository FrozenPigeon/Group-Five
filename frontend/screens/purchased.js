import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import clothing_items from "../data/ClothesData";

export default function Purchased({navigation}) {

    return (
        <View style={styles.main_container}>
            <Text style={styles.heading}>Item(s) Purchased</Text>
            <View style={styles.item}>
                <View style={styles.itemContent}>
                    <Text style={styles.itemHeading}>{clothing_items[5].title}</Text>
                    <View style={styles.itemBodyContainer}>
                        <Text style={styles.itemBody}>Size: {clothing_items[5].size}</Text>
                        <Text style={styles.itemBody}>Condition: {clothing_items[5].condition}</Text>
                        <Text style={styles.itemBody}>Cost: {clothing_items[5].price} tokens</Text>
                    </View>
                </View>
                <View>
                    <Image source={clothing_items[5].image}/>
                </View>
            </View>

            <TouchableOpacity style={styles.purchaseButton} onPress={ () => navigation.navigate('Home')}>
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
        fontSize: 25,
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
        fontWeight: '500'
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
        borderColor: '#515154',
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
