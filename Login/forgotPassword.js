import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          position: "absolute",
          left: 15,
          top: 60,
          color: "#222222",
          paddingBottom: 50,
        }}
       
      >
        <FontAwesome
          name="chevron-left"
          size={22}
          
        />
      </Text>
      <Text
        style={{
          width: "100%",
          height: 140,
          justifyContent: "center",
          textAlign:'center',
         
          paddingTop: 70,
          marginTop: 50,
          
          paddingBottom: 20,
          borderBottomWidth: 0.3,
          borderColor: "gray",
          fontSize: 34,
          lineHeight: 34,
          fontWeight: "bold",
          marginBottom: 50,
        }}
        onPress = {() => {
          navigation.popToTop()
         }}
      >
        Forgot Password
      </Text>

      <View>
        <Text
          style={{
            textAlign: "left",

            color: "black",
            lineHeight: 20,
            fontSize: 14,
            marginBottom: 25,
          }}
        >
          Please. enter your email address. You will receive a link to create a
          new password via email.
        </Text>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <Text
          style={{
            marginTop: -5,
            fontSize: 11,
            lineHeight: 11,
            textAlign: "center",
            color: "#f1392a",
          }}
        >
          Not a valid email address. Should be your@email.com
        </Text>

        <Text
          style={{
            backgroundColor: "#DB3022",
            color: "white",
            width: 340,
            height: 45,
            padding: 12,
            borderRadius: 50,
            borderColor: "gray",
            textAlign: "center",
            marginTop: 65,
          }}
          
        >
          SEND
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
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
});
