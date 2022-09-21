import React from 'react';
import { SafeAreaView,
   StyleSheet,
   Text,
   View,
   StatusBar,
   Image,
   TextInput,
   ScrollView,
   Dimensions,
   FlatList,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';

const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
  const ListCategories = () =>{
    const [selectCategoryIndex,setSelectCategoryIndex] = React.useState(0,);
    const categoryList = ['Populer','Recomended','Nearset']
   return (
    <View style={style.categoryListContainer}>
      {categoryList.map((category , index)=> (
       <Pressable
        key={index} 
        onPress = {() => setSelectCategoryIndex(index)}
         
        >
          <Text 
            style={[
              style.categoryListText, index ==selectCategoryIndex && style.activeCategoryListText
            ]}>
            {category}
        </Text>
       </Pressable>

      ))}
    </View>
  
   );
  }
  const ListOptions = () =>{
    const optionsList = [
      {title: 'Buy a Home', img: require('../../assets/house1.jpg')},
      {title: 'Rent a Home', img: require('../../assets/house2.jpg')},
    ];
    return (
      <View style={style.listOptionsContainer}>
       {optionsList.map((option,index) => (
           <View style={style.optionCard} key={index}>
             <Image source={option.img} style={style.optionCarImage}></Image>
             <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>{option.title}</Text>
           </View>

         ))}
      </View>
    );
  };
  const Card = ({house}) => {
    return (
      <Pressable  onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={style.card}>
           <Image source={house.image} style={style.cardImage}></Image> 
           <View style={{flexDirection:'row',justifyContent:'space-between',margin:15}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{house.title}</Text>
            <Text style={{fontSize:16,fontWeight:'bold', color:COLORS.blue}}>$1,500</Text>
           </View>
           <Text style={{fontSize:14,marginTop:5,color:COLORS.grey}}>{house.location}</Text>
           <View style={{marginTop:5,flexDirection:'row'}}>
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
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content'></StatusBar>
      <View style={style.header}>
        <View>
          <Text style={{color:COLORS.grey}}>Location</Text>
          <Text style={{color:COLORS.dark,fontWeight:'bold', fontSize:20}}>Canada</Text>
        </View>
        <Image source={require('../../assets/person.jpg')}style={style.profileImage}></Image>
      </View>
      <ScrollView >
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
          <View style={style.searchInputContainer}>
            <Icon name='search' size={25} color={COLORS.grey} ></Icon>
            <TextInput placeholder='Search Address ,City,Location'></TextInput>
          </View>
          <View style={style.sortbtn}>
            <Icon name='tune' size={25} color={COLORS.white}></Icon>
          </View>
        </View>
        <ListOptions>
        </ListOptions>
        <ListCategories>
        </ListCategories>
        <FlatList 
          snapToInterval={width - 20}
          contentContainerStyle={{paddingLeft:20,paddingVertical:20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={houses} renderItem = {({item}) => <Card house={item}/>}>
        </FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header:{
    paddingHorizontal:20,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  profileImage:{
    height:50,
    width:50,
    borderRadius:25,
  },
  searchInputContainer:{
    height:50,
    flexDirection:'row',
    backgroundColor:COLORS.light,
    flex:1,
    alignItems:'center',
    borderRadius:10,
    paddingHorizontal:20,

  },
  sortbtn:{
    height:50,
    width:50,
    justifyContent:'center',
    backgroundColor:COLORS.dark,
    borderRadius:10,
    alignItems:'center',
    marginLeft:10


  },
  listOptionsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    paddingHorizontal:20

  },
  optionCard:{
   height:210,
   width: width / 2 - 30,
   elevation:15,
   backgroundColor:COLORS.white,
   alignItems:'center',
   borderRadius:20,
   paddingTop:10,
   paddingHorizontal:10,
  }, 
  optionCarImage:{
  height:140,
  borderRadius:10,
  width:'100%'
  },
  categoryListContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText:{
    fontSize:16,
    fontWeight:'bold',
    color:COLORS.grey,
    paddingBottom:5,

  },
  activeCategoryListText:{
    color:COLORS.dark,
    borderBottomWidth:1,
    paddingBottom:5,
  },
  card:{
    height:250,
    backgroundColor:COLORS.white,
    marginRight:20,
    borderRadius:20,
    width: width - 40,
    elevation:10,
    padding:15
  },
  cardImage:{
   width:'100%',
   borderRadius:15,
   height:120,
  },
  facility:{
    flexDirection:'row',
    marginRight:5,
  },
  facilityText:{
    marginLeft:5,
    color:COLORS.grey,
  },

});
export default HomeScreen;