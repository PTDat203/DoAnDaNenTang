import React, { Profiler } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login/login";
import SignUp from "./Login/signUp";
import ForgotPassword from "./Login/forgotPassword";
import HomePage from "./HomePage/homePage";
import Shop from "./Shop/shop";
import ShopGucci from "./Shop/gucci";
import ShopDorothy from "./Shop/dorothyPerkins";
import ShopLevi from "./Shop/levi's";
import ShopNike from "./Shop/nike";
import { registerUpdateUserCallback } from "./Data/userData";
import ProductDetail from "./Shop/productDetail";
import OrderDetail from "./Profile/orderDetail";
import Order from "./Profile/order";
import profile from "./Profile/profile";
import MyBag from "./Profile/Mybag";
import PassSetting from "./Profile/passSetting";
import Setting from "./Profile/setting";
// Tạo Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const updateUser = (users) => {
    console.log("Updated users:", users);
  };
  registerUpdateUserCallback(updateUser);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ShopGucci" component={ShopGucci} />
        <Stack.Screen name="ShopNike" component={ShopNike} />
        <Stack.Screen name="ShopLevi" component={ShopLevi} />
        <Stack.Screen name="ShopDorothy" component={ShopDorothy} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyBag" component={MyBag} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="PassSetting" component={PassSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// // import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// export default Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (text) => setEmail(text);
//   const handlePasswordChange = (text) => setPassword(text);

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isValidPassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleLogin = async () => {

//     if (email.trim() === "") {
//       alert("Please enter your email");
//       return;
//     }
//     if (!isValidEmail(email)) {
//       alert("Please enter a valid email");
//       return;
//     }
//     if (password.trim() === "") {
//       alert("Please enter your password");
//       return;
//     }
//     if (!isValidPassword(password)) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       const response = await fetch("https://localhost:7000/api/User", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();

//         navigation.navigate("HomePage");
//       } else {
//         alert("Login failed.");
//       }
//     } catch (error) {
//       console.error("Login error: ", error);
//       alert("An error occurred during login");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           width: 100,
//           position: "absolute",
//           left: 15,
//           top: 60,
//           color: "#222222",
//           paddingBottom: 50,
//         }}
//       >
//         <FontAwesome name="chevron-left" size={22} />
//       </Text>
//       <Text
//         style={{
//           width: "100%",
//           height: 140,
//           justifyContent: "center",
//           textAlign: "center",
//           paddingTop: 70,
//           marginTop: 30,
//           paddingBottom: 20,
//           borderBottomWidth: 0.3,
//           borderColor: "gray",
//           fontSize: 34,
//           lineHeight: 34,
//           fontWeight: "bold",
//           marginBottom: 50,
//         }}
//       >
//         {" "}
//         Login
//       </Text>

//       <View>
//         <View style={styles.textInput}>
//           <TextInput
//             placeholder="Email"
//             keyboardType="email-address"
//             returnKeyType="next"
//             autoCorrect={false}
//             value={email}
//             onChangeText={handleEmailChange}
//           />
//         </View>
//         <View style={styles.textInput}>
//           <TextInput
//             placeholder="Password"
//             returnKeyType="go"
//             secureTextEntry
//             autoCorrect={false}
//             value={password}
//             onChangeText={handlePasswordChange}
//           />
//         </View>

//         <Text
//           style={{
//             textAlign: "right",
//             color: "black",
//             lineHeight: 20,
//             fontSize: 14,
//             marginBottom: 25,
//           }}
//         >
//           Forgot your password?
//         </Text>

//         <Text style={styles.button} onPress={handleLogin}>
//           LOGIN
//         </Text>
//         <Text style={styles.button}>SIGN UP</Text>
//       </View>

//       <Text
//         style={{
//           textAlign: "right",
//           color: "black",
//           lineHeight: 20,
//           fontSize: 14,
//           marginTop: 100,
//         }}
//       >
//         Or sign up with social account
//       </Text>

//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 15,
//         }}
//       >
//         <Text
//           style={{
//             width: 92,
//             height: 64,
//             borderRadius: 20,
//             backgroundColor: "white",
//             textAlign: "center",
//             paddingTop: 15,
//             marginRight: 10,
//           }}
//         >
//           <Image
//             source={{
//               uri: "https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png",
//             }}
//             style={{
//               width: 24,
//               height: 24,
//             }}
//           />
//         </Text>
//         <Text
//           style={{
//             width: 92,
//             height: 64,
//             borderRadius: 20,
//             backgroundColor: "white",
//             textAlign: "center",
//             paddingTop: 15,
//           }}
//           onPress={() => {
//             navigation.navigate("HomePage");
//           }}
//         >
//           <Image
//             source={{
//               uri: "https://en.followersnet.com/wp-content/uploads/2016/02/Facebook-1.png",
//             }}
//             style={{
//               width: 24,
//               height: 24,
//             }}
//           />
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9F9F9",
//     alignItems: "center",
//   },

//   textInput: {
//     height: 64,
//     borderColor: "gray",
//     borderBottomWidth: 1,
//     paddingLeft: 10,
//     paddingRight: 10,
//     width: 343,
//     borderRadius: 5,
//     marginBottom: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   button: {
//     backgroundColor: "#DB3022",
//     color: "white",
//     width: 340,
//     height: 45,
//     padding: 12,
//     borderRadius: 50,
//     borderColor: "gray",
//     textAlign: "center",
//     marginBottom: 20,
//   },
// });
