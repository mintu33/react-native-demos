import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {
    const [movie, setMovie] = useState({
        title: "Equilizer 3",
        rating: 8
    })

    const handleClick = () => {
        setMovie({...movie, rating: 5})
    }

  return (
    <View>
      <Text>Title: {movie.title} </Text>
      <Text>Rating: {movie.rating} </Text>
      <TextInput placeholder='Enter rating: ' value={movie.rating.toString()} onChangeText={(args) => setMovie({...movie,rating: parseInt(args)})}/>
      <Button title='Change rating' onPress={handleClick} />
    </View>
  )
}

export default UpdateObject