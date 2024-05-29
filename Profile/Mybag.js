import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import dataBag from "../Data/bag";

const ProductList = ({ navigation }) => {
  const handlePayment = () => {
    
    Alert.alert(" Success", "Thanh toán thành công!", [
      {
        text: "OK",
        onPress: () => {
          
          navigation.navigate("HomePage");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bag</Text>
      <ScrollView>
        {dataBag.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View>
              <Text style={styles.productAttribute}>Name: {product.name}</Text>
              <Text style={styles.productAttribute}>Color: {product.color}</Text>
              <Text style={styles.productAttribute}>Size: {product.size}</Text>
              <Text style={styles.productAttribute}>Price: ${product.price}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.totalProducts}>Total Products: {dataBag.length}</Text>
      </ScrollView>
      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Checkout</Text>
      </TouchableOpacity>
      {/* Menu options */}
      <View style={styles.menuOptions}>
        {/* Menu items */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  menuOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "auto",
    height: 83,
    backgroundColor: "white",
    alignItems: "center",
    position: "sticky",
    bottom: -10,
    borderTopWidth: 1,
    borderColor: "#9B9B9B",
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginRight: 50,
  },
  productAttribute: {
    fontSize: 16,
    marginBottom: 5,
  },
  totalProducts: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  paymentButton: {
    backgroundColor: "#DB3022",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  paymentButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductList;
