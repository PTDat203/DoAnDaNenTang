import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
export default PassSetting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        {/* icon */}
        <View style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              textAlign: "right",
              paddingRight: 20,
              color: "#222222",
            }}
          >
            <FontAwesome name="search" size={18} />
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 5,
              color: "#222222",
            }}
          >
            <FontAwesome
              name="chevron-left"
              size={18}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
          </Text>
        </View>

        <Text
          style={{
            color: "black",
            fontSize: 34,
            fontWeight: "bold",
            textAlign: "left",
            marginTop: 20,
            marginBottom: 60,
          }}
        >
          Settings
        </Text>
        {/* info person */}
      </View>
      <View style={{ marginBottom: 20, marginLeft: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Personal Information
        </Text>
        <Text style={{ color: "#9B9B9B", fontSize: 11, marginTop: 5 }}>
          Name, Data of Birth
        </Text>
      </View>
      <View style={{ marginBottom: 20, marginLeft: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Password</Text>
        <Text style={{ color: "#9B9B9B", fontSize: 11, marginTop: 5 }}>
          Password settings
        </Text>
      </View>

      {/* settings password */}
      <View style={styles.taskSetting}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 40,
            paddingBottom: 30,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Password Change
        </Text>
        <TextInput
          placeholder="Password"
          keyboardType="email-address"
          returnKeyType="go"
          secureTextEntry
          style={styles.textInput}
        />
        <Text style={{ textAlign: "right", color: "#9B9B9B" }}>
          Forgot Password?
        </Text>
        <TextInput
          placeholder="New Password"
          keyboardType="email-address"
          returnKeyType="go"
          secureTextEntry
          style={styles.textInput}
        />
        <TextInput
          placeholder="Repeat New Password"
          keyboardType="email-address"
          returnKeyType="go"
          secureTextEntry
          style={styles.textInput}
        />
        <Text
          style={styles.btnTask}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          SAVE PASSWORD
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cacaca",
    paddingTop: 55,
  },
  textInput: {
    height: 64,

    borderColor: "gray",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 343,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  taskSetting: {
    height: "66%",
    backgroundColor: "gray",
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnTask: {
    width: 340,
    height: 50,
    textAlign: "center",
    paddingTop: 15,
    marginLeft: 5,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: "#DB3022",
    color: "white",
  },
});
