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
const windowWidth = Dimensions.get("window").width;

export const CoinCard = () => {
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
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${"btc"}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    console.log(res.data[0]);

    setCoins(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return (
    <ScrollView>
      {coins?.map((e, index) => {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}
          >
            <Pressable
            //    onPress={()=>navigation.navigate("JobDetails")}
            >
              <View
                style={{
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
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "aqua",
                    alignItems:"center"
                  }}
                >
                  <View>
                    <View
                      style={{
                      paddingRight:5

                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={{
                          uri: e?.image,
                        }}
                      />
                    </View>
                  </View>
                  <View style={{}}>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        backgroundColor: "red",
                        width: windowWidth * 0.76,
                      }}
                    >
                      <Text>{e.id}</Text>
                      <Text>{e.id}</Text>
                      <Text>{e.id}</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        backgroundColor: "red",
                        width: windowWidth * 0.76,
                      }}
                    >
                      <Text>{e.id}</Text>
                      <Text>{e.id}</Text>
                      <Text>{e.id}</Text>
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
