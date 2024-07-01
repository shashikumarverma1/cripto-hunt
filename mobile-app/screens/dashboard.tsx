import { useEffect, useState } from "react";
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React from "react";
import { CoinCard } from "../components/coinCard";
export const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("");
  const windowWidth = Dimensions.get("window").width;
// import { CoinList } from "../utils/apis";
  const fetchCoins = async () => {
    // setLoading(true);
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${'btc'}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    console.log(res.data[0].id);

    setCoins(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Text>Dashbord</Text>
  <CoinCard/>
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
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
