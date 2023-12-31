import React from "react"
import { Feather } from '@expo/vector-icons'
import { View, ImageBackground, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import RowTxt from "../components/RowTxt"

const CurrentWeather = () =>{

  const { wrapper, container, contain, image, hlWrapper, hl, bodyWrapper, des, mes, temp, feels } = styles

  return(
    <SafeAreaView style={wrapper}>
      <ImageBackground source={require('../../assets/clouds1.jpg')} style={image}>
      <View style={contain}>
      <View style={container}>
        <Feather name="sun" size={100} color="blue" />
       <Text style={temp}>- 6 -</Text>
       <Text style={feels}>Feels like 5</Text>
       <RowTxt mes1={'High: 8 '} mes2={'Low: 6'} hlStyles={hlWrapper} hStyles={hl} lStyles={hl} />
      </View>
      <RowTxt mes1={'Its Sunny'} mes2={'Its a perfect t-shirt wheather'} hlStyles={bodyWrapper} hStyles={des} lStyles={mes} />
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: "center"
  },
  image:{
    flex: 1
  },
  contain: {
    flex: 1,
    backgroundColor: '#00000080'
    },
  wrapper: {
    // backgroundColor: "royalblue",
    // paddingTop: StatusBar.currentHeight,
    flex: 1
  },
  temp: {
    fontSize: 48,
    color: "black"
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  hl: {
    fontSize: 20,
    color: "white"
  },
  hlWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  des: {
    fontSize: 48
  },
  mes: {
    fontSize: 30,
    color: 'white'
  }
})

export default CurrentWeather