import React from "react"
import { View, StyleSheet } from "react-native"
import CurrentWeather from "./src/screens/Weather"
import UpcomingWeather from "./src/screens/UpcomingWheather"
import City from "./src/screens/City"

const App = () => {
  return(
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App