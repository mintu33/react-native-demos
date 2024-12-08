import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const name = "Khushi"
    return (
        <View>
            <Text>ParentComponent</Text>
            <ChildComponent name={name}/>
        </View>
    )
}

export default ParentComponent