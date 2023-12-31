import React from "react"
import CurrentWeather from "../screens/Weather"
import UpcomingWeather from "../screens/UpcomingWheather"
import City from "../screens/City"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 10, height: 65}
      }}>
          <Tab.Screen name={'Current'} component={CurrentWeather} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'droplet'} size={30} color={focused? 'blue':'black'} />)
          }} />
          <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'clock'} size={30} color={focused? 'blue':'black'} />)
          }} />
          <Tab.Screen name={'City'} component={City} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'home'} size={30} color={focused? 'blue':'black'} />)
          }} />
      </Tab.Navigator>
    )
}

export default Tabs