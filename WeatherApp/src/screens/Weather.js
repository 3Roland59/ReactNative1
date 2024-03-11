import React from "react"
import { Feather } from '@expo/vector-icons'
import { View, ImageBackground, Text, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native"
import RowTxt from "../components/RowTxt"
import { weatherType } from "../utilities/weatherType"

const CurrentWeather = ({ weatherData }) =>{

  const { wrapper, container, contain, image, hlWrapper, hl, bodyWrapper, des, mes, tempStyles, feels } = styles

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData

  const weatherCondition = weather[0]?.main

  return(
    <SafeAreaView style={wrapper}>
      <ImageBackground source={weatherType[weatherCondition]?.url} style={image}>
      <View style={contain}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="blue" />
       <Text style={tempStyles}>{temp}&deg;C</Text>
       <Text style={feels}>{`Feels like ${feels_like}`}&deg;C</Text>
       <RowTxt mes1={`High: ${temp_max} `} mes2={`Low: ${temp_min}`} hlStyles={hlWrapper} hStyles={hl} lStyles={hl} />
      </View>
      <RowTxt mes1={weather[0]?.description} mes2={weatherType[weatherCondition]?.mes} hlStyles={bodyWrapper} hStyles={des} lStyles={mes} />
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
    // backgroundColor: '#00000080'
    },
  wrapper: {
    // backgroundColor: "royalblue",
    // paddingTop: StatusBar.currentHeight,
    flex: 1
  },
  tempStyles: {
    fontSize: 48,
    color: "white"
  },
  feels: {
    fontSize: 30,
    color: "blue"
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
    fontSize: 35,
    color: 'blue'
  },
  mes: {
    fontSize: 25,
    color: 'white'
  }
})

export default CurrentWeather