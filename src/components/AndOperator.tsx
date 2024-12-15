import { View, Text, FlatList } from 'react-native'
import React from 'react'

const AndOperator = () => {
    const groceries = ["milk","grapes","bread","eggs"]
  return (
    <View>
      <Text>AndOperator</Text>
      {groceries.length>0 && (
        <FlatList data={groceries} 
        renderItem={({item})=> <Text>{item}</Text>}/>
      )}
    </View>
  )
}

export default AndOperator