import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface Product {
    image: string;
    name: string;
    price: number;
    rating: number;
}
/*
item = {
    "image": "someimage.jpg",
    "name": "some",
    "price": 4234,
    "rating": 4
    }

*/
const Product = ({item}:{item:Product}) => {
    return (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
            <Text style={styles.price}>Price: ${item.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    productContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    rating: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        color: '#000',
        marginTop: 5,
    },
});


export default Product