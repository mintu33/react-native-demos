import {Text, Button, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native'
import st from './ExternalStyle';

const AgeComponent = () => {
    return (
        <View style={st.boxStyle}>
            <Text style = {st.textStyle}>
                I am 16 years old.
         
                My friend is 15 years old.
            </Text>
            <Text style = {st.textStyle}>
                hello
            </Text>
        </View>
    )
    }

export default AgeComponent