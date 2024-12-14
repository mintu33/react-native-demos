import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ValidPassword = () => {
    return (
        <Text style={styles.validPassword}>Valid password</Text>
    )
}

const InvalidPassword = () => {
    return (
        <Text style={styles.invalidPassword}>Invalid password</Text>
    )
}

const Password = ({isValid}:{isValid:Boolean}) => {
        if(isValid){
            return <ValidPassword />
        }
        else{
            return <InvalidPassword />
        }
}

const ConditionalStatements = () => {
  return (
    // Conditionally show whether the password is valid or not
    <View>
        <Password isValid={false}/>
    </View>
  )
}

const styles = StyleSheet.create({
    validPassword: {
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
    },
    invalidPassword: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default ConditionalStatements