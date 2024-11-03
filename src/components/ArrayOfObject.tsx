import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    const countries = [
        {id: 1, name: 'India'},
        {id: 2, name: 'America'},
        {id: 3, name: 'UK'},
        {id: 4, name: 'China'},
        {id: 5, name: 'Italy'},
    ]
  return (
    <View>
      <Text>countries</Text>
      <FlatList data={countries}
                renderItem={(country)=> {
                    return <Text>The id is <strong>{country.item.id}</strong> and the country is <strong>{country.item.name}</strong></Text>
                }} />
    </View>
  )
}

export default ArrayOfObject