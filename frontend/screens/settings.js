import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

function Settings({ navigation }) {
  return (
    <View style={styles.main_container}>
        <View style={styles.profile_container}>
          <TouchableOpacity style={styles.info_container} onPress={() => navigation.navigate("EditProfileScreen")}>
            <Image source={require("../images/profile.png")} style={styles.user} resizeMode="contain"/>
            <View style ={{marginLeft: 20}}>
                <Text style={{fontSize:18, fontWeight: '300', paddingBottom: 4}}>Bruce Shiny</Text>
                <Text style={{fontSize:14, fontWeight: '200'}}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </View>
        <TouchableOpacity style={styles.settings_container}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Languages</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_container} onPress={() => navigation.navigate("Accessibility")}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Accessibility</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_container}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Security</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_container}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Notifications</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_container}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Camera</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_container}>
            <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>About</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 25}} />
        </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    main_container: {
      margin: 20,
      display: "flex",
    },
    profile_container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#E4E4E4',
      borderBottomWidth: 1
    },
    info_container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    user: {
        borderRadius: 8,
        marginVertical: 12,
        width: 60,
        height: 60,
    },
    settings_container: {
        paddingVertical: 8,
        borderBottomColor: '#E4E4E4',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});