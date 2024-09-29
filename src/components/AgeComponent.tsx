import {Text, Button, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native'
import st from './ExternalStyle';

const AgeComponent = () => {
    return (
        <View style={{padding:10,
            shadowColor:"darksalmon",
            width: "80%",
            borderRadius: 10,
            shadowOffset: {width:2, height:2},
            elevation: 5,
            shadowOpacity: 0.5,
            alignItems: 'center'}}>
            <Text style = {st.textStyle}>
                I am 16 years old.
                <br />
                My friend is 15 years old.
            </Text>
            <Text style = {st.textStyle}>
                hello
            </Text>
        </View>
    )
    }

export default AgeComponent