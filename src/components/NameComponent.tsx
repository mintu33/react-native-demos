import { Text, Button, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import st from "./ExternalStyle";

const NameComponent = () => {
    return (
        <View style={{padding:10,
            shadowColor:"slateblue",
            width: "80%",
            borderRadius: 10,
            shadowOffset: {width:2, height:2},
            elevation: 5,
            shadowOpacity: 0.5,
            alignItems: 'center'}}>
            <Text style = {st.textStyle} >
                Hello my name is Khushi.
                <br />
                My friend's name is Rochelle.
            </Text>
        </View>
    )
}

export default NameComponent