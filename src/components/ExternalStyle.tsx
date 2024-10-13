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
        width:200,
        height:200,
        borderRadius:150,
        marginBottom: 20
    },
    cardStyle: {
        padding:10,
        paddingTop: 50,
        paddingBottom: 40,
        margin: 20,
        shadowColor: "black",
        // width: "70%",
        // height: "110%",
        borderRadius: 5,
        shadowOffset: {width:0, height:2},
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center'

    },

    heading:{
        fontSize: 30,
        marginBottom: 10
    },

    text:{
        fontSize: 15,
        marginBottom: 15,
    }
})

export default st