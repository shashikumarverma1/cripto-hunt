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
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { WatchlistInfo } from "../context/watchlistData";
const windowWidth = Dimensions.get("window").width;

export const CoinCard = (data) => {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get("window").width;
  const { watchlist, setWatchlist } = useContext(WatchlistInfo);
  
  const IsWatchlisted=(e)=>{
return watchlist?.filter((el)=>el.id==e.id)
  }
  useEffect(()=>{} ,[watchlist?.length])
  return (
    <ScrollView style={{}}>
      {data?.data?.map((e, index) => {
        return (
          <View style={styles.center} key={index}>
            <Pressable onPress={()=>navigation.navigate("CoinDetails" , {data:e})}>
              <View style={styles.cardShadow}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "center",
                  }}
                >
                  <View>
                    <View style={styles.leftSection}>
                      <Image
                        style={{ width: 35, height: 35 }}
                        source={{
                          uri: e?.image,
                        }}
                      />
                    </View>
                  </View>
                  <View style={styles.rightSection}>
                    <View style={styles.sectionWidth}>
                      <Text style={[styles.text]}>
                        {e.symbol.toLocaleUpperCase()}
                      </Text>
                      <Text style={styles.text}>{e.name.slice(0, 10)}</Text>
                    </View>

                    <View style={styles.sectionWidth}>
                      <Text style={styles.text}>
                        {e.current_price.toFixed(2)}
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              e.price_change_percentage_24h.toFixed(2) < 0
                                ? "red"
                                : "green",
                            paddingRight: 10,
                            textAlign: "center",
                          },
                        ]}
                      >
                        {e.price_change_percentage_24h.toFixed(2)}%
                      </Text>
                    </View>
                    <View style={styles.sectionWidth}>
                      <Pressable onPress={()=>{
                       let isWatchlisted= IsWatchlisted(e)
                    
                        if(isWatchlisted?.length !== 0){
                           let ans=   watchlist.filter((el)=>el.id !=e.id)
                           setWatchlist(ans)
                           Alert.alert('Alert', 'Removed from watchlist', [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                          ]);
                         
                        }else{
                          let arr=[...watchlist , e]
                          setWatchlist(arr)
                          Alert.alert('Alert', 'Added to watchlist', [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                          ]);
                          
                        }
                       
                      }}>
                        <Text style={styles.text}>
                          <Ionicons
                            name={IsWatchlisted(e).length > 0  ? "heart" : "heart-outline"}
                            size={25}
                            color={IsWatchlisted(e).length > 0  ? "red" : "grey"}
                          />
                        </Text>
                      </Pressable>

                      <Text style={styles.text}>
                        {e.market_cap.toString().slice(0, -6)}M
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardShadow: {
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
  sectionWidth: {
    width: windowWidth * 0.22,
  },
  leftSection: {
    paddingRight: 5,
    width: windowWidth * 0.1,
  },
  rightSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth * 0.79,
    // backgroundColor:"red"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5,
    textAlign: "center",
  },
});
