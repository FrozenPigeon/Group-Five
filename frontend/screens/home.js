import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import clothing_items from "../data/ClothesData";


export default function HomeScreen({ navigation }) {
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [flagThrift, setFlagThrift] = useState(0);
    const [flagWarehouse, setFlagWarehouse] = useState(0);

    const select = () => {
        // Alert.alert(clothing_items[0].id)
        // alert(clothing_items[0].title);
        navigation.navigate("ItemViewScreen")
    }

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
        if(flagThrift === 0) {
            setFilterParam("Thriftstore")
        } else setFilterParam("All")
    }

    const selectWarehouse = () => {
        setFlagWarehouse(flagWarehouse === 0 ? 1 : 0);
        if(flagWarehouse === 0) {
            setFilterParam("Warehouse")
        } else setFilterParam("All")
    }

    return (
        <View>
            <TextInput 
                placeholder="Search ..."
                onChangeText={(e) => setQ(e)}
                defaultValue={q}
            />
            <TouchableOpacity onPress={() => select()}><Text>Press to go to ItemViewScreen</Text></TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => selectThriftstore()}><Text>Thrifstore</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => selectWarehouse()}><Text>Warehouse</Text></TouchableOpacity>
            </View>

            <View style={{backgroundColor:'red'}}>
                {search(clothing_items).map((info) => (
                    
                    <View style={{borderStyle:'solid', borderColor:'blue', borderWidth:'1px', marginBottom:'10%'}}>
                        <Text>{info.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

}
