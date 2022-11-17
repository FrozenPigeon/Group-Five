import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Accessibility({ navigation }) {
  return (
    <View style={styles.main_container}>
        <View style={{paddingBottom: 32}}>
            <Text style={{fontSize: 16, fontWeight: '500', paddingBottom: 4}}>Vision</Text>
            <View style={styles.type_container}>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Voice Over</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Zoom</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container} onPress={() => navigation.navigate("Display & Text Size")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Display & Text Size</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Motion</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container_end} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Spoken Content</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{paddingBottom: 32}}>
            <Text style={{fontSize: 16, fontWeight: '500', paddingBottom: 4}}>Physical and Motor</Text>
            <View style={styles.type_container}>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Touch</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Voice Control</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container_end} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Keyboards</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{paddingBottom: 32}}>
            <Text style={{fontSize: 16, fontWeight: '500', paddingBottom: 4}}>Hearing</Text>
            <View style={styles.type_container}>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Sound Recognition</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Audio/Visual</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.specific_type_container_end} onPress={()=> Alert.alert("Not implemented", "Accessibility feature")}>
                    <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Subtitles & Captioning</Text>
                    <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Accessibility

const styles = StyleSheet.create({
    main_container: {
      margin: 20,
      display: "flex",
    },
    type_container: {
        backgroundColor: '#F2F1F0',
        borderRadius: 8,
        padding: 4
        
    },
    specific_type_container: {
        paddingVertical: 8,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    specific_type_container_end: {
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});