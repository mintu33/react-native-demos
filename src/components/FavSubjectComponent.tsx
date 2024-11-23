import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import st from './ExternalStyle'

const FavSubjectComponent = () => {
    return (
        <View style={st.boxStyle}>
            <Text style = {st.textStyle}>
                My favourite subject is MATHS.
                Rochelle's favourite subject is MUSIC.
            </Text>
        </View>
    )
    }

export default FavSubjectComponent