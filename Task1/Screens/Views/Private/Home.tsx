import React from "react";
import { StyleSheet,ImageBackground, View,Text,Image, TouchableOpacity, FlatList } from "react-native";
import { ItemDescription, ItemImage } from "../../Components/Private/Home";



var Glary =[
  {Id : 0,Image : require('../../../Assets/Home/Glary/pexels-abdullah-çadırcı-7933975.jpg')},
  {Id : 1,Image :require('../../../Assets/Home/Glary/pexels-jan-simons-6664480.jpg')},
  {Id : 2,Image :require('../../../Assets/Home/Glary/pexels-jose-aragones-2179666.jpg')},
  {Id : 3,Image :require('../../../Assets/Home/Glary/pexels-valdemaras-d-1998165.jpg')},
  {Id : 4,Image :require('../../../Assets/Home/Glary/pexels-vincent-pelletier-720254.jpg')},
]

var Description =[
  {Id : 0,Title:'Title0',Description:'Description0'},
  {Id : 1,Title:'Title1',Description:'Description1'},
  {Id : 2,Title:'Title2',Description:'Description2'},
  {Id : 3,Title:'Title3',Description:'Description3'},
  {Id : 4,Title:'Title4',Description:'Description4'},
  {Id : 5,Title:'Title5',Description:'Description5'},
]

const Home = () =>{
    console.log('[Home] : Screen : Rerender');

  var [Hearts,SetHearts] = React.useState(468);
  var [Favorites,SetFavorites] = React.useState(709);

  return (
    <View style={[Style.MainView]}>
      <ImageBackground source={require('../../../Assets/Home/pexels-spencer-davis-4388165.jpg')}
       style = {[Style.ImageView]}>
        <Image style={[Style.Image]}
        source={require('../../../Assets/Home/pexels-florent-b-3846629.jpg')} />
        <TouchableOpacity onPress={()=>{SetHearts(Hearts+1)}}
        style={[{position:'absolute',top:40,left:130}]}>
          <Image style={[Style.IconImage]} source={require('../../../Assets/Home/Icons/Heart.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{SetFavorites(Favorites+1)}}
        style={[{position:'absolute',bottom:100,right:130}]}>
          <Image style={[Style.IconImage]} source={require('../../../Assets/Home/Icons/star.png')}/>
        </TouchableOpacity>

        <Text style={[Style.Title]}>Petra</Text>
        <Text style={[Style.Subtitle]}>Jordan</Text>
      </ImageBackground >

      <View style={[Style.ViewNumbers]}>
        <View style={[Style.NumberBox,{borderRightWidth:1,paddingRight:20}]}>
          <Text style={[Style.Number]}>{Hearts}</Text>
          <Text style={[Style.TextNumber]}>Love</Text>
          <Image style={[Style.Icon]} source={require('../../../Assets/Home/Icons/Heart.png')}/>
        </View>
        <View style={[Style.NumberBox,{borderRightWidth:1,paddingRight:20}]}>
          <Text style={[Style.Number]}>{Favorites}</Text>
          <Text style={[Style.TextNumber]}>Favorite</Text>
          <Image style={[Style.Icon]} source={require('../../../Assets/Home/Icons/star.png')}/>
        </View>
                <View style={[Style.NumberBox]}>
          <Text style={[Style.Number]}>270</Text>
          <Text style={[Style.TextNumber]}>Visitors</Text>
          <Image style={[Style.Icon]} source={require('../../../Assets/Home/Icons/visitors.png')}/>
        </View>
      </View>

      <View style={[Style.ViewGlary]}>
        <FlatList 
        data={Glary}
        renderItem={ItemImage}
        keyExtractor={(Item:any)=>Item.Id}
        horizontal={true}
        />
      </View>

      <View style={[Style.ViewDescription]}>
        <FlatList 
        data={Description}
        renderItem={ItemDescription}
        keyExtractor={(Item:any)=>Item.Id}
        />
      </View>
    </View>
  )
}


export default Home;



const Style = StyleSheet.create({
  MainView:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  ImageView:{
    flex:2.7,justifyContent:'center',alignItems:'center',width:'100%'
  },
  Image:{
    height:150,width:150,borderRadius:80
  },
  IconImage:{
    height:35,width:35,borderRadius:80,
  },
  Title:{
    fontSize:30,fontWeight:'700',color:'#fff'
  },
  Subtitle:{
    fontSize:15,fontWeight:'600',color:'#fff'
  },
  ViewNumbers:{
    flexDirection:'row',width:'100%',justifyContent:'center'
    ,backgroundColor:'#AC6800'
  },
  Number:{
    fontSize:25,fontWeight:'900',color:'#fff'
  },
  TextNumber:{
    fontSize:15,fontWeight:'600',color:'#fff'
  },
  NumberBox:{
    alignItems:'center',margin:15
  },
  Icon:{
    height:30,width:30,borderRadius:80,
  },
  ViewGlary: {
    flex:1.4
  },
  ImageGlary: {
    height:160,
    width:200
  },

  ViewDescription: {
    height:100,
    width:'100%',
    flex:1.2,backgroundColor:'#fff'
  },
  ItemViewDescription: {
    justifyContent:'flex-start',padding:10
  },
    ItemTitleDescription: {
      fontSize:25,fontWeight:'600',color:'#000'
  },
  ItemDescriptionDescription: {
     fontSize:15,fontWeight:'500',color:'#000'
  },
})
