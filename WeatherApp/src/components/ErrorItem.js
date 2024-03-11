import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {

    const { container, errmsg } = styles

  return (
    <View style={container}>
        <Feather name={'frown'} size={100} color={'white'} />
        <Text style={errmsg}>Sorry, something went wrong</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errmsg: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

export default ErrorItem