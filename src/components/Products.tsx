import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import Product from './Product';

const HugeComponent = () => {
    interface Product {
        image: string;
        name: string;
        price: number;
        rating: number;
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
            name: "Product 1",
            rating: 4.5,
            price: 29.99,
        },{
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 1",
            rating: 4.5,
            price: 29.99,
        },{
            image: "https://picsum.photos/200/300?random=1",
            name: "Product 1",
            rating: 4.5,
            price: 29.99,
        },
        // ... other products
        {
            image: "https://picsum.photos/200/300?random=50",
            name: "Product 50",
            rating: 4.3,
            price: 32.99,
        },
    ];

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <View style={styles.productContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>Rating: {item.rating}</Text>
                <Text style={styles.price}>Price: ${item.price}</Text>
            </View>
        );
    };

    return (
        <View>
            <Text>Flatlist</Text>
            
                <FlatList
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Product item={item}/>
                )}
            />
          
        </View>
    );
};

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

export default HugeComponent;