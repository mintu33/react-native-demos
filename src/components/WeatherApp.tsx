import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

interface Weather {
    id: number,
    city: string,
    main: string,
    description: string,
    temperature: number
}

const WeatherData = [{
    id: 1,
    city: "Mumbai",
    main: "Clouds",
    description: "overcast clouds",
    temperature: 20
  },
  {
    id: 2,
    city: "London",
    main: "Rainy",
    description: "clouds",
    temperature: 2
  },
  {
    id: 3,
    city: "Paris",
    main: "Sun",
    description: "Sunny",
    temperature: 25
  }
]



const WeatherApp = () => {
    const [weather, setWeather] = useState<Weather>(WeatherData[0])
    const [city, setCity] = useState("")

    const getWeather = () => {
        const weather = WeatherData.find((item) => item.city === city)
        setWeather(weather || WeatherData[0])
    }

  return (
    <View>
      <Text>WeatherApp</Text>
      <TextInput value={city} onChangeText={setCity} placeholder='Enter city'/>
      <Button title='Get Weather' onPress={getWeather} />
      <Text>City: {weather.city}</Text>
      <Text>Temperature: {weather.temperature}</Text>
      <Text>Main: {weather.main}</Text>
      <Text>Description: {weather.description}</Text>
      <Text>Temperature: {weather.temperature}</Text>
    </View>
  )
}

export default WeatherApp