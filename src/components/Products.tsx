import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const ArrayOfProducts = () => {
    const products = [
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 1",
            rating: 4.5,
            price: 29.99,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 2",
            rating: 4.5,
            price: 40.99,
        }, {
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 3",
            rating: 4.5,
            price: 85.99,
        }
    ]

    return (
        <View>
            <Text style = {st.titleStyle}> PRODUCTS</Text>
      <FlatList data={products}
                renderItem={(product)=> {
                    return (
                        <View> 
                            <Image source={{uri: product.item.image}} />
                            <Text style = {st.descStyle}> Item: <strong>{product.item.name}</strong> </Text> 
                            <Text style = {st.descStyle}> Product: <strong>{product.item.rating}</strong> </Text>
                            <Text style = {st.priceStyle}> Price: £<strong>{product.item.price}</strong> </Text>
                        </View>
                        )
                }} />
        </View>
    )
}

const st = StyleSheet.create({
    priceStyle: {
        alignItems: 'center',
        marginBottom: 15,
    },

    imageStyle: {
        marginLeft: 15,
        marginBottom: 15,
        height: 300,
        width: 300,
    },

    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    ratingStyle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 15,
        marginBottom: 15,
    },

    descStyle: {
        fontSize: 15,
        fontWeight: 200
    },

    cartStyle: {
        color: "white",
        fontSize: 20,
        backgroundColor: "black",
        alignItems: 'center',
        paddingHorizontal: 37,
        paddingVertical: 8,
        borderRadius:8,
        width: 200,
        height: 40,
        marginBottom: 15,
        marginLeft: 15,
    }

    })

export default ArrayOfProducts