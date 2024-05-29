import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
const OrderDetail = ({ navigation, route }) => {
  const { order } = route.params;
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      productImage: 'https://nguyenhien.com.vn/wp-content/uploads/2018/07/Artboard-3.png',
      productName: 'Product 1',
      productColor: 'Red',
      productSize: 'M',
      productPrice: 20,
      productQuantity: 2,
    },
    {
      id: 2,
      productImage: 'https://bizweb.dktcdn.net/100/093/179/products/n157-e70-1.jpg?v=1680942996967',
      productName: 'Product 2',
      productColor: 'Blue',
      productSize: 'L',
      productPrice: 30,
      productQuantity: 1,
    },
    {
      id: 3,
      productImage: 'https://product.hstatic.net/1000035031/product/ao-kieu-nu-cong-so-tay-ngan-co-no-cach-dieu-thoi-trang-eden-asm204__9__b2484020b38e4a0488a039d184d0b278_master.jpg',
      productName: 'Product 3',
      productColor: 'Green',
      productSize: 'XL',
      productPrice: 40,
      productQuantity: 3,
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
      <FontAwesome
        name="chevron-left"
        size={18}
        style = {{paddingTop:20}}
        onPress={() => {
            navigation.navigate("Profile");
        }}
    />
    <Text style ={{fontSize:24, fontWeight:"700", textAlign:'center', marginBottom:30}}>Order Detail</Text>
      </View>
      
      <FlatList
        data={orderItems}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={{ uri: item.productImage }} style={styles.orderItemImage} />
            <View style={styles.orderItemDetails}>
              <Text style={styles.orderItemName}>{item.productName}</Text>
              <Text style={styles.orderItemColor}>{item.productColor}</Text>
              <Text style={styles.orderItemSize}>{item.productSize}</Text>
              <Text style={styles.orderItemPrice}>${item.productPrice}</Text>
              <Text style={styles.orderItemQuantity}>Quantity: {item.productQuantity}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.orderItemList}
      />
      <Text style={styles.orderTotal}>Total: ${order.totalAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop : 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderInfo: {
    marginBottom: 20,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  orderTrackingNumber: {
    fontSize: 14,
    marginBottom: 10,
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderItemList: {
    flex: 1,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  orderItemDetails: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItemColor: {
    fontSize: 14,
    marginBottom: 5,
  },
  orderItemSize: {
    fontSize: 14,
    marginBottom: 5,
  },
  orderItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderItemQuantity: {
    fontSize: 14,
  },
  orderTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});

export default OrderDetail;
