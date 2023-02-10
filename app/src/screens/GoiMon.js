import React, {
  useEffect, useState

} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { getProducts } from '../services/useApi'


export default function App({ route, navigation }) {
  const [order, setOrder] = useState()
  const [cate, setCate] = useState();
  const [search, setSearch] = useState('')

  

  const [products, setProducts] = useState([])

  
  useEffect(() => {
      
    getAllProducts()
  }, [])
  
  const handleSearch = () => {
    if(search === '' ) {
      getAllProducts()
    } else {
      let arrProduct =  products.filter(item => item.product_name.includes(search))
      setProducts(arrProduct)
    }
  }
  const getAllProducts = async() => {
    try {
      const sResult = await getProducts()
      if(sResult.success) {
          setProducts(sResult.products)
      } else {
        setProducts([])
      }
    } catch (error) {
      setProducts([])
    }
  }

  const onMoveToDetail = (data) => () => {
    navigation.navigate('ProductDetail', { detail: data });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ width: '45%', }} onPress={onMoveToDetail(item)}>
      <Image
        style={styles.imgStyle}
        // source={{ uri: getImage(item.images?.[0]) }}
        source={{ uri: item.image }}
      />
      <View style={styles.rowPrice}>
        <Text>{item.price}</Text>
          <View style = {{height:30,width:30, backgroundColor:'#01DF01',justifyContent:'center',borderRadius:50}}>
              <Ionicons style ={{alignSelf:"center"}} name="ios-add-sharp" size={25} color='white'/>
          </View>
      </View>
      <Text>{item.product_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
            <TouchableOpacity>
      <View style={{flexDirection:'row', justifyContent:'space-between',marginLeft:10, marginRight:10}}>
        <View>
          <Text style={{fontSize:14}}>Giao đến</Text>
          <View style={{flexDirection:'row'}}>
          <Image source={{ uri: 'https://raw.githubusercontent.com/hungdev/IntegrateMapAndCamera/master/src/marker.png' }} style={{ height: 25, width: 25 }} />
            <Text style={{fontSize:18, marginHorizontal:20}}>
            Mộ Lao - Hà Đông - Hà Nội
            </Text>
          </View>
        </View>
        <Ionicons style={{alignSelf:'center'}} name="md-caret-down-sharp" size={25} color="black"/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', borderWidth:0.5, marginLeft:10, marginRight:10, borderRadius:10, margin:10}}>
      <Ionicons onPress={()=>handleSearch()} style={{padding:10}} name="ios-search" size={25} color="gray"/>
        <TextInput value={search} onChangeText={text => setSearch(text)} placeholder="Tìm Kiếm"/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{height:40, width:300,alignSelf:'center', justifyContent:'center', borderRadius:15,marginBottom:10 ,backgroundColor:'orange'}} onPress={()=> navigation.navigate('Bag')}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>GIỎ HÀNG CỦA BẠN</Text>
          <Ionicons name="cart" size={20} color="black"/>
        </View>
      </TouchableOpacity>

              <FlatList
                  data={products}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  style={{ height: 555, }}
                  keyExtractor={item => item.id?.toString()}
                  // keyExtractor={(_, i) => i + ""}
                  renderItem={renderItem}
                  ListFooterComponent={() => {
                    return(
                      <View style={{height:200}}>
                        
                      </View>
                    )
                  }}
                  columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
              />
    </View>
  )
}

const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imgStyle: {
    height: 150,
    width: 'auto',
    borderRadius:8,
    marginTop:20,
  }
});