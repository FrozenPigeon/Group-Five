import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from "react-native";
import { Camera, CameraType} from "expo-camera";

export default function SellScreen({ navigation }) {

    let cameraRef = useRef();
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [itemPhoto, setItemPhoto] = useState();
    
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemSize, setItemSize] = useState("");
    const [itemCategory, setItemCategory] = useState("")
  
    let takePhoto = async () => {

        let options = {
            quality: 1,
            base64: true,
            exif: false
        };
        
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync(options)
            console.log(photo)
            setItemPhoto(photo)
        }

    }

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    
    if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
        <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
        </View>
    );
    }

    if (!itemPhoto && permission.granted) {
        return (
            <View style={styles.container}>
              <Camera style={styles.camera} type={type} ref={cameraRef}>
                <Text style={{color: "white"}}> Take a photo of your item to evaluate</Text>
                <View style={styles.buttonContainer}>
                    
                  <TouchableOpacity style={styles.button} onPress={takePhoto}>
                    <Text style={styles.text}>Take Photo</Text>
                  </TouchableOpacity>
                  
                </View>
              </Camera>
            </View>
          ); 
    }

    if (itemPhoto) {
        return (
            <View style={styles.container}>
              <Image style={{height: "70%", width: "100%"}}ssource={{uri: itemPhoto.uri}}>

              </Image>
              <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setItemTitle}
                    value={itemTitle}
                    placeholder="Item Title"
                    placeholderTextColor="grey"
                />

                <TextInput 
                    style={styles.inputDescription}
                    onChangeText={setItemDescription}
                    value={itemDescription}
                    placeholder="Item Description"
                    placeholderTextColor="grey"
                    multiline={true}
                    numberOfLines={5}
                />

              </View>
              
            </View>
          ); 
    }

    return (

        <View></View>
    )
  
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      height: "50%",    
      width: "100%",
      alignItems: "center"
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    form: {
        display: "flex",
        alignItems: "center"
    },
    input: {
        color: 'black',
        backgroundColor: '#E4E4E4',
        width: "90%",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
       
    },
    inputDescription: {
      color: 'black',
      backgroundColor: '#E4E4E4',
      width: "90%",
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      height: 100
     
  }
  });
