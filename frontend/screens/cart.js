import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import clothing_items from "../data/ClothesData";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CartScreen({navigation}) {

    const [itemPurchased, setItemPurchased] = useState('');

    const getItemPurchased = async () => {
        const value = await AsyncStorage.getItem('purchased_item');
        if (value === 'false') {
            setItemPurchased('false');
        } else setItemPurchased('true');
    };

    useEffect(() => {
        getItemPurchased();
    }, [itemPurchased]);

    return (
        <View style={styles.main_container}>
            <Text style={styles.heading}>Cart</Text>
            {itemPurchased === 'true' && 
                <View style={styles.item}>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeading}>{clothing_items[5].title}</Text>
                        <View style={styles.itemBodyContainer}>
                            <Text style={styles.itemBody}>Size: {clothing_items[5].size}</Text>
                            <Text style={styles.itemBody}>Condition: {clothing_items[5].condition}</Text>
                            <Text style={styles.itemBody}>Cost: {clothing_items[5].price} tokens</Text>
                        </View>
                        
                        <TouchableOpacity style={styles.removeButton} onPress={() => {AsyncStorage.setItem("purchased_item", 'false'); setItemPurchased('false')}}>
                            <Ionicons name="trash-outline" style={{fontSize: 20, paddingRight: 8}}/>    
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={clothing_items[5].image}/>
                    </View>
                </View>
            }

            {itemPurchased === 'false' && 
                <View>
                    <Text>No item has been added to the cart. Yet!</Text>
                </View>
            }

            {itemPurchased === 'true' && 
                <TouchableOpacity>
                    <Text>Button -- to do when nav bar is shown on this page</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        margin: 20,
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
    }
});
