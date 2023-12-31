import React from "react";
import { SafeAreaView, ImageBackground, StatusBar, StyleSheet, View, Text } from "react-native";
import Icontxt from "../components/Icontxt";

const City = () => {

    const {pWrapper, rowLayout, rsTxt, rsWrapper, ptext, container, contain, image, city, country, place } = styles

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
            <View style={contain}>
                <Text style={[place, city]}>London</Text>
                <Text style={[place, country]}>UK</Text>
                <View style={[rowLayout, pWrapper]}>
                    <Icontxt 
                        iname={'user'}
                        icolor={'blue'} 
                        bodyTxt={'9000'}
                        bodyTxtStyle={ptext} />
                </View>
                <View style={[rowLayout, rsWrapper]}>
                    <Icontxt 
                        iname={'sunrise'}
                        icolor={'lightblue'} 
                        bodyTxt={'10:30:00am'}
                        bodyTxtStyle={rsTxt} />
                    <Icontxt 
                        iname={'sunset'}
                        icolor={'lightblue'} 
                        bodyTxt={'18:00:00pm'}
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
        color: 'blue'
    },
    city: {
        fontSize: 40
    },
    country: {
        fontSize: 30
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