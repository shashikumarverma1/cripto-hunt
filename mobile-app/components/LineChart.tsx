import React, { useEffect } from "react";
import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { HistoricalChart } from "../utils/apis";
import axios from "axios";

export const LineCharts = ( data ) => {
  console.log(data?.data)
  
  return (
    <View style={{ marginTop: 10 , marginLeft: -Dimensions.get("window").width*.07  }}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data:data?.data?.map((e)=>e[1])
            },
          ],
        }}
        width={Dimensions.get("window").width } // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={10} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "red",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
  );
};
