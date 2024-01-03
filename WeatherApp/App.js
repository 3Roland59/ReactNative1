import React, { useEffect, useState} from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import * as Location from 'expo-location';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading ] = useState(true)
  const [location, setLocation] = useState(null)
  const [err, setErr] = useState(null)
  const { container } = styles
  useEffect(() => {
    (async()=>{
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted'){
        setErr('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if (location){
    console.log(location) 
  }

  if (loading){
    console.log(loading)
    return(
      <View style={ container }>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  } 

  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
})
export default App