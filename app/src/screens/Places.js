
import React from 'react'
import { View, Text, TouchableOpacity, Image,StyleSheet,Platform } from 'react-native'
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
// import markerIcon from '../assets/marker.png'

const locations = [
  { title: 'Hoàn đạo thúy', latitude: 21.008734294625746, longitude: 105.8007496371243 },
  { title: 'Văn cao', latitude: 21.037942105004902, longitude: 105.81537618220678 },
  { title: 'Linh Đàm', latitude: 21.020264194258537, longitude: 105.82651205522612 },
  { title: 'Nguyễn thị định', latitude: 21.008088399909653, longitude: 105.80496058220628 },
  { title: 'Ô chợ dừa', latitude: 21.020284223998562, longitude: 105.82654424173597 },
  { title: 'Nguyễn chí thanh', latitude: 21.01952476509602, longitude: 105.80827881289945 },
  { title: 'Location BG', latitude: 21.01149834175052, longitude: 105.8306135263893 }
]
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const Places = () => {
  return (
    <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 21.008734294625746,
            longitude: 105.8007496371243,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {locations && locations.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude : marker.latitude , longitude : marker.longitude }}
              title={marker.title}
              description={marker.description}
            >
              <Image source={require('../assets/delivery-man.png')} style={{height: 35, width:35 }} />
              </Marker>
          ))}
        </MapView>
      </View>
  
  )
}

export default Places;
