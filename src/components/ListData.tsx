import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => { 
    // [] is a list/array | {} is an object/ similar to dictionary in python
    const fruits = ["apple","banana","mango","pear","pineapple","watermelon"]
  return (
    <View>
      <Text>fruits</Text>
      <FlatList data={fruits}
                renderItem={(fruit)=>{
                    return <Text> fruit is <strong>{fruit.item}</strong></Text>
                }} />
    </View>
  )
}

export default ListData