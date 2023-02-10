import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'
import { useDispatch, useSelector } from "react-redux";
import actionOrder  from '../redux/actions/Order'
import { addOrder, getCoin } from '../services/useApi'
import PushNotification from "react-native-push-notification";
export default function CartScreen({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.loginReducer)
  const bag = useSelector(state => state.orderReducer)
  const [data, setData] = useState([])
  const [tong, setTong] =  useState(0)
  useEffect(() => {
    if(bag.success) {
      setData(bag.order)
      sumOrder(bag.order)
    }
  },[bag])
  const reducer = (previousValue, currentValue) => 
  (previousValue.count*previousValue.base_price) + (currentValue.count*currentValue.base_price);
  const sumOrder = (listArr) => {
    if(listArr && listArr.length > 1) {
      const data1 = listArr.reduce(reducer)
      setTong(data1)
    } 
    if(listArr.length === 1) {
      const data2 = parseInt(listArr[0].count) * parseInt(listArr[0].base_price)
      setTong(data2)
    }
    
  }
  const onRemoveAll = () => {
    dispatch(actionOrder.resetItem())
    PushNotification.localNotification({
      title: 'Hệ thống của toco',
      message: 'Cảm ơn bạn đã mua hàng bên ToCo, vui lòng chờ nhân viên giao hàng.',
      channelId: 'chanel-demo'

    })
  }

  const onRemoveItem = (item) => {
    dispatch(actionOrder.removeItem(item))
  }

  const onChangeQuantity = (type, item) => () => {
    let bodyParam = null;
    switch (type) {
      case 'add':
        bodyParam = {
          ...item,
          count: item.count + 1
        }
        return dispatch(actionOrder.addItem(bodyParam))
      case 'remove':
        bodyParam = {
          ...item,
          count: item.count - 1
        }
        return dispatch(actionOrder.addItem(bodyParam))
     
    
      default:
        break;
    }
    
  }
  const orderItem = async(obj) => {
    try {
      const body = {
        address_wallet: obj.address_wallet,
        products: obj.id,
        address: 'Nha',
        payment: tong.toString(),
        address_card: obj.card,
        status: 0
      }
      const sResult = await addOrder(body)
      if(sResult.success) {
        return Alert.alert('Thông báo','Đặt hàng thành công', [
          {
            text: "Cancel",
            onPress: () => {
              onRemoveAll()
              navigation.goBack()

            },
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            onRemoveAll()
              navigation.goBack()
          } }
        ])
      } else {
        Alert.alert('Thong bao', 'Loi')
      }
    } catch (error) {
      throw new Error('error')
    }
  }
  const handleOrder = async() => {
    try {
      
      const wallet = await getCoin(user.user.id)
      console.log(wallet)
      if(wallet.success) {
        if(wallet.wallet.money < tong) {
          return Alert.alert('Thông báo', 
          'Số tiền trong tài khoản không đủ, vui lòng nạp tiền')
        } else {
          orderItem(wallet.wallet)
        }
      }
      
    } catch (error) {
      Alert.alert('Thong bao', 'Loi')
    }
  }
  const renderItem = ({ item }) => {
    return (
      <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{item.product_name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
            <View style={{ flex: 1, }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' , paddingBottom:12}}>
                <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, 
                borderRadius: 5, borderColor: 'transparent' }}>
                  
                </Text>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity onPress={onChangeQuantity('remove', item)}>
                    <Ionicons name="md-remove" size={25} color={'black'} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item?.count}</Text>
                  <TouchableOpacity onPress={onChangeQuantity('add', item)}>
                    <Ionicons name="add-outline" size={25} color={'black'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{paddingTop:5}} onPress={()=>onRemoveItem(item)}>
              <Ionicons name="ios-trash-outline" size={30} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </CartView>
    );
  };


  return (
    <View style={{flex:1}}>
      <FlatList
        style={{ backgroundColor: 'grey' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index) => index?.toString()}
        
      // extraData={}
      />
      {data?.length ?
      <View style={{marginVertical:5, marginHorizontal:10}}>
        <Text style={{textAlign:'right'}} >Tổng đơn giá: {tong}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{ marginTop: 10, width:150, backgroundColor:'gray',height:50,justifyContent:'center' }} onPress={onRemoveAll}>
          <Text style={{textAlign:'center'}}>
            Xóa tất cả
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOrder()} 
        style={{ marginTop: 10, width:150, backgroundColor:'orange',height:50,justifyContent:'center'  }} >
          <Text style={{textAlign:'center'}}>
            Mua Ngay
          </Text>
        </TouchableOpacity>
        </View>
      </View>
       :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text>Chưa chọn sản phẩm!</Text>
        </View>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },

});