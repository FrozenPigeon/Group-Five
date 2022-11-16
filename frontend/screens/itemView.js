import React from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ItemViewScreen({route, navigation}) {
    const {title, price, description, size, condition, location, image} = route.params

    const addToCart = async() => {
        if(title === 'Green Hoodie') {
            await AsyncStorage.setItem("purchased_item", 'true')
            navigation.goBack()
        } else {
            alert('Only green hoodie is purchasable')
        }
    }

    return (
        <View style={styles.main_container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={image} style={{width:220, height: '100%'}}/>
                </View>

                <View>
                    <Text style={styles.heading}>{title}</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.contentHeading}>Description</Text>
                        <Text style={styles.contentBody}>{description}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoContentContainer}>
                            <Text style={styles.contentHeading}>Size</Text>
                            <Text style={styles.contentBody}>{size}</Text>  
                        </View>
                        <View style={styles.infoContentContainer}>
                            <Text style={styles.contentHeading}>Condition</Text>
                            <Text style={styles.contentBody}>{condition}</Text>
                        </View>
                        <View style={styles.infoContentContainer}>
                            <Text style={styles.contentHeading}>Price</Text>
                            <Text style={styles.contentBody}>{price} tokens</Text>
                        </View>
                    </View>
                    <View style={styles.locationContainer}>
                        <View>
                            <Text style={styles.contentHeading}>Location</Text>
                            <Text style={styles.contentBody}>{location}</Text>
                        </View>
                        <TouchableOpacity style={styles.directionsButton} onPress={() => alert('This would take you to google maps')}>
                            <Ionicons name="compass-outline" style={{fontSize: 20, paddingRight: 8}}/>
                            <Text>Directions</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require("../images/map.png")} style={styles.map}/>
                </View>

                <TouchableOpacity 
                    style={styles.cartButton}
                    onPress={() => addToCart()} 
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Add to Cart</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        margin: 20,
    },
    imageContainer: {
        backgroundColor: '#DDFFE7',
        borderRadius: 8,
        alignItems: 'center',
        maxHeight: 220,
        padding: 8
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 16
    },
    descriptionContainer: {
        paddingBottom: 8,
    },
    locationContainer: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentHeading: {
        fontSize: 18,
        fontWeight: '500',
        paddingBottom: 8
    },
    contentBody: {
        fontSize: 14,
        fontWeight: '300',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4
    },
    infoContentContainer: {
        alignItems: 'center'
    },
    map: {
        borderRadius: 8,
        marginVertical: 12,
        width: '100%',
    },
    directionsButton: {
        backgroundColor: '#98D7C2',
        paddingHorizontal: 8,
        paddingVertical: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        borderRadius: 8
    },
    cartButton: {
        backgroundColor: '#167D7F',
        width: "100%",
        borderRadius: 8,
        textAlign: 'center',
        alignItems: "center",
        paddingVertical: 12,
        marginBottom: 30,
    }
});