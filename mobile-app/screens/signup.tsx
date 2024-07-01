import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalInfo } from "../context/userDetails";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Signup = () => {
  const [useData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigation: any = useNavigation();
  const {userDetails, setUserDetails } = useContext(GlobalInfo)
  const signUpHandle = async () => {
    await AsyncStorage.setItem("name", useData.name);
    await AsyncStorage.setItem("email", useData.email);
    await AsyncStorage.setItem("mobile", useData.mobile);
    await AsyncStorage.setItem("password", useData.password);
    setUserDetails(true)
    // navigation.navigate("Login");
    navigation.navigate("Home")
    return;
    if (!useData.name) {
      alert("please add name");
      return;
    }
    if (!useData.mobile) {
      alert("please add mobile");
      return;
    }
    if (!useData.email) {
      alert("please add email");
      return;
    }
    if (!useData.password) {
      alert("please add password");
      return;
    }
    let name = await AsyncStorage.getItem("name");
  
    if (!name) {
      await AsyncStorage.setItem("name", useData.name);
      await AsyncStorage.setItem("email", useData.email);
      await AsyncStorage.setItem("mobile", useData.mobile);
      await AsyncStorage.setItem("password", useData.password);
    } else {
      alert("Already user please login");
    }
  };
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ paddingTop: 20 }}>
            <Ionicons name="arrow-back-outline" size={23} />
          </Text>
        </Pressable>
        <View style={{ marginBottom: 45 }}>
          <Text style={{ marginTop: 50, fontWeight: "800", fontSize: 30 }}>
            Sign up
          </Text>
          <Text
            style={{
              color: "#a5a8ab",
              fontSize: 15,
              lineHeight: 15,
              marginTop: 10,
            }}
          >
            SIgn in for next step Should you have any questions or require
            further information as you proceed, please do not hesitate to reach
            out to our support
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Name
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, name: e })}
          value={useData.name}
          placeholder="Enter your name"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, email: e.trim() })}
          value={useData.email}
          placeholder="Enter your email"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Mobile No.
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, mobile: e })}
          value={useData.mobile}
          placeholder="Enter your mobile no."
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...useData, password: e.trim() })}
          value={useData.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#0D88C3",
              height: 45,
              width: windowWidth / 1.05,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "grey",
            }}
            onPress={signUpHandle}
          >
            <Text style={{ color: "#ffff", fontWeight: "800" }}>Signup</Text>
          </Pressable>
        </View>
       
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: windowHeight / 9,
          }}
        >
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
            Already have account ?{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "blue", fontSize: 15, fontWeight: "500" }}>
              Signin
            </Text>
          </Pressable>
        </View>
      </View>
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
