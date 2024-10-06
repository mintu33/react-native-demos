import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const st = StyleSheet.create({
    textStyle: {
        color: "black",
        fontSize: 20,
        fontStyle: 'italic',
        fontFamily: 'chantelli antiqua'
    },
    boxStyle: {
        padding:10,
        shadowColor:"darksalmon",
        width: "80%",
        borderRadius: 10,
        shadowOffset: {width:3, height:2},
        elevation: 5,
        shadowOpacity: 0.5,
        alignItems: 'center'
    },
    cardImageStyle: {
        width:300,
        height:300,
        borderRadius:150
    }
})

export default st