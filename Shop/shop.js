import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
export default Shop = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 35,
          }}
        >
          {/* icon */}
          <Text
            style={{
              paddingRight: 20,
              color: "#222222",
            }}
          >
            <FontAwesome name="chevron-left" size={14} />
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Categories
          </Text>
          <Text
            style={{
              paddingRight: 20,
              color: "#222222",
            }}
          >
            <FontAwesome
              name="search"
              size={14}
              
            />
          </Text>

          {/* profile */}
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
            SUMMER SALES
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>Up to 50% off</Text>
        </View>
        {/* <View>
        <Text style = {{ textAlign:'right', marginRight:20, fontSize:10, position:'absolute', top:-40, right:-15}}>Hot Search</Text>
        </View> */}

        <View style={styles.product}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 30 }}
            onPress = {()=> {
                navigation.navigate("ShopGucci")
            }}
          >
            Gucci
          </Text>
          <Image
            source={{uri:"https://hotgirlshop.com/uploads/picture/12062022/News/20612163640-dam-gucci-chinh-hang-new-auth.jpg"}}
            style={{ width: 180, height: 100, borderRadius: 10 }}
          />
        </View>
        <View style={styles.product}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 30 }}
          onPress = {()=> {
            navigation.navigate("ShopNike")
        }}>
            Nike
          </Text>
          <Image
            source={{uri:"https://hotgirlshop.vn/uploads/picture/07042022/News/2047183413-set-bo-quan-ao-nike-nu.jpg"}}
            style={{ width: 180, height: 100, borderRadius: 10 }}
          />
        </View>
        <View style={styles.product}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 30 }}
          onPress = {()=> {
            navigation.navigate("ShopLevi")
        }}>
            Levi's
          </Text>
          <Image
            source={{uri:"https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/a/AmazonStores/ATVPDKIKX0DER/07e95976951d0d9b6ff97ecb3aee00a0.w3000.h1500._CR0%2C11%2C3000%2C1479_SX1500_.jpg"}}
            style={{ width: 180, height: 100, borderRadius: 10 }}
          />
        </View>
        <View style={styles.product}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 30 }}
          onPress = {()=> {
            navigation.navigate("ShopDorothy")
        }}
          >
         Dorothy Perkins
          </Text>
          <Image
            source={{uri:"https://nudoanhnhan.net/wp-content/uploads/2019/03/NDN_Dorothy-Perkins-ra-mat-bst-Xuan-He-2019_5.jpg"}}
            style={{ width: 180, height: 100, borderRadius: 10 }}
          />
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
    backgroundColor: "#F9F9F9",

    paddingTop: 55,
    paddingLeft: 20,
  },
  product: {
    width: 360,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#9B9B9B",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
  },
  title: {
    width: 360,
    height: 120,
    alignItems: "center",
    backgroundColor: "#db3022",
    borderRadius: 10,
    paddingTop: 35,
    marginBottom: 10,
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
