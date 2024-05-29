import React from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import products from "../Data/product";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const ShopLevi = ({ navigation }) => {
  const gucciProducts = products.filter((product) => product.brand === "Levi's");

  const goToProductDetail = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style = {{marginTop:30, fontSize:30, fontWeight:"700", marginBottom:30, textAlign:'center'}}>LEVI"S</Text>
        {gucciProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.product} onPress={() => goToProductDetail(product)}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
            <Image source={{ uri: product.image }} style={styles.imgProduct} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.menuOptions}>
        <View style={{ width: 42 }}>
          <FontAwesome
            name="home"
            size={30}
            color="#9B9B9B"
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",

              fontWeight: "bold",
              alignItems: "center",
              paddingLeft: 3,
            }}
          >
            Home
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <Ionicons
            name="cart"
            size={30}
            color="#DB3022"
            onPress={() => {
              navigation.navigate("Shop");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#DB3022",
              fontWeight: "bold",
              alignItems: "center",
              paddingLeft: 6,
            }}
          >
            Shop
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <FontAwesome
            name="shopping-bag"
            size={30}
            color="#9B9B9B"
            onPress={() => {
              navigation.navigate("MyBag");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
              fontWeight: "bold",
              alignItems: "center",
              paddingLeft: 7,
            }}
          >
            Bag
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <FontAwesome
            name="heart"
            size={30}
            color="#9B9B9B"
            onPress={() => {
              navigation.navigate("Favorites");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            Favorites
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <FontAwesome
            name="user"
            size={30}
            color="#9B9B9B"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imgProduct: {
    width: 148,
    height: 154,
    borderRadius: 20,
    marginBottom: 8,
  },
  product: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "green",
  },
  menuOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 83,
    backgroundColor: "white",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  menuText: {
    fontSize: 9,
    color: "#9B9B9B",
    fontWeight: "bold",
    textAlign: "center",
  },
  menuTextActive: {
    fontSize: 9,
    color: "#DB3022",
    fontWeight: "bold",
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
});

export default ShopLevi;
