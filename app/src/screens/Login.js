import React ,{useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useDispatch } from 'react-redux'
import actionLogin from '../redux/actions/Login'
export default function Login() {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('')
    const handleLogin = () => {
        if(phone.length === 10 || phone.length === 12) {
            const param = {
                numberphone: phone
            }
            dispatch(actionLogin.login(param))
        } else {
            Alert.alert('Thong bao', 'Vui long nhap dung so dien thoai')
        }
        
    }
    return (
        <ScrollView style={{backgroundColor:'white'}}>
        <View style ={{marginLeft:15,marginRight:15}}>
            <View style={{backgroundColor:'white',height:280}}>
                <Image style={styles.a}
                source={{
                uri: 'https://i.imgur.com/kTmtZly.png',
                }}
            />
            </View>
            <TouchableOpacity style ={styles.b}>
            <FontAwesome style ={{alignSelf:'center'}} name ="facebook" size={25} color="white"/>
            <Text style={{color:'white',textAlignVertical:'center',marginLeft:10,fontWeight:'bold'}}>Đăng nhập với facebook</Text>
            </TouchableOpacity>
            <Text style ={{textAlign:'center', color:'gray', marginTop:25}}>Hoặc đăng nhập bằng</Text>
            <View style ={{flexDirection:'row', alignSelf:'center',marginTop:15}}>
                <FontAwesome style = {styles.c}name ="mobile-phone" size={25} color="#008000"/>
                <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder ='Số điện thoại'/> 
            </View>
            <Text style ={{borderTopWidth:0.2,marginLeft:15,marginRight:15}}></Text>
            <TouchableOpacity onPress={()=>handleLogin()} style = {styles.d}>
                <Text style = {{fontWeight:'bold',textAlign:'center'}}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <View style = {{width:300,alignSelf:'center',marginTop:15}}>
            <Text style ={{textAlign:'center'}}>Bằng việc đăng nhập, bạn đã đồng ý với <Text style ={{textDecorationLine:'underline',color:'#008000'}}>Điều khoản sử dụng</Text> của Toco Toco</Text>
            </View>
            <TouchableOpacity style = {styles.e}>
                <Text style ={{textAlign:'center',fontWeight:'bold'}}>TRẢI NGHIỆM NGAY</Text>
            </TouchableOpacity>
            <Text style ={{textAlign:'center',marginTop:20}}>Phiên bản 1.1.4</Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    a:{
        marginTop:80,
        height:110,
        width:285,
        alignSelf:'center',
    },
    b:{
        flexDirection:'row',
        color:'blue',
        borderRadius:8,
        height:40,
        width:350,
        backgroundColor:'blue',
        justifyContent:'center',
        alignSelf:'center',
    },
    c:{
        alignSelf:'center',
        marginRight:10,
    },
    d:{
        backgroundColor:'yellow',
        height:40,
        width:350,
        borderRadius:8,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:15,
    },
    e:{
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:8,
        borderColor:'yellow',
        borderWidth:1,
        height:40,
        width:350,
        marginTop:30
    }
})