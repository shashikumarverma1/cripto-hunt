import { useEffect, useState } from "react";
import { TextInput, View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React from "react";
import { CoinCard } from "../components/coinCard";
import { TrendingCoins } from "../utils/apis";
import { AllCoins } from "./AllCoins";
import { LoadingScreen } from "./LoadingScreen";
export const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [coins, setCoins] = useState([]);
  const [AllCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState("");
  const windowWidth = Dimensions.get("window").width;
// import { CoinList } from "../utils/apis";
  const fetchCoins = async () => {
    // setLoading(true);
    let url= `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${"usd"}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

    const res = await axios.get(url)


    setCoins(res.data);
    // setLoading(false);
  };
  const GetAllCoin=async()=>{
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${"INR"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
 

    setAllCoins(res.data);
    // setLoading(false);
  }

  useEffect(() => {
    fetchCoins();
    GetAllCoin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  

  return (
    <ScrollView style={{ marginTop: 50 ,   }}>
      <Text style={styles.heading}>Dashboard</Text>

      <View style={[styles.justifyBetween ,{marginTop:20 , marginBottom:10 , paddingHorizontal:20}]}>
        <Text style={styles.SubHeading}>Trending coins</Text>
        <Pressable onPress={()=>navigation.navigate("TrendingCoin")}>
        <Text style={[styles.SubHeading , {color:"#0D88C3"}]}>View All</Text>
        </Pressable>
      </View>
     {
     coins?.length ==0 ? <LoadingScreen/> :
     <CoinCard data={coins?.slice(0,3)}/>}
      <View style={[styles.justifyBetween ,{ paddingHorizontal:20 , marginTop:20 , }]}>
        <Text style={styles.SubHeading}>All coins</Text>
        <Pressable onPress={()=>navigation.navigate("AllCoins")}>
        <Text style={[styles.SubHeading , {color:"#0D88C3"}]}>View All</Text>
        </Pressable>
      </View>
    { coins?.length ==0 ? <LoadingScreen/> :
      <CoinCard data={coins?.reverse().slice(0,3)}/>}
      <View style={{marginBottom:200}}/> 
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
  heading: {
    textAlign:"center" , fontSize:17 , fontWeight:"500" 
  },
  SubHeading:{
   fontSize:16 , fontWeight:"500" 
  },
  justifyBetween:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  }
 
});
