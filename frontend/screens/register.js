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

export default function RegisterScreen({navigation}) {

    const RegisterScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    }
    const registerUser = async() => {
      if(userPassword === 'Test') {
          await AsyncStorage.setItem("newUser", 'true')
      } else {
          alert('Please register as "Bob" with the password "Test"')
      }
  }

    // const passwordInputRef = createRef();
 
    const handleSubmitPress = () => {
      // setErrortext('');
      if (!userEmail) {
        alert('Please fill Email');
        return;
      }
      if (!userPassword) {
        alert('Please fill Password');
        return;
      }
    }
    return (
    <View>
      {/* <View>
        <Text>Cart</Text>
      </View> */}
      <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:"space-between"}}>
        <View>
          <View style={styles.SectionStyle}>
          <View style={styles.inputStyle}> 
            <Ionicons name="person-outline" style={{fontSize: 20, padding: 8}}>
            <TextInput
            style={styles.inputStyle}
            // onChangeText={(UserPassword) =>
            //   setUserPassword(UserPassword)
            // }
            placeholder="Name:" //12345
            placeholderTextColor="#515154"
            keyboardType="default"
            // ref={passwordInputRef}
            // onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            // secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
            /> 
            </Ionicons>
          </View>
          </View>
            <View style={styles.SectionStyle}>
            <View style={styles.inputStyle}> 
              <Ionicons name="mail-outline" style={{fontSize: 20, padding: 8}}>
              <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserEmail) =>
                //   setUserEmail(UserEmail)
                // }
                placeholder="Email:" //dummy@abc.com
                placeholderTextColor="#515154"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current &&
                //   passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
              />
              </Ionicons>
            </View>
            </View>
            <View style={styles.SectionStyle}>
            <View style={styles.inputStyle}> 
              <Ionicons name="lock-closed-outline" style={{fontSize: 20, padding: 8}}>
               <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserPassword) =>
                //   setUserPassword(UserPassword)
                // }
                placeholder="Password:" //12345
                placeholderTextColor="#515154"
                keyboardType="default"
                // ref={passwordInputRef}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              /> 
              </Ionicons>
            </View>
            </View>
            <View style={styles.SectionStyle}>
              <View style={styles.inputStyle}> 
              <Ionicons name="lock-closed-outline" style={{fontSize: 20, padding: 8}}>
               <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserPassword) =>
                //   setUserPassword(UserPassword)
                // }
                placeholder="Confirm Password:" //12345
                placeholderTextColor="#515154"
                keyboardType="default"
                // ref={passwordInputRef}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              /> 
              </Ionicons>
              </View>
            </View>
            {/* {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null} */}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => registerUser()}>
              <Text style={styles.buttonTextStyle}>Register</Text>
            </TouchableOpacity>
            <Text
              style={styles.loginTextStyle}
              onPress={() => navigation.navigate('LoginScreen')}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text
                style={styles.linkTextStyle}>
                Login here
              </Text>
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
    // borderColor: '#dadae8',
    borderColor: '#e4e4e4',
    backgroundColor: '#e4e4e4'  
  },
  loginTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 10,
    // backgroundColor: '#e4e4e4'
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



// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/
 
// // Import React and Component
// import React, {useState, createRef} from 'react';
 
// import AsyncStorage from '@react-native-community/async-storage';
 
// // import Loader from './Components/Loader';
 
// const LoginScreen = ({navigation}) => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   // const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
 
//   const passwordInputRef = createRef();
 
//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     // setLoading(true);
//     // let dataToSend = {email: userEmail, password: userPassword};
//     // let formBody = [];
//     // for (let key in dataToSend) {
//     //   let encodedKey = encodeURIComponent(key);
//     //   let encodedValue = encodeURIComponent(dataToSend[key]);
//     //   formBody.push(encodedKey + '=' + encodedValue);
//     // }
//     // formBody = formBody.join('&');
 
//     // fetch('http://localhost:3000/api/user/login', {
//     //   method: 'POST',
//     //   body: formBody,
//     //   headers: {
//     //     //Header Defination
//     //     'Content-Type':
//     //     'application/x-www-form-urlencoded;charset=UTF-8',
//     //   },
//     // })
//     //   .then((response) => response.json())
//     //   .then((responseJson) => {
//     //     //Hide Loader
//     //     // setLoading(false);
//     //     // console.log(responseJson);
//     //     // If server response message same as Data Matched
//     //     if (responseJson.status === 'success') {
//     //       AsyncStorage.setItem('user_id', responseJson.data.email);
//     //       console.log(responseJson.data.email);
//     //       navigation.replace('DrawerNavigationRoutes');
//     //     } else {
//     //       setErrortext(responseJson.msg);
//     //       console.log('Please check your email id or password');
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     //Hide Loader
//     //     // setLoading(false);
//     //     // console.error(error);
//     //   });
//   };
 
//   return (
//     <View style={styles.mainBody}>
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           flex: 1,
//           justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View>
//           <KeyboardAvoidingView enabled>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={(UserEmail) =>
//                   setUserEmail(UserEmail)
//                 }
//                 placeholder="Enter Email" //dummy@abc.com
//                 placeholderTextColor="#8b9cb5"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 returnKeyType="next"
//                 onSubmitEditing={() =>
//                   passwordInputRef.current &&
//                   passwordInputRef.current.focus()
//                 }
//                 underlineColorAndroid="#f000"
//                 blurOnSubmit={false}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={(UserPassword) =>
//                   setUserPassword(UserPassword)
//                 }
//                 placeholder="Enter Password" //12345
//                 placeholderTextColor="#8b9cb5"
//                 keyboardType="default"
//                 ref={passwordInputRef}
//                 onSubmitEditing={Keyboard.dismiss}
//                 blurOnSubmit={false}
//                 secureTextEntry={true}
//                 underlineColorAndroid="#f000"
//                 returnKeyType="next"
//               />
//             </View>
//             {errortext != '' ? (
//               <Text style={styles.errorTextStyle}>
//                 {errortext}
//               </Text>
//             ) : null}
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={handleSubmitPress}>
//               <Text style={styles.buttonTextStyle}>LOGIN</Text>
//             </TouchableOpacity>
//             <Text
//               style={styles.registerTextStyle}
//               /*onPress={() => navigation.navigate('RegisterScreen')}*/>
//               New Here ? Register
//             </Text>
//           </KeyboardAvoidingView>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// export default LoginScreen;
 
// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#307ecc',
//     alignContent: 'center',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 25,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#dadae8',
//   },
//   registerTextStyle: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });