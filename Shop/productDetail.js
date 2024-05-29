import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const addToCart = () => {
    
    alert("Sản phẩm đã được thêm vào giỏ hàng thành công!");
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.imgProduct} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: {product.price}</Text>
      <Text style={styles.productPrice}>Size: {product.size}</Text>
      <Text style={styles.productPrice}>Color: {product.color}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backButtonText: {
    fontSize: 16,
    paddingTop:50
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    
  },
  imgProduct: {
    width: 148,
    height: 154,
    borderRadius: 20,
    marginBottom: 8,
  },
  addToCartButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor:'orange',
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ProductDetail;
