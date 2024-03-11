/* eslint-disable prettier/prettier */
export const weatherType = {
  Thunderstorm: {
    icon: 'zap',
    mes: 'It could get noisy',
    url: require('../../assets/thunderstorm.jpg')
  },
  Drizzle: {
    icon: 'cloud-rain',
    mes: 'It might rain a little',
    url: require('../../assets/drizzle.jpg')
  },
  Rain: {
    icon: 'umbrella',
    mes: 'You will need an umbrella',
    url: require('../../assets/rain.jpg')
  },
  Snow: {
    icon: 'cloud-snow',
    mes: 'Lets build a snowman',
    url: require('../../assets/snow.jpg')
  },
  Clear: {
    icon: 'sun',
    mes: 'It is perfect t-shirt day',
    url: require('../../assets/clear.jpg')
  },
  Clouds: {
    icon: 'cloud',
    mes: 'You could live in the cloud',
    url: require('../../assets/clouds.jpg')
  },
  Haze: {
    icon: 'wind',
    mes: 'It might be a bit dark',
    url: require('../../assets/haze.jpg')
  },
  Mist: {
    icon: 'align-justify',
    mes: 'It might be hard to see',
    url: require('../../assets/mist.jpg')
  },
}
