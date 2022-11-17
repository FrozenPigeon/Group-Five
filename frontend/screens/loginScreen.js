import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"
import React, { useEffect, useRef, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hidePassword, setHidePassword] = useState(true)

    function handleLogin() {

        if (email === "bob@gmail.com" && password === "test") {
            navigation.navigate("BottomNavigation")
        } else {
            Alert.alert("Invalid Login")
        }
        return
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Login
                </Text>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Ionicons name="mail-outline" style={{ fontSize: 20, marginRight: 10 }} />
                    <TextInput
                        style={{ width: "90%", color: 'black' }}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="grey"
                    />
                </View>
                <View style={styles.input}>
                    <Ionicons name="lock-closed-outline" style={{ fontSize: 20, marginRight: 10 }} />
                    <TextInput
                        style={{width: "85%", color: 'black' }}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={hidePassword}
                        placeholder="Password"
                        placeholderTextColor="grey"
                    />
                    <TouchableOpacity onPress={()=> hidePassword ? setHidePassword(false) : setHidePassword(true)}>
                        { hidePassword ?
                            <Ionicons name="eye-outline" style={{ fontSize: 20}} />
                            : 
                            <Ionicons name="eye-off-outline" style={{ fontSize: 20}} />
                        }
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={{ marginTop: 10, marginLeft: 25, alignSelf: "flex-start" }} onPress={() => Alert.alert("Not implemented", "Reset password not implemented")}>
                    <Text style={{color: '#167D7F'}}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>


            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>

            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={styles.evaluateButton}
                    onPress={handleLogin}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, display: "flex", flexDirection: "row" }} onPress={() => Alert.alert("Not implemented", "Registration page not implemented")}>
                    <Text style={styles.registerTextStyle}>
                        Don't have an account?
                    </Text>
                    <View style={{ width: 5 }} />
                    <Text style={{ color: '#167D7F' }}>
                        Sign up here.
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        color: 'black',
        backgroundColor: '#E4E4E4',
        width: "90%",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        flexDirection: "row"

    },
    title: {
        width: "90%",
        padding: 10,
        marginTop: 10,
        alignItems: "flex-start",
        marginLeft: 12,

    },
    evaluateButton: {
        color: 'white',
        backgroundColor: '#167D7F',
        width: "90%",
        borderRadius: 8,
        padding: 10,
        marginTop: 50,
        alignItems: "center"
    },
})