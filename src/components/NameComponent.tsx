import { Text, Button, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import st from "./ExternalStyle";

const NameComponent = () => {
    return (
        <View style={st.boxStyle}>
            <Text style = {st.textStyle} >
                Hello my name is Khushi.
                <br />
                My friend's name is Rochelle.
            </Text>
        </View>
    )
}

export default NameComponent