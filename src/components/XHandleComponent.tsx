import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import st from './ExternalStyle'

const XHandleComponent = () => {
  return (
    <View style={{padding:10,
        shadowColor:"plum",
        width: "80%",
        borderRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 5,
        shadowOpacity: 0.5,
        alignItems: 'center'}}>
        <Text style = {st.textStyle}>
            My Xhandle: khuship1234.
            <br />
            Rochelle's Xhandle: rochelle1234.
        </Text>
    </View>
)
}

export default XHandleComponent