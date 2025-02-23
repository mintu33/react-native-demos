import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const RandomToggleColor = () => {
    const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'orange']
    const [currentColor, setCurrentColor] = useState<string>(colors[0])

    return (
        <View style={styles.container}>
            <Text>color</Text>
            <Button title='Color' onPress={() => {
                const randomIndex = Math.floor(Math.random() * colors.length)
                setCurrentColor(colors[randomIndex])
            }} />
            <View style={[styles.bgSize, {backgroundColor: currentColor}]}>
            </View>
        </View>
    )
}

export default RandomToggleColor


const styles = StyleSheet.create({

    bgSize: {
        height: '100%',
        width: '100%'
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

})

