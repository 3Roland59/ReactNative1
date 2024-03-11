import React, { useEffect, useState} from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./src/hooks/useGetWeather"; 
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const { container } = styles

  const [loading, err, weather] = useGetWeather()
  console.log(loading, err, weather)
  
  if (weather && weather.list && !loading){
    return(
      <NavigationContainer>
        <Tabs weather = {weather} />
      </NavigationContainer>
    )
  }
  
    return(
      <View style={ container }>
        {err? <ErrorItem /> : <ActivityIndicator size={'large'} color={'red'} /> }
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
})
export default App