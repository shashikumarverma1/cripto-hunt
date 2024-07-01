import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

export const Notification = (

) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop:90 }}>
    <Text style={{fontSize:20 , fontWeight:"600" , textAlign:"center"}}>Notifications</Text>
    
    <ScrollView style={styles.container}>
        {[
          "Highlight Profile", "ATS score", "Application tracking", "Resume fixing", "Promote Profile"
        ].map((e, index) => {
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{index + 1}. {e}</Text>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      padding: 25,
      backgroundColor: "#f5f5f5",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 5,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    cardText: {
      fontSize: 18,
      color: "#333333",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      marginHorizontal: 20,
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#0D88C3",
      height: 50,
      width: windowWidth * 0.9,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "transparent",
    },
    buttonText: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
