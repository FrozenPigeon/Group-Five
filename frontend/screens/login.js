import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
// import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {

  const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");

    /*
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");
    */

    // const passwordInputRef = createRef();
 
    const handleSubmitPress = () => {
      // setErrortext('');
      if (!userEmail) {
        alert('Please fill in your email!');
        return;
      }
      if (!userPassword) {
        alert('Please fill in your password');
        return;
      }
      if (userEmail === "bob@gmail.com" && userPassword === "test") {
        navigation.navigate("Home")
      } 
      else {
        alert('Email or password invalid')
      }
    }
    return (
    <View>
      {/* <View>
        <Text>Cart</Text>
      </View> */}
      <ScrollView contentContainerStyle={{display: "flex", flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:"space-between"}}>
        <View>
            <View style={styles.SectionStyle}>
              <Ionicons name="mail-outline" style={{fontSize: 20, padding: 8}}/>
              {/* <TextInput 
                    placeholder="Search ..."
                    onChangeText={(e) => setQ(e)}
                    defaultValue={q}
                    placeholderTextColor='#515154'
                /> */}
              
              <TextInput
                style={styles.inputStyle}
                onChangeText={setUserEmail}
                userEmail={userEmail}
                placeholder="Email:" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current &&
                //   passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
              />
            </View>
            <View style={styles.SectionStyle}>
              <Ionicons name="lock-closed-outline" style={{fontSize: 20, padding: 8}}/>
               <TextInput
                style={styles.inputStyle}
                
                onChangeText={setUserPassword}
                userPassword={userPassword}

                placeholder="Password:" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              /> 
            </View>
            {/* {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null} */}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            {/* <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New? Register here
            </Text> */}
            <Text style={styles.registerTextStyle} onPress={() => navigation.navigate("RegisterScreen")}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={styles.linkTextStyle}>
              Sign up here</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
 
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    // marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#167D7F',
    borderWidth: 0,
    color: 'black',
    borderColor: '#167D7F',
    height: 40,
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 10
  },
  linkTextStyle: {
    color: '#167D7F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
