import React from "react";
import { View, Button, Alert, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RazorpayCheckout from "react-native-razorpay";

const windowWidth = Dimensions.get("window").width;

const Pay = (price) => {
  const handlePayment = () => {
    const options = {
      description: "Credits towards consultation",
      image: "https://your-logo-url.com/logo.png",
      currency: "INR",
      key: "rzp_test_XZqevi0iNDKcH1", // Your Razorpay Key ID
      amount: price * 100, // 5000 paise = INR 50
      name: "SapnaApp",
      prefill: {
        email: "shashikumarverma1996@gmail.com",
        contact: "7007414506",
        name: "shashi kumar verma",
      },
      theme: { color: "#F37254" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <>
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
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => handlePayment(50)}>
          <Text style={styles.buttonText}>Upgrade and Pay ₹ 50</Text>
        </Pressable>
      </View>
    </>
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

export default Pay;
