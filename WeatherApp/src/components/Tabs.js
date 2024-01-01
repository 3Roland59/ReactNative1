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
        tabBarInactiveTintColor: 'royalblue',
        tabBarStyle: { paddingBottom: 10, height: 65, backgroundColor: 'lightblue'},
        headerStyle: { backgroundColor: 'lightblue'},
      }}>
          <Tab.Screen name={'Current'} component={CurrentWeather} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'droplet'} size={30} color={focused? 'blue':'royalblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 160 }
          }} />
          <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'clock'} size={30} color={focused? 'blue':'royalblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 145 }
          }} />
          <Tab.Screen name={'City'} component={City} options={{
            tabBarIcon: ({focused}) =>(<Feather name={'home'} size={30} color={focused? 'blue':'royalblue'} />),
            tabBarLabelStyle: { color: 'black'},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 25, color: 'blue', left: 180 }
          }} />
      </Tab.Navigator>
    )
}

export default Tabs