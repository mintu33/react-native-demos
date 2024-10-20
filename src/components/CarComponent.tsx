import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'

const CarComponent = () => {
  return (
    <View>
      <Text style = {st.priceStyle}> $200,000 </Text>
      <Image source={require('../assets/images/car.jpg')} style = {st.imageStyle}/>
      <Text style = {st.nameStyle}> Car Name </Text>
      <Text> Rating: 3.5 </Text>
      <Text style = {st.descStyle}> Here is some random car description </Text>
      <Button title='Add To Cart'/>
    </View>
  )
}

const st = StyleSheet.create({
    priceStyle: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: "black",
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius:8,
        width: 140,
        height: 30,
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

    descStyle: {
        fontSize: 15,

    }

    })

export default CarComponent
