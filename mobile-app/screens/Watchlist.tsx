import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CoinCard } from "../components/coinCard";
import { WatchlistInfo } from "../context/watchlistData";
const windowWidth = Dimensions.get("window").width;

export const Watchlisted = () => {
  const windowWidth = Dimensions.get("window").width;
  const { watchlist, setWatchlist } = useContext(WatchlistInfo);
  return (
    <View style={{marginTop:40}}>
   <View style={styles.center }>
   <View style={[styles.cardShadow, {display:'flex' , flexDirection:"row"} ]}>
    <View style={styles.leftSection}>
    <Text style={[styles.text , styles.leftSection]}>Icon</Text>
    </View>
   <View style={[{display:"flex" , flexDirection:"row" , justifyContent:"space-between"} , styles.rightSection]}>
   <Text style={[styles.text ,styles.sectionWidth]}>Coin</Text>
    <Text style={[styles.text , styles.sectionWidth]}>Price</Text>
    <Text style={[styles.text , styles.sectionWidth]}>Market Cap</Text>
   </View>
   </View>
    </View>
    <ScrollView>
<CoinCard data={watchlist}/>
</ScrollView>
   </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardShadow:{
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5, // This is for Android
    padding: 15,
    margin: 5,
    width: windowWidth / 1.07,
    maxWidth: windowWidth / 1.07,
  },
  sectionWidth:{
   width: windowWidth *.22,
  
  },
  leftSection:{
    paddingRight: 5,
    width:windowWidth*.1 ,
    
  },
  rightSection:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: windowWidth * .79,
    // backgroundColor:"red"
  },
 center:{
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
 },
text:{
  color:"grey",fontSize:15, fontWeight:"500", marginBottom:5 , marginTop:5 ,textAlign:"center"
}
});
