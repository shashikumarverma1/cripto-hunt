import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HistoricalChart, SingleCoin } from "../utils/apis";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LineCharts } from "../components/LineChart";
const windowWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";

export const CoinDetails = (data) => {
  const [coin, setCoin] = useState();

  const { image, current_price, name, market_cap, market_cap_rank, id } =
    data?.route?.params?.data;
  const [historicData, setHistoricData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(30);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(id, 24, "USD"));
    // setflag(true);
    setHistoricData(data?.prices);
    setLoading(true);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
  console.log(days, "days");
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.center}>
        <Pressable>
          <View style={styles.cardShadow}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 65, height: 65 }}
                source={{
                  uri: image,
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.subHeading}>Name : {name}</Text>
              <Text style={styles.subHeading}>Rank : {market_cap_rank}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <View>
                <Text style={styles.subHeading}>
                  Price : {current_price} USD
                </Text>
              </View>
              <View>
                <Text style={styles.subHeading}>
                  M. Cap : {market_cap.toString().slice(0, -6)} M
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 10 }}>
                Chart :
              </Text>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: -Dimensions.get("window").width * 0.07,
                }}
              >
                <LineChart
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                    ],
                    datasets: [
                      {
                        data:[1,2,3,8,5,6,7,5,9,10],
                      },
                    ],
                  }}
                  width={Dimensions.get("window").width} // from react-native
                  height={220}
                  yAxisLabel="$"
                  yAxisSuffix=""
                  yAxisInterval={10} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "red",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable onPress={() => setDays(1)}>
                  <Text style={styles.button}>24 h</Text>
                </Pressable>
                <Pressable onPress={() => setDays(30)}>
                  <Text style={styles.button}>30d</Text>
                </Pressable>
                <Pressable onPress={() => setDays(90)}>
                  <Text style={styles.button}>3m</Text>
                </Pressable>
                <Pressable onPress={() => setDays(365)}>
                  <Text style={styles.button}>1y</Text>
                </Pressable>
              </View>
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "500", marginTop: 10 }}
                >
                  Description :
                </Text>

                <Text style={{ textAlign: "justify" }}>
                  {coin?.description?.en.slice(0, -1)}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: "#0D88C3",
    borderRadius: 5,
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
  },
  subHeading: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
  },
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
