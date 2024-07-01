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

const windowWidth = Dimensions.get("window").width;

export const Profile = (
  {
    //   bgcolor,
    //   color,
    //   text,
    //   borderRadius,
    //   bordercolor,
    //   justify,
    //   fn,
    //   width,
    //   height,
    //   textsize
  }
) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ paddingTop: 20, marginBottom: 30, paddingLeft: 5 }}>
            <Ionicons name="arrow-back-outline" size={23} />
          </Text>
        </Pressable>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              resizeMode="cover"
              source={{
                uri: "https://avatars.githubusercontent.com/u/103879105?s=48&v=4",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontWeight: "600",
                fontSize: 20,
                color: "#666666",
              }}
            >
              Shashi kumar verma
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {[
          
            { title: "Email", icon: "mail", description: "shashikumarverma1996@gmail.com" },
            { title: "Phone", icon: "call", description: "7007414506" },
          ].map((e, index) => {
            return (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <View>
                  <Ionicons name={e.icon} size={25} />
                </View>
                <View>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: "600",
                      fontSize: 18,
                      color: "#666666",
                    }}
                  >
                    {e.title}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontWeight: "600",
                      fontSize: 12,
                      color: "#666666",
                    }}
                  >
                  {e.description}
                  </Text>
                </View>
              </View>
            );
          })}
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
