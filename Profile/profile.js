import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
export default Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {/* icon */}
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
              color: "black",
              fontSize: 34,
              fontWeight: "bold",
              textAlign: "left",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            My profile
          </Text>
          {/* profile */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{uri:'https://www.phanmemninja.com/wp-content/uploads/2023/07/anh-dai-dien-zalo-mac-dinh-11.jpg'}}
            style={{ width: 64, height: 64, borderRadius: 50, marginRight: 15 }}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Roronoa Zoro{" "}
            </Text>
            <Text style={{ fontSize: 14, color: "#9B9B9B" }}>
              Roronoa@gmail.com
            </Text>
          </View>
        </View>
        {/* choice  info profile user */}
        <View  style={{ flexDirection: "row", width: "auto", height: 75 }}>
          <View style={{ marginTop: 30 }} >
            <Text onPress={() => {
              navigation.navigate("Order");
            }} style={{ fontSize: 16, fontWeight: "bold" }}>My orders</Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}>
              Already have 5 orders
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "auto", height: 75 }}>
          <View style={{ marginTop: 30 }}>
            <Text
            onPress={() => {
                navigation.navigate("Order");
              }} style={{ fontSize: 16, fontWeight: "bold" }}>
              Shipping addresses
            </Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}
                
            >
              3 addresses
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "auto", height: 75 }}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Payment methods
            </Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}>
              Atm **25
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "auto", height: 75 }}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Promo codes
            </Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}>
              You have special Promo codes
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "auto", height: 75 }}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>My reviews</Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}>
              Reviews for 4 items
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
        <View style={{ flexDirection: "row", height: 75 }}>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              Settings
            </Text>
            <Text style={{ fontSize: 11, color: "#9B9B9B", marginTop: 5 }}>
              Notifications, password
            </Text>
          </View>
          <Text style={{ position: "absolute", right: 15, top: "50%" }}>
            <FontAwesome name="chevron-right" size={15} color="#9B9B9B" />
          </Text>
        </View>
      </ScrollView>
      {/* Menu options */}
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
            color="#9B9B9B"
            onPress={() => {
              navigation.navigate("Shop");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#9B9B9B",
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
            color="#DB3022"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#DB3022",
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
    backgroundColor: "#F9F9F9",

    paddingTop: 55,
    paddingLeft: 20,
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
