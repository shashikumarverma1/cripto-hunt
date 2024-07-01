import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  View,
  Share,
  Linking,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalInfo } from "../context/userDetails";
const CustomSidebarMenu = ({ navigation }: { navigation: any }) => {
  const {userDetails, setUserDetails } = useContext(GlobalInfo)
  const logout = async () => {
    AsyncStorage.clear();
    setUserDetails(false)
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this amazing app: https://play.google.com/store/apps/details?id=com.ssfindia`,
      });
      // https://play.google.com/store/apps/details?id=com.ssfindia
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="home" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Home</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="person-circle" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Profile</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            onShare()
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="share-social" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Share</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async() => {
           await Linking.openURL('https://play.google.com/store/apps/details?id=com.pm.kisan.samman.nidhi.yojana');
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="star" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Rate us</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={async() => {
            navigation.navigate("Pay");          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="arrow-up-circle" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Premium Services</Text>
          </View>
        </Pressable>
       
        <Pressable
          style={styles.button}
          onPress={() => {
            logout()
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="log-out" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Logout</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.closeDrawer();
          }}
        >
          <Text
            style={[
              styles.heading,
              { color: "red", textAlign: "right", paddingLeft: 200 },
            ]}
          >
            close
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    // PaddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft: 25,
  },
  heading: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft: 20,
  },
});
export default CustomSidebarMenu;
