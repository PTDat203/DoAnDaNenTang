import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, Image } from "react-native";
import { users } from "../Data/userData"; // Adjust the import path as necessary
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }
    if (password.trim() === "") {
      alert("Please enter your password");
      return;
    }

    // Check if email and password match any user in the array
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigation.navigate("HomePage");
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          width: 100,
          position: "absolute",
          left: 15,
          top: 60,
          color: "#222222",
          paddingBottom: 50,
        }}
      >
        <FontAwesome name="chevron-left" size={22} />
      </Text>
      <Text
        style={{
          width: "100%",
          height: 140,
          justifyContent: "center",
          textAlign: "center",
          paddingTop: 70,
          marginTop: 30,
          paddingBottom: 20,
          borderBottomWidth: 0.3,
          borderColor: "gray",
          fontSize: 34,
          lineHeight: 34,
          fontWeight: "bold",
          marginBottom: 50,
        }}
        onPress={() => {
          navigation.popToTop();
        }}
      >
        Login
      </Text>

      <View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Password"
            returnKeyType="go"
            secureTextEntry
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Text
          style={{
            textAlign: "right",
            color: "black",
            lineHeight: 20,
            fontSize: 14,
            marginBottom: 25,
          }}
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          Forgot your password?
        </Text>

        <Text style={styles.button} onPress={handleLogin}>
          LOGIN
        </Text>
        <Text
          style={styles.button}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          SIGN UP
        </Text>
      </View>

      <Text
        style={{
          textAlign: "right",
          color: "black",
          lineHeight: 20,
          fontSize: 14,
          marginTop: 100,
        }}
      >
        Or sign up with social account
      </Text>
    </View>
  );
}

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
  button: {
    backgroundColor: "#DB3022",
    color: "white",
    width: 340,
    height: 45,
    padding: 12,
    borderRadius: 50,
    borderColor: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
});
