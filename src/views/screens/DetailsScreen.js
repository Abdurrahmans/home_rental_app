import React from 'react';
import {
  
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
 
} from 'react-native';

import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

const {width} = Dimensions.get('screen');
const DetailsScreen = ({navigation,route}) => {
    const house = route.params;
    const InterioImage =({image})=>{
      return (
        <Image style={style.interioImage} source={image}></Image>

      );

    };

  return (
    <SafeAreaView style ={{flex:1,backgroundColor:COLORS.white}}>
      <ScrollView>
        <View style={style.imageBackgroundCointainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View style={style.headerbtn}>
                <Icon name='arrow-back-ios' size={20} onPress={navigation.goBack}></Icon>
              </View>
              <View style={style.headerbtn}>
                <Icon name='favorite' size={20} color={COLORS.red}></Icon>
              </View>
            </View>
          </ImageBackground>
          <View style={style.vartualtag}>
            <Text style={{color:COLORS.white}}>Vartual tour</Text>
          </View>
        </View>
        <View style={style.deatailContainer}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,fontWeight:'bold',}}>{house.title}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={style.ratingTag}>
                <Text style={{color:COLORS.white}}>4.6</Text>
              </View>
              <Text style={{fontSize:14,marginLeft:5}}>155 ratings</Text>
            </View>
          </View>
          <Text style={{fontSize:16 ,color:COLORS.grey}}>{house.location}</Text>
          <View style={{marginTop:20,flexDirection:'row'}}>
            <View style={style.facility}>
              <Icon name='hotel' size={18}></Icon>
              <Text style={style.facilityText}>2</Text>
            </View>
            <View style={style.facility}>
              <Icon name='bathtub' size={18}></Icon>
              <Text style={style.facilityText}>2</Text>
            </View>
            <View style={style.facility}>
              <Icon name='aspect-ratio' size={18}></Icon>
              <Text style={style.facilityText}>100m</Text>
            </View>
           </View>
           <Text style={{color:COLORS.grey, fontSize:14,marginTop:15}}>{house.details}</Text>
           <FlatList 
         
           keyExtractor={(_,key) => key.toString()}
           contentContainerStyle={{marginTop:20}}
           horizontal 
           showsHorizontalScrollIndicator={false} 
           data={house.interiors}
           renderItem ={({item}) => <InterioImage image={item}/>}
           >
           </FlatList>
           <View style={style.footer}>
            <View>
              <Text style={{color:COLORS.blue,fontWeight:'bold',fontSize:18}}>$1,500</Text>
              <Text style={{color:COLORS.grey,fontWeight:'bold',fontSize:14}}>Total Price</Text>
            </View>
            <View style={style.bookNowbtn}>
              <Text style={{color:COLORS.white}}>Book Now</Text>

            </View>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
 imageBackgroundCointainer:{

    elevation:20,
    height:350,
    alignItems:'center',
    marginHorizontal:20,
    marginTop:20,
  },

  backgroundImage
  :{
    height:'100%',
    width:'100%',
    borderRadius:15,
    overflow:'hidden',
  },
  header:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  headerbtn:{
    height:50,
    width:50,
    backgroundColor:COLORS.white,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  vartualtag:{
    height:120,
    top:-20,
    backgroundColor:COLORS.dark,
    height:40,
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  deatailContainer:{
    flex:1,
    paddingHorizontal:20,
    marginTop:40,
  },
  ratingTag:{
    height:30,
    width:35,
    backgroundColor:COLORS.blue,
    borderRadius:5,
    justifyContent:'center',
    alignItems:"center",
  },
  facility:{
    flexDirection:'row',
    marginRight:5,
  },
  facilityText:{
    marginLeft:5,
    color:COLORS.grey,
  },
  interioImage:{
    width: width / 3 - 20,
    height:80,
    borderRadius:10,
    marginRight:10,
  },
  footer:{
    flexDirection:'row',
    height:70,
    backgroundColor:COLORS.light,
    borderRadius:10,
    paddingHorizontal:20,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'space-between',
  },
  bookNowbtn:{
    height:50,
    backgroundColor:COLORS.dark,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    paddingHorizontal:20,


  },

});

export default DetailsScreen;