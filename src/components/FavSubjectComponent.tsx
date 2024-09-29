import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import st from './ExternalStyle'

const FavSubjectComponent = () => {
    return (
        <View style={{padding:10,
            shadowColor:"darkseagreen",
            width: "80%",
            borderRadius: 10,
            shadowOffset: {width:2, height:2},
            elevation: 5,
            shadowOpacity: 0.5,
            alignItems: 'center'}}>
            <Text style = {st.textStyle}>
                My favourite subject is MATHS.
                <br />
                Rochelle's favourite subject is MUSIC.
            </Text>
        </View>
    )
    }

export default FavSubjectComponent