import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {
    const [movie, setMovie] = useState({
        title: "Equilizer 3",
        rating: 8
    })

    const [newRating, setNewRating] = useState(0)

    const handleClick = () => {
        setMovie({ ...movie, rating: newRating })
    }

    return (
        <View>
            <Text>Title: {movie.title} </Text>
            <Text>Rating: {movie.rating} </Text>
            <TextInput placeholder='Enter rating: ' value={newRating.toString()} onChangeText={(args) => setNewRating(Number(args))}/>
            <Button title='Change rating' onPress={handleClick}/>

        </View>
    )
}

export default UpdateObject