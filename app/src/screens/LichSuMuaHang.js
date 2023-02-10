import React,{useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { getOrders } from '../services/useApi'
const LichSuMuaHang = (props) => {
    const [arr, setArr] = useState([])
    useEffect(() => {
        handleFetchApi()
    },[])
    const handleFetchApi = async() => {
        try {
            const sResult = await getOrders()
            if(sResult.success) {
                setArr(sResult.orders)
            } else {
                setArr([])
            }
        } catch (error) {
            setArr([])
        }
    }
    return(
        <View style={{flex: 1}}>
            <FlatList 
                data={arr}
                renderItem={({item}) => {
                    return(
                        <View style={{height:100, borderWidth:1, margin:10, borderRadius:10, padding:20}}>
                            <Text>Địa chỉ: {item && item.address ? item.address : ''}</Text>
                            <Text>Thời gian: {item && item.created_at ? item.created_at : ''}</Text>
                            <Text>Số tiền thanh toán: {item && item.payment ? item.payment : ''}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id?.toString()}
            />
        </View>
    )
}

export default LichSuMuaHang