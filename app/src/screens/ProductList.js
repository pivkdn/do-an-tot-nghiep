// import React from 'react'
// import { View, Text } from 'react-native'

// export default function ProductList() {
//     return (
//         <View>
//             <Text>ProductList</Text>
//         </View>
//     )
// }
  
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ProductList({ navigation }) {
  return (
    <View>
      <Text>ProductList</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen')}>
        <Text>Move to product detail screen</Text>
      </TouchableOpacity>
    </View>
  )
}
