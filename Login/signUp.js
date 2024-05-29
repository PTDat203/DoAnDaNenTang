import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, Image } from "react-native";
import { users } from "../Data/userData"; // Adjust the import path as necessary
import { addUser } from "../Data/userData";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "All fields are required");
      return;
    }

    const newUser = { name, email, password };

    // Add the new user to the UserData.js
    addUser(newUser);

    Alert.alert("Success", "User registered successfully");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="go"
            secureTextEntry
            autoCorrect={false}
          />
        </View>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?
        </Text>

        <Text style={styles.signUpButton} onPress={handleSignUp}>
          SIGN UP
        </Text>
      </View>

      <Text style={styles.socialText}>Or sign up with social account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 70,
    paddingBottom: 20,
    borderBottomWidth: 0.3,
    borderColor: "gray",
    fontSize: 34,
    lineHeight: 34,
    fontWeight: "bold",
    marginBottom: 50,
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
  linkText: {
    textAlign: "right",
    color: "black",
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 25,
  },
  signUpButton: {
    backgroundColor: "#DB3022",
    color: "white",
    width: 340,
    height: 45,
    padding: 12,
    borderRadius: 50,
    borderColor: "gray",
    textAlign: "center",
    marginBottom: 110,
  },
  socialText: {
    textAlign: "right",
    color: "black",
    lineHeight: 20,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    marginTop: 15,
  },
  socialButton: {
    width: 92,
    height: 64,
    borderRadius: 20,
    backgroundColor: "white",
    textAlign: "center",
    paddingTop: 15,
    marginRight: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});
