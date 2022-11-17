import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text, Image, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function EditProfile({ navigation }) {

    const [firstName, setFirstName] = useState("Bruce")
    const [lastName, setLastName] = useState("Shiny")

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Edit Profile
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "80%" }}>
                <View style={styles.form}>
                    <TouchableOpacity
                        onPress={() => { Alert.alert("Not implemented", "Uploading a profile picture is not currently implemented", ["OK"]) }}>
                        <Image source={require("../images/profile.png")} style={{
                            borderRadius: 8,
                            marginVertical: 12,
                            width: 150,
                            height: 150
                        }} resizeMode="contain" />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        onChangeText={setFirstName}
                        value={firstName}
                        placeholder="First Name"
                        returnKeyType="done"
                        placeholderTextColor="grey"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLastName}
                        value={lastName}
                        placeholder="Last Name"
                        returnKeyType="done"
                        placeholderTextColor="grey"
                    />
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.evaluateButton}
                        onPress={() => {
                            navigation.goBack()
                            alert('The information would update the profile of the user if we had a backend')
                        }
                        }>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        width: "90%",
        padding: 10,
        marginTop: 10,
        alignItems: "flex-start",
        marginLeft: 12,

    },
    input: {
        color: 'black',
        backgroundColor: '#E4E4E4',
        width: "90%",
        borderRadius: 8,
        padding: 10,
        marginTop: 10

    },
    form: {
        display: "flex",
        alignItems: "center"
    },
    evaluateButton: {
        color: 'white',
        backgroundColor: '#167D7F',
        width: "90%",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
    },
})