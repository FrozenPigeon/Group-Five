import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Switch} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function DisplaySettings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <View style={styles.main_container}>
      <View style={styles.type_container}>
        <View style={styles.specific_type_container}>
          <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Bold Text</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#167D7F" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#F2F1F0"
            onValueChange={toggleSwitch}
            value={isEnabled}
            onChange={() => alert('This would change the boldness of the text')}
          />
        </View>
        <View style={styles.specific_type_container}>
          <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Larger Text</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#167D7F" }}
            thumbColor={isEnabled1 ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#F2F1F0"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
            onChange={() => alert('This would change the text size')}
          />
        </View>
        <View style={styles.specific_type_container}>
          <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Colour Filters</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, marginRight: 4, paddingVertical: 4}}>Off</Text>
            <Ionicons name="chevron-forward-outline" style={{fontSize: 18}} />
          </View>
        </View>
        <View style={styles.specific_type_container_end}>
          <Text style={{fontSize:17, fontWeight: '300', marginLeft: 8}}>Increase Contrast</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#167D7F" }}
            thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
            ios_backgroundColor="#F2F1F0"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
            onChange={() => alert('This would change the colour contrast for people with colour issues')}
          />
        </View>

      </View>
    </View>
  )
}

export default DisplaySettings

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