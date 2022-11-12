import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, ScrollView } from "react-native";
import clothing_items from "../data/ClothesData";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HomeScreen({ navigation }) {
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [flagThrift, setFlagThrift] = useState(0);
    const [flagWarehouse, setFlagWarehouse] = useState(0);

    const search = (items) =>{
        return items.filter((item) => {
            if (item.type == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    const selectThriftstore = () => {
        setFlagThrift(flagThrift === 0 ? 1 : 0);
        setFlagWarehouse(0)
        if(flagThrift === 0) {
            setFilterParam("Thriftstore")
        } else setFilterParam("All")
    }

    const selectWarehouse = () => {
        setFlagWarehouse(flagWarehouse === 0 ? 1 : 0);
        setFlagThrift(0)
        if(flagWarehouse === 0) {
            setFilterParam("Warehouse")
        } else setFilterParam("All")
    }

    const buttonStyle = {
        backgroundColor: flagThrift ? '#E4E4E4' : 'teal',
        backgroundColor: flagWarehouse ? '#E4E4E4' : 'teal',
      };

    return (
        <View style={styles.main_container}>
            <View style={styles.searchbar}>
                <Ionicons name="search-outline" color="#515154" style={{fontSize: 20, paddingRight: 8}} />
                <TextInput 
                    placeholder="Search ..."
                    onChangeText={(e) => setQ(e)}
                    defaultValue={q}
                    placeholderTextColor='#515154'
                />
            </View>
            
            <View style={styles.button_container}>
                <TouchableOpacity onPress={() => selectThriftstore()} style={[styles.button, {backgroundColor: flagThrift ? '#167D7F' : '#E4E4E4'}]}>
                <Text style={[styles.buttontext, {color: flagThrift ? '#FFFFFF' : '#515154'}]}>Thriftstore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectWarehouse()}   style={[styles.button, {backgroundColor: flagWarehouse ? '#167D7F' : '#E4E4E4'}]}>
                    <Text style={[styles.buttontext, {color: flagWarehouse ? '#FFFFFF' : '#515154'}]}>Warehouse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('This will show more filter options')}   style={[styles.button, {backgroundColor: '#E4E4E4'}]}>
                    <Text style={styles.buttontext}>More Filters</Text>
                </TouchableOpacity>
            </View>
        
            <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:"space-between"}}>
                {search(clothing_items).map((info, i) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("ItemViewScreen", {
                            key: i,
                            title: info.title,
                            price: info.price,
                            description: info.description,
                            size: info.size,
                            condition: info.condition,
                            location: info.location,
                            image: info.image
                        })} 
                        style={styles.itemContainer}
                    >
                        <View style={[styles.typeContainer, {backgroundColor: info.type === 'Thriftstore' ? '#0C3A5A' : '#AF638E'}]}>
                            {/* <Text style={{position:'relative', left: 40, backgroundColor:'red', paddingHorizontal: 4, borderRadius: 50}}>{info.type}</Text> */}
                            <Text style={{color: '#FFFFFF', fontSize: 11}}>{info.type}</Text>
                        </View>
                        
                        <Image source={info.image} style={{height: 120, width: 120, zIndex: 1}}/>
                        <View style={styles.itemInfoContainer}>
                            <Text style={styles.itemText}>{info.title}</Text>
                            <View style={styles.itemTextContainer}>
                                <Text style={styles.itemText}>{info.price}</Text>
                                <Ionicons name="logo-bitcoin" style={styles.itemText}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    main_container: {
        margin: 20,
        flex: 1,
    },
    searchbar: {
        color: '#515154',
        backgroundColor: '#E4E4E4',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
    },
    button_container: {
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
        paddingHorizontal: 20,
        paddingVertical: 6,
    },
    buttontext: {
        fontSize: 14,
        fontWeight: "400",
        color: '#515154',
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
  });