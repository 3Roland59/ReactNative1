import React from "react";
import { SafeAreaView, ImageBackground, StatusBar, StyleSheet, View, Text } from "react-native";
import Icontxt from "../components/Icontxt";
import moment from 'moment'

const City = ({ weatherData }) => {

    console.log(weatherData)

    const {pWrapper, rowLayout, rsTxt, rsWrapper, ptext, container, contain, image, city, Country, place } = styles
    const { name, country, population, sunrise, sunset } = weatherData

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
            <View style={contain}>
                <Text style={[place, city]}>{name}</Text>
                <Text style={[place, Country]}>{country}</Text>
                <View style={[rowLayout, pWrapper]}>
                    <Icontxt 
                        iname={'user'}
                        icolor={'white'} 
                        bodyTxt={`Population: ${population}`}
                        bodyTxtStyle={ptext} />
                </View>
                <View style={[rowLayout, rsWrapper]}>
                    <Icontxt 
                        iname={'sunrise'}
                        icolor={'white'} 
                        bodyTxt={moment(sunrise).format('h:mm:ss a')}
                        bodyTxtStyle={rsTxt} />
                    <Icontxt 
                        iname={'sunset'}
                        icolor={'white'} 
                        bodyTxt={moment(sunset).format('h:mm:ss a')}
                        bodyTxtStyle={rsTxt} />
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "royalblue",
        // paddingTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    }, 
    contain: {
        flex: 1,
        backgroundColor: '#00000080',
        paddingTop: 10
    },
    place: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    city: {
        fontSize: 40,
        color:'lightblue'
    },
    Country: {
        fontSize: 30,
        color: 'white'
    },
    pWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    ptext: {
        fontSize: 25,
        marginLeft: 7,
        color: 'white'
    },
    rsWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    rsTxt: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City