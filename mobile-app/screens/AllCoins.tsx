import { useEffect, useState } from "react";
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
const windowWidth = Dimensions.get("window").width;

export const AllCoins = () => {
  const handleLogin = () => {};
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("");
  const windowWidth = Dimensions.get("window").width;
  // import { CoinList } from "../utils/apis";
  const fetchCoins = async () => {
    // setLoading(true);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${"INR"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    console.log(res.data);
    console.log(res.data[0]);
    // name

    setCoins(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

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
<CoinCard data={coins}/>
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
