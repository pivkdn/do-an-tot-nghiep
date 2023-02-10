import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { getBrands } from '../services/useApi'
export default function Shop() {
    const [brands, setBrands] = useState([])
    const [searchString, setSearching] = useState('')
    useEffect(() => {
        getAll()
    },[])
    const getAll = async() => {
        try {
            const sResult = await getBrands()
            if(sResult.success) {
                setBrands(sResult.brands)
            } else{
                setBrands([])
            }
        } catch (error) {
            setBrands([])
        }
    }
    const handleSearch = () => {
        if(searchString === '') {
            getAll()
        } else {
            let searchArr = brands.filter(item => item.name.includes(searchString))
            setBrands(searchArr)
        }
    }
    return (
        <View>
            <View style = {{flexDirection:'row',height:70,width:'auto'}}>
                <View style = {{flexDirection:'row', borderWidth:0.5,marginTop:20,width:300,height:35,borderRadius:8,marginLeft:25}}>
                <Ionicons onPress={handleSearch} style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchString}
                    onChangeText={(searchString) => setSearching(searchString)}
                    underlineColorAndroid="transparent"
                />
                </View>
                <Feather onPress={handleSearch} style={{marginTop:20,marginLeft:30}} name="send" size={25} color="gray"/>
            </View>
            <ScrollView style ={{backgroundColor:'#D8D8D8',width:'auto',marginBottom:70}}>
                {
                    brands && brands.length > 0 ?
                    brands.map((item,index) => {
                        return(
                            <TouchableOpacity key={index}>
                    <View style = {styles.b}>
                        <Image style = {styles.a}
                        source={{
                            uri: item.photo
                        }}
                        />
                        <View style ={{backgroundColor:'white',width:'auto',justifyContent:'space-around',borderBottomLeftRadius:8,borderBottomRightRadius:8,height:100,justifyContent:'space-evenly'}}>
                            <Text style ={{fontWeight:'bold',fontSize:16,marginLeft:10}}>{item.name}</Text>
                        <View style ={{flexDirection:'row',width:'auto',marginLeft:10}}>
                            <Ionicons name="ios-location-outline" size={23} color="#000"/>
                            <Text style ={{color:'#585858',marginLeft:5,width:300}}>{item.address}</Text>
                        </View>
                        <View style ={{flexDirection:'row',backgroundColor:'white',marginLeft:10,width:'auto',borderBottomRightRadius:8}}>
                            <Feather name="phone-call" size={20} color="#000"/>
                            <Text style ={{color:'#585858',marginLeft:8}}>{item.numberphone}</Text>
                        </View>
                        </View>
                    </View>
                </TouchableOpacity>
                        )
                    })
                : null
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    searchIcon:{
        alignSelf:'center',
        marginRight:10,
        marginLeft:5
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    a:{
        height:200,
        width:'auto',
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    },
    b:{
        marginLeft:15,
        marginRight:15,
        marginTop:25,
        height:290,
    },
})
