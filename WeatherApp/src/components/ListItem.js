import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const Item = ({ dt_txt, min, max, condition}) =>{

    const { item, date, temp } = styles

        return(
            <View style={item}>
                <Feather name={"sun"} size={50} color={'white'} />
                <Text style={date}>{dt_txt}</Text>
                <Text style={temp}>{min}</Text>
                <Text style={temp}>{max}</Text>
                {/* <Text>{condition}</Text> */}
            </View>
        )
    }

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#0088ff80'
    },
    temp: { 
        color: 'black',
        fontSize: 20
    },
    date: {
        color: 'black',
        fontSize: 15
    }
})

export default Item