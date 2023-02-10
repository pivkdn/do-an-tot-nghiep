// import React from 'react'
// import { View, Text } from 'react-native'

// export default function ProductDetail() {
//     return (
//         <View>
//             <Text>ProductDetail</Text>
//         </View>
//     )
// }

import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import actionOrder from '../redux/actions/Order'
const sizes = ['S', "M", "L", 'XL', 'XXL']
export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1)
  const { detail } = route.params;
  const onAddCart = () => {
    const body = {
      ...detail,
      count: count
    }
    dispatch(actionOrder.addItem(body))
  }
  return (
    <ScrollView style={{marginLeft:10, marginRight:10}}>
    <View style = {{backgroundColor:'white'}}>
      {/* <Image source={{ uri: getImage(detail?.images?.[0]) }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} /> */}
      <Image source={{ uri: detail?.image }}
        style={{ width: '100%', height: 400, resizeMode: 'contain', marginTop:30 }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{detail.product_name}</Text>
        <Text>{detail?.description}</Text>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
          <View>
            <Text style={{
              marginRight: 5,
              fontWeight: 'bold'
            }}>Giá: {detail?.price}đ</Text>
            <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}></Text>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <View style = {{height:30,width:30, backgroundColor:'#01DF01',justifyContent:'center',borderRadius:50}}>
                <Ionicons onPress={() => setCount(count + 1)} style ={{alignSelf:"center"}} name="ios-add-sharp" size={25} color='white'/>
            </View>
            <TextInput editable={false} value={count.toString()} onChangeText={text => setCount(parseInt(text))} placeholder={'So luong'} />
            <View style = {{height:30,width:30, backgroundColor:'red',justifyContent:'center',borderRadius:50}}>
                <Ionicons onPress={() => setCount(count - 1)} style ={{alignSelf:"center"}} name="remove-sharp" size={25} color='white'/>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>
          {/* {sizes.map((e, i) => {
            const isChecked = e === detail?.size?.[0]
            return (
              <TouchableOpacity key={i}
                style={{
                  borderRadius: 20, backgroundColor: isChecked ? 'grey' : 'white',
                  borderWidth: 1, padding: 2, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 10 }}>{e}</Text>
              </TouchableOpacity>
            )
          })} */}
        </View>
        <TouchableOpacity
          onPress={onAddCart}
          style={{
            marginBottom:20,
            backgroundColor: 'orange',
            marginTop: 15, width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  )
}
