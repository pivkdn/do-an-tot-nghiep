  import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper'
import { ImageBackground } from 'react-native'
import { getProductList } from '../services/Api'
import { getAllNews, getCoin, UpdateMoney } from '../services/useApi'
import { useSelector } from 'react-redux'

import PushNotification from "react-native-push-notification";
import Modal from "react-native-modal";
import WebView from 'react-native-webview'
import { baseURI } from '../services/config'
export default function TrangChu({ route, navigation }) {
    const login = useSelector(state => state.loginReducer)
    const [product, setProduct] = useState([])
    const [news, setNews] = useState([])
    const [coin, setCoin] = useState({})
    const [isShow, setIsShow] = useState(false)
	// const dispatch = useDispatch();
	// const product = useSelector((store) => store.productReducer.products);

   
	useEffect(() => {
		// dispatch(getProduct({ page: 1, limit: 10 }));
		// getProductList()
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				//console.log(response.data.data,'res'); // data tu api tra ve
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])

    useEffect(() => {
        getNews();
        getWallet()
    }, [])
    const getWallet = async() => {
        try {
            const sResult = await getCoin(login.user.id)
           
            if(sResult.success) {
                setCoin(sResult.wallet)
            } else {
                setCoin({})
            }
        } catch (error) {
            setCoin({})
        }
    }
    console.log(coin)
    const getNews = async() => {
        try {
            const sResult = await getAllNews();

            if(sResult.success) {
                setNews(sResult.news)
            } else {
                setNews([])
            }
        } catch (error) {
            console.log(error)
            setNews([])
        }
    }
    const rechargeMoney = async() => {
        
        try {
           
            const body = {
                id: coin.id,
                money: 500000
            } 
            const sResult = await UpdateMoney(body)
            if(sResult.success) {
                PushNotification.localNotification({
                    title: 'Hệ thống nạp tiền tự động của toco',
                    message: 'Nạp tiền thành công',
                    channelId: 'chanel-demo'
         
                })
            } else {
                return Alert.alert('Thông báo','Lỗi nạp tiền vui lòng thử lại sau') 
            }
        } catch (error) {
            console.log(error)
            return Alert.alert('Thông báo','Lỗi nạp tiền vui lòng thử lại sau') 
        } finally {
            getWallet()
            setIsShow(false)
        }
    }
    const handleResponse = data => {
        console.log(data.title,'tiitle');
        if (data.title === "success") {
            rechargeMoney();
        } else if (data.title === "cancel") {
            setIsShow(false)
            Alert.alert('Thông báo','Bạn đã huỷ nạp tiền')
        } else {
            return;
        }
    };
    if(!login) return null;

    return (
        <View>
            <Modal isVisible={isShow} style={{flexDirection:'column', alignItems:'center'}} onBackdropPress={()=>setIsShow(false)} onBackButtonPress={()=>setIsShow(false)}>
                <View style={{ height:500, width:300, backgroundColor:'white' }}>
                <WebView
              source={{uri: baseURI }}
              onNavigationStateChange={data =>handleResponse(data)}
                injectedJavaScript={`document.f1.submit()`}
              style={{flex: 1}}
            />
                </View>
            </Modal>
            <ScrollView>
            
                <View>
                    <LinearGradient colors={['#FFFF99', '#FFFF99', '#FFFF99']} style={styles.linearGradient}>
                         <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg'}}
                        style={ styles.AvatarIcon }
                    />
                    <Text style={{marginTop: 40}}>Xin chào: {login.user.fullname ? login.user.fullname : login.user.numberphone}</Text>
                    <TextInput />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300 }}>
                        <View style={{ flexDirection: 'row' }}>
                           
                        </View>
                        
                    </View>
                </View>
                        <TouchableOpacity style={{ width: '100%', height: 270, marginTop: 15 }}>

                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>

                            </TouchableOpacity>
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.Delivery}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 15, alignSelf: 'center', color: '#000000' }}>Số dư ví</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Ionicons name="card-outline" size={20} color="#666666" />
                                    <Text>{coin &&  coin.money ? coin.money : 0 }</Text>
                                    <Feather name="at-sign" size={20} color="#000000" />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsShow(true)} style={styles.Delivery}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }} >
                                <FontAwesome5 name="hand-holding-usd" size={20} color="#000000" />
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000000' }}>NẠP ĐIỂM</Text>
                                <Ionicons name="chevron-forward-outline" size={20} color="#aaaaaa" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ImageBackground
                        style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 20, with: 20, height: 100, backgroundColor: '#ffffff', elevation: 10, fontSize: 15 }}
                        blurRadius={1}
                        source={{ uri: 'https://static.mservice.io/blogscontents/momo-upload-api-200514140423-637250618634276654.jpg'}}

                    >
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                            <View style={{ width: 275 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#F7FCC2' }}></Text>
                                <Text></Text>
                                {/* <Ionicons name="arrow-forward" size={25} color="black" /> */}
                            </View>
                            <View>
                                <Image
                                    source={{ uri: 'https://diadiemanngon.com/wp-content/uploads/2020/04/QR_SEODIADIEM-1.jpg'
}
}
                                    style={styles.DeliIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View>
                        <View style={{ marginTop: 20, marginLeft: 10,flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Khuyến Mại</Text>
                            <TouchableOpacity >
                                    <Text style={{ marginRight: 10, color: '#000000' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.TakeAway}>
                                <TouchableOpacity onPress={() => navigation.navigate('GoiMon')}>
                                    <Image
                                        source={{ uri: 'https://product.hstatic.net/1000355252/product/2018-03-20-09_39_59_mutvietquatdaxay_ca8e062cf8b244f5924bda2da96004f9_grande.jpg'
}
}
                                        style={styles.DeliIcon2}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginLeft: 10 }}>Mứt viêt quất sữa chua đá xay</Text>
                                    <Text style={{ marginLeft: 10 }}>40.000-50.000</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.TakeAway}>
                                <TouchableOpacity >
                                    <Image
                                        source={{ uri: 'https://congthucphache.com/wp-content/uploads/2017/09/2016815171448-mut-viet-quat-sua-chua-da-xay.jpg'
}
}
                                        style={styles.DeliIcon2}
                                    />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', marginLeft: 10 }}> Trà Nhật Đá Xay</Text>
                                    <Text style={{ marginLeft: 10 }}>40.000-50.000</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', alignItems: 'center', marginLeft: 10 }}>Tin tức</Text>
                                <TouchableOpacity >
                                    <Text style={{ marginRight: 10, color: '#000000' }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 10, width: '95%', alignSelf: 'center' }}>
                                <TouchableOpacity style={{ width: '100%', height: 230, marginTop: 15 }}>
                                    {
                                        news && news.length ?
                                        <Swiper style={styles.wrapper}
                                        index={0}
                                        autoplay={true}
                                        dot={
                                            <View
                                                style={{
                                                    backgroundColor: 'silverred',
                                                    width: 18,
                                                    height: 3,
                                                    marginBottom: 8,
                                                    marginHorizontal: 2
                                                }}
                                            />
                                        }
                                        activeDot={
                                            <View
                                                style={{
                                                    backgroundColor: 'white',
                                                    width: 18,
                                                    height: 3,
                                                    marginBottom: 8,
                                                    marginHorizontal: 2
                                                }}
                                            />
                                        }
                                    >
                                                                        
                                        {
                                            news.map((item,index) => {
                                                return(
                                                    <View key={item.id} style={styles.slide}>
                                                        <View style={styles.slide1}>
                                                            <Image
                                                                source={{ uri: item.images } }
                                                                style={{
                                                                    width: '100%',
                                                                    height: '90%',
                                                                    alignSelf: 'center',
                                                                    borderRadius: 10,
                                                                }}
                                                            />
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </Swiper> : null
                                    }
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}></Text>
                    </View> */}
                </View>
            </ScrollView>
        </View >
    )
}



const styles = StyleSheet.create({
    scroll: {
        height: 'auto'
    },
    linearGradient: {
        width: '100%',
        height: 70
    },
    slide: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '90%',
    },
    slide1: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        marginRight: 5
    },
    wrapper: {},
    deli: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Delivery: {
        width: '50%',
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'silver',
    },
    AvatarIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 50
    },
    DeliIcon: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    DeliIcon2: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    txtDeli: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 10,
        marginTop: 10
    },
    Log: {
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: 'silver',
    },
    banner: {
        width: '95%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    reward: {
        width: '95%',
        height: 1000,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: 'silver',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    Notif: {
        width: '95%',
        height: 'auto',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderColor: '#f9f9f9',
        borderWidth: 0.5,
        borderRadius: 8,
    },
    Noti: {
        margin: 15,
        flexDirection: 'row'
    },
    NotiTxt: {
        marginLeft: 20
    },
    TakeAway: {
        width: '45%',
        height: 180,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFCC',
        borderColor: '#FFFFCC'
    }
})

