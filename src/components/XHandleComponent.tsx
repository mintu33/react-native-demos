import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import st from './ExternalStyle'

const XHandleComponent = () => {
  return (
    <View style={st.boxStyle}>
        <Text style = {st.textStyle}>
            My Xhandle: khuship1234.
            <br />
            Rochelle's Xhandle: rochelle1234.
        </Text>
    </View>
)
}

export default XHandleComponent