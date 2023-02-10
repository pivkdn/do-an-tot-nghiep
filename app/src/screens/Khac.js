// import React from 'react'
// import { View, Text } from 'react-native'

// export default function Khac() {
//     return (
//         <View>
//             <Text>Khac</Text>
//         </View>
//     )
// }


import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import actionLogin from '../redux/actions/Login'
export default function Khac({navigation}) {
    const dispatch = useDispatch()
    const login = useSelector(state => state.loginReducer)

    const handleLogout = () => {
        dispatch(actionLogin.logout())
    }
    const swapScreen = (id) => {
        switch (id) {
            case 3:
                
                return navigation.navigate('SettingLichSu')
        
            default:
                break;
        }
    }
    return (
        <View>
            {/* <Text style ={{fontSize:20,fontWeight:'bold',marginTop:20,marginBottom:15,marginLeft:12}}>Khác</Text> */}
            <Text style ={{height:2,backgroundColor:'gray'}}></Text>
        <View style ={{marginLeft:12,marginRight:12}}>
        <ScrollView style ={{marginBottom:20}}>
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-person-circle" size={45} color="#A4A4A4"/>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>{login?.user?.fullname ? login.user.fullname : ''}</Text>
                <Text>{login?.user?.numberphone ? login.user.numberphone : ''}</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
            
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style = {{height:45,width:45,backgroundColor:'gray',borderRadius:50,justifyContent:'center',alignSelf:'center',marginRight:10}}>
            {/* <Image style = {{width:35,height:25,alignSelf:'center'}}
            source ={{
                uri :'https://soyagarden.com/content/uploads/2019/10/ic_dau-vang_53px@3x.png'
            }}/> */}
            <Ionicons style ={{alignSelf:'center'}} name="ios-wallet" size={30} color="#A4A4A4"/>
            </View>
            <View style = {{flex:1,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Điểm</Text>
                <Text></Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <TouchableOpacity onPress={() => swapScreen(3)}>
                <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
                <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
                <Ionicons style ={{alignSelf:'center'}} name="md-reader-outline" size={25} color="black"/>
                </View>
                <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                    <Text style ={{fontWeight:'bold'}}>Lịch sử đặt hàng</Text>
                </View>
                    <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
                </View>
            </TouchableOpacity>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="nuclear-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Vòng quay may mắn</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="settings-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'space-between',flexDirection:'row',alignSelf:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Cài đặt</Text>
                <Text style = {{color:'#545454'}}>Mật khẩu và bảo mật</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="md-compass-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Địa chỉ đã lưu</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-mail-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Phản hồi/Góp ý</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-help-circle-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Hỏi đáp</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70,borderBottomWidth:0.2}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="md-star-outline" size={25} color="black"/>
            </View>
            <View style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Đánh giá ứng dụng</Text>
            </View>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
{/*----------------------------------------------------------------------------------------------------------------------------*/}
            <View style ={{flexDirection:'row',marginTop:10,height:70}}>
            <View style ={{height:45,width:45,backgroundColor:'#A4A4A4',borderRadius:50,justifyContent:'center',alignSelf:'center'}}>
            <Ionicons style ={{alignSelf:'center'}} name="ios-log-out-outline" size={25} color="black"/>
            </View>
            <TouchableOpacity onPress={() => handleLogout()} style = {{flex:1,marginLeft:10,justifyContent:'center'}}>
                <Text style ={{fontWeight:'bold'}}>Đăng xuất</Text>
            </TouchableOpacity>
                <Ionicons style = {{alignSelf:'center'}} name="md-chevron-forward-sharp" size={25} color="#424242"/>
            </View>
            <Text style ={{textAlign:'center',marginTop:30}}>Nếu có bất kỳ vướng mắc hoặc góp ý gì cho Toco Toco, quý khách có thể gọi hotline để được hỗ trợ </Text>
            <Text style ={{textAlign:'center'}}>(Thời gian từ 08:00 đến 22:00)</Text>
            <Image style ={{height:200,width:200,alignSelf:'center'}}
            source={{
                uri:'https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.6435-9/50303787_2469082019833440_9046776201552592896_n.png?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=xe3c-gbNxgwAX8e5lbu&_nc_ht=scontent.fpnh22-3.fna&oh=79dde2448d7ac553bf19e24835bb045b&oe=60B19D16'
            }}/>
        </ScrollView>
        </View>
        </View>
    )}