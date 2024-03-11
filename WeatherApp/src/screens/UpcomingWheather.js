import React from "react"
import { SafeAreaView, ImageBackground, FlatList, StatusBar, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import Item from "../components/ListItem"
import { weatherType } from "../utilities/weatherType"
    

const UpcomingWeather = ({ weatherData }) => {

    // console.log(weatherData)

    const renderItem = ({item}) => {
        return(
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
        )
    }

    const { container, image, contain } = styles

    return(
        <SafeAreaView style={container}>
            <ImageBackground source={weatherType[weatherData[0].weather[0].main].url} style={image}>
            <FlatList
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                // ItemSeparatorComponent={() => <View style={{backgroundColor: 'gray', height: 5}}></View>}
             />
             </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight || 0,
        // backgroundColor: "royalblue"
    },
image: {
    flex: 1
    }
})
export default UpcomingWeather