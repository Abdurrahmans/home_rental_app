import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
  Pressable,
  
} from 'react-native';
import COLORS from '../../consts/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style ={{flex:1, backgroundColor:COLORS.white}} >
        <StatusBar translucent backgroundColor={COLORS.tranparent}></StatusBar>

    <Image source={require('../../assets/onboardImage.jpg')} style={style.image}></Image>
     <View style={style.indicatorContainer}>
         <View style={style.indicator}></View>
         <View style={style.indicator}></View>
         <View style={[style.indicator,style.indicatorActive]}></View>
     </View>
     <View style={{paddingHorizontal:20,paddingTop:20}}>
         <View >
             <Text style={style.title}>Find your</Text>
             <Text style={style.title}>sweet home</Text>
         </View>
         <View style={{marginTop:20}}>
             <Text style={style.textStyle}>Schedule visit in just a few click</Text>
             <Text style={style.textStyle}>visit in just a few click</Text>
         </View>
     </View>

     <View style={{flex:1,justifyContent:'flex-end',paddingBottom:40}}>
        <Pressable onPress={()=> navigation.navigate('HomeScreen')}>
            <View style={style.btn}>
                <Text style={{color:COLORS.white}}>Get Start</Text>
            </View>
        </Pressable>
     </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    image:{
        height:350,
        width: '100%',
        borderBottomLeftRadius:100,
    },
    indicatorContainer:{
        height:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    indicator:{
        height:3,
        width:30,
        backgroundColor:COLORS.grey,
        marginHorizontal:5,

    },
    indicatorActive:{
        backgroundColor:COLORS.dark,
    },
    title:{
        fontSize:32,
        fontWeight:'bold'
    },
    textStyle:{
        fontSize:10,
        color:COLORS.grey,
    },
    btn:{
        height:60,
        marginHorizontal:20,
        backgroundColor:COLORS.dark,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    }
 
});
export default OnBoardScreen;
