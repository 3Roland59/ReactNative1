import React from "react"
import CurrentWeather from "../screens/Weather"
import UpcomingWeather from "../screens/UpcomingWheather"
import City from "../screens/City"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return(
        <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'lightblue',
        tabBarStyle: { paddingBottom: 10, height: 65, backgroundColor: 'white',},
        headerStyle: { backgroundColor: 'white'},
      }}>
          <Tab.Screen name={'Current'} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'droplet'} size={30} color={focused? 'blue':'lightblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 160 }
          }} >
            {() =><CurrentWeather weatherData={weather.list[0]} />}
          </Tab.Screen>
          <Tab.Screen name={'Upcoming'} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'clock'} size={30} color={focused? 'blue':'lightblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 145 }
          }} >
            {() =><UpcomingWeather weatherData={weather.list} />}
          </Tab.Screen>
          <Tab.Screen name={'City'} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'home'} size={30} color={focused? 'blue':'lightblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 180 }
          }} >
            {() =><City weatherData={weather.city} />}
          </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs