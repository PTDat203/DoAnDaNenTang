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
export default Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
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
            marginBottom: 20,
          }}
        >
          Settings
        </Text>
        {/* info person */}
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Personal Information
      </Text>
      <TextInput
        placeholder="Full name"
        keyboardType="email-address"
        returnKeyType="next"
        autoCorrect={false}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Date of Birth"
        keyboardType="numeric"
        returnKeyType="next"
        autoCorrect={false}
        style={styles.textInput}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Password</Text>
        <Text
          style={{ fontSize: 14, color: "#9B9B9B", marginRight: 30 }}
          onPress={() => {
            navigation.navigate("PassSetting");
          }}
        >
          Change
        </Text>
      </View>
      <TextInput
        placeholder="Password"
        keyboardType="email-address"
        returnKeyType="go"
        secureTextEntry
        style={styles.textInput}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 40 }}>
        Notifications
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 15,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 14 }}>Sales</Text>
        <Text>
          <FontAwesome name="toggle-on" color="green" size={33} width={20} />
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 15,
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 14 }}>New arrivals</Text>
        <Text>
          <FontAwesome name="toggle-off" size={33} width={20} color="gray" />
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 15,
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 14 }}>Delivery status changes</Text>
        <Text>
          <FontAwesome name="toggle-off" size={33} width={20} color="gray" />
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 55,
    paddingLeft: 20,
  },
  textInput: {
    height: 64,

    borderColor: "gray",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: 343,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
