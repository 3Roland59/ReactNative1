import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

const Icontxt = ({ iname, icolor, bodyTxt, bodyTxtStyle }) => {

    const { txtTheme, container } = styles

    return(
        <View style={container}>
            <Feather name={iname} size={50} color={icolor} />
            <Text style={[txtTheme, bodyTxtStyle]}>{bodyTxt}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    txtTheme: {
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center'
    }
})
export default Icontxt