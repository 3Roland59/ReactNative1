import React from "react";
import { SafeAreaView, ImageBackground, StatusBar, StyleSheet, View, Text } from "react-native";
import {Feather} from '@expo/vector-icons'

const City = () => {

    const {pWrapper, rsTxt, rsWrapper, ptext, container, image, city, country, place } = styles

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
                <Text style={[place, city]}>London</Text>
                <Text style={[place, country]}>UK</Text>
                <View style={pWrapper}>
                    <Feather name={'user'} size={50} color={'blue'} />
                    <Text style={ptext}>9000</Text>
                </View>
                <View style={rsWrapper}>
                    <Feather name={'sunrise'} size={50} color={'blue'} />
                    <Text style={rsTxt}>10:30:00am</Text>
                    <Feather name={'sunset'} size={50} color={'blue'} />
                    <Text style={rsTxt}>18:00:00pm</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "royalblue",
        paddingTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
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
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    ptext: {
        fontSize: 25,
        marginLeft: 7,
        color: 'black',
        fontWeight: 'bold'
    },
    rsWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    rsTxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default City