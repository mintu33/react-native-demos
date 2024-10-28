import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'

const onPressFunction = () => {alert('Added to Cart!')}  

const CarComponent = () => {
  const price = 2000000;
  const imagepath = "../assets/images/car.jpg";
  const name = "Lamborghini Urus";
  const rating = "★★★★☆";
  const description = "Lamborghini Urus is the world’s first Super Sport Utility Vehicle, where exclusivity, sportiness, and performance meet comfort and versatility. It offers best-in-class driving dynamics and unmistakable elegance in design. Urus embodies the characteristics of multiple souls: sporty, elegant, and off-road. The range is geared toward the future, ushering in a new era with the first PHEV (Plug-in Hybrid Electric Vehicle) version of the luxury Super SUV. With its unparalleled performance, a fun-to-drive experience, and a pioneering spirit, Lamborghini Urus is anything but typical. ";
  
  return (
    <View>
      <Text style = {st.priceStyle}> {new Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD'}).format(price)} </Text>
      <Image source={require(imagepath)} style = {st.imageStyle}/>
      <Text style = {st.nameStyle}> {name}</Text>
      <Text style = {st.ratingStyle}> {rating} </Text>
      <Text style = {st.descStyle}> {description}</Text>
      <Pressable onPress={onPressFunction}>
        <Text style = {st.cartStyle}> Add To Cart </Text>
      </Pressable>
    </View>
  )
}

const st = StyleSheet.create({
    priceStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: "black",
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius:8,
        width: 200,
        height: 40,
        marginBottom: 15,
        marginLeft: 15,
        marginTop: 15,
    },

    imageStyle: {
        marginLeft: 15,
        marginBottom: 15,
        height: 300,
        width: 300,
    },

    nameStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
    },

    ratingStyle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 15,
        marginBottom: 15,
    },

    descStyle: {
        fontSize: 15,
        fontWeight: 200,
        marginLeft: 15,
        marginBottom: 15

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

export default CarComponent
