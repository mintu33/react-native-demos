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
    return isValid ? <ValidPassword/> : <InvalidPassword/>
}

const TernaryOperator = () => {
    return (
      <View>
        <Password isValid={true}/>
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

export default TernaryOperator