import React, { useEffect, useRef, useState } from "react";
import { Keyboard, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput, Alert, KeyboardAvoidingView } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera, CameraType } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SellScreen({ navigation }) {

  const [type, setType] = useState(CameraType.back);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [itemPhoto, setItemPhoto] = useState(null);

  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const [itemSize, setItemSize] = useState("Item Size");
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);

  const [itemCategory, setItemCategory] = useState("Item Category")
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const [canEvaluate, setCanEvaluate] = useState(false);

  const [evaluateStage, setEvaluateStage] = useState(false);

  const [itemValuation, setItemValuation] = useState(0);

  const [deliveryOption, setDeliveryOption] = useState("Pickup");

  const cameraRef = useRef(null);

  const confirmSale = async () => {

    Alert.alert("Sale Confirmed", null, [
      {
        text: 'OK'
      }

    ])
    try {
      await AsyncStorage.setItem('sold_item', "true");
      await AsyncStorage.setItem('sold_item_photo', itemPhoto);
    } catch {

    }

    setEvaluateStage(false)
    setItemPhoto("")
    setItemValuation(0)
    setItemTitle("")
    setItemDescription("")
    setItemCategory("Item Category")
    setItemSize("Item Size")
    setCategoryDropdownOpen(false)
    setSizeDropdownOpen(false)

  }

  useEffect(() => {

    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();

  }, []);

  useEffect(() => {

    setCanEvaluate(checkFormFilled)

  }, [itemTitle, itemCategory, itemDescription, itemSize]);

  function reset() {
    setEvaluateStage(false)
    setItemPhoto("")
    setItemValuation(0)
    setItemTitle("")
    setItemDescription("")
    setItemCategory("Item Category")
    setItemSize("Item Size")
    setCategoryDropdownOpen(false)
    setSizeDropdownOpen(false)
  }

  function checkFormFilled() {

    if (itemTitle.length < 1) {
      return false
    }

    else if (itemSize === "Item Size" || itemSize === "") {

      return false
    }

    else if (itemCategory === "Item Category") {

      return false

    }

    return true

  }

  function itemEvaluation() {

    if (itemCategory === "Shirts") {
      return Math.floor(Math.random() * 5) + 3;
    } else if (itemCategory === "Dresses") {
      return Math.floor(Math.random() * 5) + 3;
    } else if (itemCategory === "Jackets, Hoodies & Coats") {
      return Math.floor(Math.random() * 7) + 4;
    } else if (itemCategory === "Pants & Shorts") {
      return Math.floor(Math.random() * 6) + 4;
    } else if (itemCategory === "Shoes") {
      return Math.floor(Math.random() * 14) + 7;
    }


  }

  const takePhoto = async () => {

    const options = {

    };

    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          quality: 0,
          base64: true,
          exif: false,
        });

        setItemPhoto(data.uri)

      } catch (error) {

      }

    }

  }

  if (!hasCameraPermission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!itemPhoto && hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 20, fontWeight: "bold" }}> Take a photo of your item</Text>
          <View style={styles.buttonContainer}>

            <TouchableOpacity style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: "center",
              borderRadius: "50%",
              height: 75,
              width: 75,
              backgroundColor: "white",
              borderColor: "#167D7F",
              borderWidth: 3
            }} onPress={takePhoto}>
              <Ionicons name="camera" size={"32px"} color="#167D7F" />
            </TouchableOpacity>

          </View>
        </Camera>
      </View>
    );
  }

  if (itemPhoto && !evaluateStage) {
    return (
      
      <KeyboardAvoidingView
      keyboardVerticalOffset={70+70}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      <ScrollView contentContainerStyle={styles.container}>
      
          <View style={styles.title}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Sell to our Warehouse
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setItemPhoto(null)}
              style={{ display: "flex", alignItems: "center", height: 200, width: "90%" }}>
              <Image style={{ height: 200, width: "100%", borderRadius: 8, borderWidth: 1, borderColor: "grey" }} source={{ uri: itemPhoto }} />
            </TouchableOpacity>

          </View>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={setItemTitle}
              value={itemTitle}
              placeholder="Item Title"
              returnKeyType="done"
              placeholderTextColor="grey"
            />

            <TouchableOpacity style={styles.dropdown} onPress={e => { categoryDropdownOpen ? setCategoryDropdownOpen(false) : setCategoryDropdownOpen(true) }}>
              {itemCategory === 'Item Category' ?
                <Text style={{ color: 'grey' }}> {itemCategory} </Text>
                :
                <Text> {itemCategory} </Text>
              }
              {categoryDropdownOpen ?
                <Ionicons name="caret-up-outline" size="medium" />
                :
                <Ionicons name="caret-down-outline" size="medium" />
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
                  {sizeDropdownOpen ?
                    <Ionicons name="caret-up-outline" size="medium" />
                    :
                    <Ionicons name="caret-down-outline" size="medium" />
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
                returnKeyType="done"
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
              returnKeyType="done"
              placeholder="Item Description (Optional)"
              placeholderTextColor="grey"
              textAlignVertical="top"
              multiline
              blurOnSubmit={true}
              onSubmitEditing={() => { Keyboard.dismiss() }}
            />

            {canEvaluate ?
              <TouchableOpacity
                style={styles.evaluateButton}
                onPress={() => {
                  setEvaluateStage(true)
                  setItemValuation(itemEvaluation)
                }
                }>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Evaluate</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.evaluateButtonDisabled}
                disabled={true}
                onPress={() => {
                  setEvaluateStage(true)
                }
                }>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Evaluate</Text>
              </TouchableOpacity>
            }

          </View>
          <View style={{flex: 1}}/>
          </ScrollView>
        </KeyboardAvoidingView>
    );
  }

  if (itemPhoto && evaluateStage) {
    return (
      <View style={styles.evaluateContainer}>
        <View style={styles.title2}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Item Valuation
          </Text>
        </View>
        <View style={styles.body}>

          <View style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              We value the item at:
            </Text>
            <Text style={{ fontSize: 60, fontWeight: "bold" }}>
              {itemValuation} <Ionicons name="logo-bitcoin" style={{ fontSize: 60 }} />
            </Text>


          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
            {deliveryOption !== "Pickup" ?
              <>
                <TouchableOpacity
                  style={styles.deliveryLeftButton}
                  onPress={() => {
                    setDeliveryOption("Pickup")
                  }
                  }>
                  <Text style={{ color: "black", fontWeight: "bold" }}>We pickup item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deliveryRightButtonSelected}
                  disabled={true}
                  onPress={() => {
                  }
                  }>
                  <Text style={{ color: "white", fontWeight: "bold" }}>Deliver to warehouse</Text>
                </TouchableOpacity>
              </>
              :
              <>
                <TouchableOpacity
                  style={styles.deliveryLeftButtonSelected}
                  disabled={true}
                  onPress={() => {
                  }
                  }>
                  <Text style={{ color: "white", fontWeight: "bold" }}>We pickup item</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deliveryRightButton}
                  onPress={() => {
                    setDeliveryOption("Delivery")
                  }
                  }>
                  <Text style={{ color: "black", fontWeight: "bold" }}>Deliver to warehouse</Text>
                </TouchableOpacity>
              </>
            }

          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50, alignSelf: "flex-end" }}>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={reset}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Cancel</Text>
            </TouchableOpacity>
            <View style={{ width: 10 }} />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmSale}
            >
              <Text style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Confirm</Text>
            </TouchableOpacity>

          </View>


        </View>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      { }
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  evaluateContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  camera: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom: 50,
    width: "100%",
    justifyContent: "center"
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
    alignItems: "flex-start",
    marginLeft: 12,

  },
  title2: {
    width: "90%",
    padding: 10,
    marginTop: 10,
    alignItems: "flex-start",
    marginLeft: 12,

  },
  body: {
    display: "flex",
    width: "90%",
    height: "80%",
    padding: 10,
    marginTop: 10,
    alignItems: "center",

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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"

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
    height: 100,

  },
  evaluateButton: {
    color: 'white',
    backgroundColor: '#167D7F',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center"
  },
  evaluateButtonDisabled: {
    color: 'white',
    backgroundColor: '#167D7F',
    width: "90%",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    opacity: 0.5
  },
  deliveryLeftButton: {
    color: 'white',
    backgroundColor: '#E4E4E4',
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  deliveryLeftButtonSelected: {
    color: 'white',
    backgroundColor: '#167D7F',
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  deliveryRightButton: {
    color: 'white',
    backgroundColor: '#E4E4E4',
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  deliveryRightButtonSelected: {
    color: 'white',
    backgroundColor: '#167D7F',
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  confirmButton: {
    color: 'white',
    backgroundColor: '#167D7F',
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "flex-end"
  },
  cancelButton: {
    color: 'white',
    backgroundColor: '#AD1F41',
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "flex-end"
  },

});
