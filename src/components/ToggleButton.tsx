import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <View style={styles.container}>
            <Text>{isOn == true ? 'On' : 'Off'}</Text>
            <Button title='Toggle' onPress={() => setIsOn(!isOn)} />
            <View style={[isOn == true ? styles.onBgColor : styles.offBgColor, styles.bgSize]}>
            </View>
        </View>
    )
}

export default ToggleButton

const styles = StyleSheet.create({

    onBgColor: {
        backgroundColor: 'green',
    },

    offBgColor: {
        backgroundColor: 'red',
    },

    bgSize: {
        height: '90%',
        width: '90%'
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

})


