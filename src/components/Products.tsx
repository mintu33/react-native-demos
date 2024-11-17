import { View, Text, FlatList, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const ArrayOfProducts = () => {
    interface Product {
        image: string;
        name: string;
        rating: number;
        price: number;
    }
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

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <View style={st.productContainer}>
                <Image source={{ uri: item.image }} style={st.image} />
                <Text style={st.name}> Item: <strong>{item.name}</strong> </Text>
                <Text style={st.rating}> Product: <strong>{item.rating}</strong> </Text>
                <Text style={st.price}> Price: £<strong>{item.price}</strong> </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <Text style={st.titleStyle}> PRODUCTS</Text>
            <FlatList data={products}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

const st = StyleSheet.create({

    productContainer: {
        flex:1,
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5
    },

    image: {
        width: 200,
        height: 300,
        borderRadius: 10
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },

    rating: {
        fontSize: 16,
        color: "#888",
        marginTop: 5
    },

    price: {
        fontSize: 16,
        color: "#000",
        marginTop: 5
    },



    // priceStyle: {
    //     alignItems: 'center',
    //     marginBottom: 15,
    // },

    // imageStyle: {
    //     marginLeft: 15,
    //     marginBottom: 15,
    //     height: 300,
    //     width: 300,
    // },

     titleStyle: {
         fontSize: 40,
         fontWeight: 'bold',
         marginBottom: 20,
         display: "flex",
         justifyContent: "center"
     },

    // ratingStyle: {
    //     fontSize: 15,
    //     fontWeight: '500',
    //     marginLeft: 15,
    //     marginBottom: 15,
    // },

    // descStyle: {
    //     fontSize: 15,
    //     fontWeight: 200
    // },

    // cartStyle: {
    //     color: "white",
    //     fontSize: 20,
    //     backgroundColor: "black",
    //     alignItems: 'center',
    //     paddingHorizontal: 37,
    //     paddingVertical: 8,
    //     borderRadius: 8,
    //     width: 200,
    //     height: 40,
    //     marginBottom: 15,
    //     marginLeft: 15,
    // }

})

export default ArrayOfProducts