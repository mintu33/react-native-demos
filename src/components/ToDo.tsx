import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState(["Eat", "Sleep", "Go outside"])
    const [todo, setTodo] = useState("")
    const ToDoItem = ({item}:{item:string}) => {
        return (
            <View >
                <Text> {item}</Text>
                <Button title='Delete'
                    onPress={() => {
                        setTodos(todos.filter(todo => todo !== item))
                    }}/>
            </View>
        )
    }

  return (
    <View>
      <Text>To Do:</Text>
      <TextInput placeholder='Enter to do:' value={todo} onChangeText={setTodo}/>
      <Button title='Add' 
        onPress={() => {setTodos([...todos,todo])
            setTodo("")
        }}/>
    <FlatList data={todos} 
    keyExtractor={(item,index) => index.toString()}
    renderItem={ToDoItem}/>
    </View>
  )
}

export default ToDo