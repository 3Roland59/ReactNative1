import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType" 
import moment from 'moment'

const Item = ({ dt_txt, min, max, condition}) =>{

    const { item, date, temp, dtWrapper } = styles

        return(
            <View style={item}>
                <Feather name={weatherType[condition].icon} size={50} color={'white'} />
                <View style={dtWrapper}>
                    <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                    <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
                </View>
                <Text style={temp}>{`${min}`}&deg;C/{`${max}`}&deg;C</Text>
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
        borderRadius: 50,
        backgroundColor: '#00000080',
    },
    temp: {
        fontSize: 20,
        color: 'white'
    },
    date: {
        fontSize: 15,
        color: 'white'
    },
    dtWrapper: {
        flexDirection: 'column'
    }
})

export default Item