import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 'N1947034',
      date: '05-12-2019',
      trackingNumber: 'IW3475453455',
      quantity: 3,
      totalAmount: 112,
      status: 'Delivered',
    },
    {
      id: 2,
      orderNumber: 'N1947035',
      date: '06-12-2019',
      trackingNumber: 'IW3475453456',
      quantity: 2,
      totalAmount: 80,
      status: 'Processing',
    },
    {
      id: 3,
      orderNumber: 'N1947036',
      date: '07-12-2019',
      trackingNumber: 'IW3475453457',
      quantity: 1,
      totalAmount: 45,
      status: 'Cancelled',
    },
  ]);
  const navigation = useNavigation();

  const onPressOrder = (order) => {
    navigation.navigate('OrderDetail', { order });
  };

  const renderOrder = ({ item }) => {
    return (
        
      <View style={styles.order}>
        <Text onPress={() => onPressOrder(item)} style={styles.orderNumber}>{item.orderNumber}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
        <View style={styles.orderDetails}>
          <Text style={styles.orderTrackingNumber}>Tracking number: {item.trackingNumber}</Text>
          <Text style={styles.orderQuantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.orderTotalAmount}>Total amount: ${item.totalAmount}</Text>
        </View>
        <Text style={styles.orderStatus}>{item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <FontAwesome
        name="chevron-left"
        size={18}
        style = {{paddingTop:20}}
        onPress={() => {
            navigation.navigate("Profile");
        }}
    />
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        style={styles.orderList}
      />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop :40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  orderList: {
    flex: 1,
  },
  order: {
    marginBottom: 20,
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
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  orderDetails: {
    marginBottom: 10,
  },
  orderTrackingNumber: {
    fontSize: 14,
  },
  orderQuantity: {
    fontSize: 14,
  },
  orderTotalAmount: {
    fontSize: 14,
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default Order;