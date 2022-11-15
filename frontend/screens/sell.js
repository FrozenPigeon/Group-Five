import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput } from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function SellScreen({ navigation }) {

  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [itemPhoto, setItemPhoto] = useState();

  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemSize, setItemSize] = useState("Item Size");
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [itemCategory, setItemCategory] = useState("Item Category")
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  function checkFormFilled() {

    if (itemTitle.length < 1) {
      return false
    }

    else if (itemSize === "Item Size" || itemSize === "Shoe Size (US)") {

      return false
    }

    else if (itemCategory === "Item Category") {

      return false

    }

    return true

  }

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
          <Text style={{ color: "white" }}> Take a photo of your item to evaluate</Text>
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
        <View style={styles.form}>
          <Text style>
          Sell to our Warehouse
          </Text>
        </View>
        <View style={{ alignItems: "center"}}>
          <Image style={{ height: "20%", width: "90%", borderRadius: 8, borderWidth: 1, borderColor: "grey" }} ssource={{ uri: itemPhoto.uri }}>

          </Image>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setItemTitle}
            value={itemTitle}
            placeholder="Item Title"
            placeholderTextColor="grey"
          />

          <TouchableOpacity style={styles.dropdown} onPress={e => { categoryDropdownOpen ? setCategoryDropdownOpen(false) : setCategoryDropdownOpen(true) }}>
            {itemCategory === 'Item Category' ?
              <Text style={{ color: 'grey' }}> {itemCategory} </Text>
              :
              <Text> {itemCategory} </Text>
            }
          </TouchableOpacity>

          {categoryDropdownOpen &&
            <>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => {
                  setItemCategory("Shirts");
                  setCategoryDropdownOpen(false)
                  setItemSize("Item Size");
                }
                }>
                <Text> Shirts </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => {
                  setItemCategory("Dresses");
                  setCategoryDropdownOpen(false);
                  setItemSize("Item Size");
                }
                }>
                <Text> Dresses </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => {
                  setItemCategory("Jackets, Hoodies & Coats");
                  setCategoryDropdownOpen(false);
                  setItemSize("Item Size");
                }
                }>
                <Text> Jackets, Hoodies & Coats </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => {
                  setItemCategory("Pants & Shorts");
                  setCategoryDropdownOpen(false);
                  setItemSize("Item Size");
                }
                }>
                <Text> Pants & Shorts </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownOption}
                onPress={() => {
                  setItemCategory("Shoes");
                  setCategoryDropdownOpen(false);
                  setItemSize("")
                }
                }>
                <Text> Shoes </Text>
              </TouchableOpacity>


            </>

          }

          {itemCategory !== "Shoes" &&
            <>
              <TouchableOpacity style={styles.dropdown} onPress={e => { sizeDropdownOpen ? setSizeDropdownOpen(false) : setSizeDropdownOpen(true) }}>
                {itemSize === 'Item Size' ?
                  <Text style={{ color: 'grey' }}> {itemSize} </Text>
                  :
                  <Text> {itemSize} </Text>
                }
              </TouchableOpacity>

              {sizeDropdownOpen && (
                <>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setItemSize("XS");
                      setSizeDropdownOpen(false)
                    }
                    }>
                    <Text> XS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setItemSize("S");
                      setSizeDropdownOpen(false)
                    }
                    }>
                    <Text> S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setItemSize("M");
                      setSizeDropdownOpen(false)
                    }
                    }>
                    <Text> M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setItemSize("XL");
                      setSizeDropdownOpen(false)
                    }
                    }>
                    <Text> L</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => {
                      setItemSize("XL");
                      setSizeDropdownOpen(false)
                    }
                    }>
                    <Text> XL</Text>
                  </TouchableOpacity>
                </>
              )}

            </>
          }

          {itemCategory === "Shoes" &&

            <TextInput
              style={styles.input}
              onChangeText={setItemSize}
              value={itemSize}
              keyboardType="numeric"
              placeholder="Shoe Size (US)"
              placeholderTextColor="grey"
            />

          }

          <TextInput
            style={styles.inputDescription}
            onChangeText={setItemDescription}
            value={itemDescription}
            placeholder="Item Description"
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={5}
          />

          <TouchableOpacity
            style={styles.evaluateButton}
            onPress={() => {
              setItemSize("XL");
              setSizeDropdownOpen(false)
            }
            }>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Evaluate</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }

  useEffect(() => {



  }, [itemTitle, itemCategory, itemDescription, itemSize]);

  return (

    <View></View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
  title: {
    width: "90%",
    padding: 10,
    marginTop: 10,
    alignItems: "flex-start"

  },
  input: {
    color: 'black',
    backgroundColor: '#E4E4E4',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10

  },
  dropdown: {
    color: 'black',
    backgroundColor: '#E4E4E4',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,

  },
  dropdownOption: {
    color: 'black',
    backgroundColor: '#F6F6F6',
    width: "90%",
    padding: 10,

  },
  inputDescription: {
    color: 'black',
    backgroundColor: '#E4E4E4',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    height: 100

  },
  evaluateButton: {
    color: 'white',
    backgroundColor: '#167D7F',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center"
  }
});
