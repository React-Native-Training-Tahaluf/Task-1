import React from "react";
import { View,Image, Text, StyleSheet } from "react-native";

export const ItemImage = (item:any) =>{
return (
  <View>
    <Image style={[Style.ImageGlary]} source={item.item.Image} />
  </View>
);
}

export const ItemDescription = (item:any) =>{
return (
  <View style={[Style.ItemViewDescription]}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{height:10,width:10,backgroundColor:'#000',borderRadius:50,marginRight:30}}></View>
      <Text style={[Style.ItemTitleDescription]}>{item.item.Title}</Text>
    </View>
    <Text style={[Style.ItemDescriptionDescription]}>{item.item.Description}</Text>
  </View>
);
}



const Style = StyleSheet.create({
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