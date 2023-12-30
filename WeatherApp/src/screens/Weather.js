import React from "react"
import { Feather } from '@expo/vector-icons'
import { View, ImageBackground, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native"

const CurrentWeather = () =>{
  return(
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={require('../../assets/clouds1.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="blue" />
       <Text style={styles.temp}>- 6 -</Text>
       <Text style={styles.feels}>Feels like 5</Text>
       <View style={styles.hlWrapper}>
          <Text>High: 8 </Text>
          <Text>Low: 6</Text>
       </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.des}>Its Sunny</Text>
        <Text  style={styles.mes}>Its a perfect t-shirt wheather</Text>
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
  wrapper: {
    backgroundColor: "royalblue",
    paddingTop: StatusBar.currentHeight,
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
    color: "black"
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
    fontSize: 30
  }
})

export default CurrentWeather