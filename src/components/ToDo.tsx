import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState(["Eat", "Sleep", "Go outside"])
    const [todo, setTodo] = useState("")
    const ToDoItem = ({ item }: { item: string }) => {
        return (
            <View style={styles.itemCard}>
                <Text> {item}</Text>
                <View style={styles.buttons}>
                    <Button title='Edit'
                        color='magenta'
                        onPress={() => {
                            alert("Edit")
                        }}
                    />
                    <Button title='Delete'
                        color='#E35335'
                        onPress={() => {
                            setTodos(todos.filter(todo => todo !== item))
                        }} />
                </View>
            </View>
        )
    }

    return (
        <View >
            <Text style={styles.todoTitle}>To Do:</Text>
            <TextInput style={styles.addItem} placeholder='Enter to do:' value={todo} onChangeText={setTodo} />
            <Button title='Add'
                color='#50C878'
                onPress={() => {
                    if (todo !== null && todo !== "") {
                        if (!todos.includes(todo)) {
                            setTodos([...todos, todo])
                            setTodo("")
                        }
                        else { alert("Already in To Do list") }
                    }
                    else { alert("Please enter valid input") }
                }} />

            <FlatList data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ToDoItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoTitle: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#57A1A0',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },

    itemCard: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    addItem: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    buttons: {
        display: "flex",
        flexDirection: "row"
    }
})

export default ToDo