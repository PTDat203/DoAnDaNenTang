import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import products  from "../Data/product";


export default HomePage = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 530,
            paddingBottom: 20,
            borderBottomWidth: 0.3,
            borderColor: "gray",
            fontSize: 34,
            fontWeight: "bold",
          }}
        >
          <Image
            source={{uri:"https://www.shutterstock.com/image-photo/interior-fashionable-clothing-boutique-full-600nw-1906296115.jpg"}}
            style={{
              width: 400,
              height: 550,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: "71%",
              left: 15,
            }}
          >
            <Text
              style={{
                fontSize: 48,
                width: 190,
                fontWeight: "bold",
                color: "white",
                marginBottom: 15,
              }}
            >
              Fashion sale
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                width: 160,
                height: 36,
                backgroundColor: "#DB3022",
                textAlign: "center",
                borderRadius: 50,
                paddingTop: 6,
              }}
              onPress={() => {
                navigation.navigate("Shop");
           }}
            >
              Check
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 25,
            paddingLeft: 15,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 34,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            New
          </Text>
          <Text
            style={{
              color: "#9B9B9B",
              fontSize: 11,
              marginBottom: 15,
            }}
          >
            You've never seen it before!
          </Text>
          <Text
            style={{
              color: "#222222",
              fontSize: 11,
              position: "absolute",
              top: "70%",
              right: 20,
            }}
            onPress={() => {
                navigation.navigate("Shop");
           }}
          >
            View all
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "auto",
          }}
        >
          <ScrollView horizontal>
            {products.map((product) => (
              <TouchableOpacity key={product.id} style={{ marginLeft: 26 }}
              onPress={() => navigation.navigate("ProductDetail", { product })}>
                <Image source={{ uri: product.image }} style={styles.imgProduct} />
                <Text style={styles.iconHeart}>
                  <EvilIcons name="heart" size={24} />
                </Text>
                <Text style={styles.infoSale}>{product.discount}</Text>
                <Text style={{ color: "#9B9B9B", fontSize: 11 }}>
                  {product.brand}
                </Text>
                <Text style={{ color: "#222222", fontSize: 16, fontWeight: "bold" }}>
                  {product.name}
                </Text>
                <Text style={{ marginBottom: 30 }}>
                  <Text style={{ fontSize: 14, color: "#9B9B9B" }}>
                    {product.originalPrice}{" "}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#DB3022", fontWeight: "bold" }}>
                    {product.price}
                  </Text>
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {/* Menu options */}
      <View style={styles.menuOptions}>
        <View style={{ width: 42 }}>
          <FontAwesome
            name="home"
            size={30}
            color="#DB3022"
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#DB3022",
              fontWeight: "bold",
              alignItems: "center",
              paddingLeft: 3,
            }}
          >
            Home
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <Ionicons name="cart" size={30} color="#9B9B9B" 
          onPress={() => {
            navigation.navigate("Shop");
       }}/>
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
              fontWeight: "bold",
              alignItems: "center",
              paddingLeft: 6,
            }}
            onPress={() => {
                navigation.navigate("Shop");
           }}
            
          >
            Shop
          </Text>
        </View>
        <View style={{ width: 42 }}>
          <FontAwesome name="shopping-bag" size={30} color="#9B9B9B"
           onPress={() => {
                navigation.navigate("MyBag");
           }} />
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
          <FontAwesome name="heart" size={30} color="#9B9B9B" />
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
          <FontAwesome name="user" size={30} color="#9B9B9B"
          onPress={() => {
            navigation.navigate("Profile");
          }} />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
              fontWeight: "bold",
              alignItems: "center",
            }}
            onPress={() => {
                navigation.navigate("Profile");
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
    backgroundColor: "#F9F9F9",
  },
  menuOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "auto",
    height: 83,
    backgroundColor: "white",
    alignItems: "center",
    position: "sticky",
    bottom: 0,
    borderWidth: 1,
    borderColor: "gray",
  },
  imgProduct: {
    width: 148,
    height: 184,
    borderRadius: 20,
    marginBottom: 8,
  },
  iconHeart: {
    position: "absolute",
    left: 123,
    bottom: 30,
  },
  infoSale: {
    width: 40,
    height: 24,
    backgroundColor: "#DB3022",
    position: "absolute",
    left: 10,
    bottom: 165,
    textAlign: "center",
    borderRadius: 50,
    paddingTop: 2,
    color: "white",
  },
});
