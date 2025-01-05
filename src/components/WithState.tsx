import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
    const [count, setCount] = useState(0)
    console.log(count)
  return (
    <View>
      <Text>The count is {count}</Text>
      <Button title='Increment' onPress={() => {
            if (count < 20){
                setCount(count + 1)
            }
            }}/>
      <Button title='Decrement' onPress={() => {
            if (count > 0){
                setCount(count - 1)
            }
        }}/>
    </View>
  )
}

export default WithState