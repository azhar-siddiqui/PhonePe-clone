import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import MoneyTransfer from "../../components/MoneyTransfer";
import ReceiveMoney from "../../components/ReceiveMoney";
import RewardCard from "../../components/RewardCard";
import RechargeAndBills from "../../components/RechargeAndBills";
import LessPayment from "../../components/LessPayment";

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#Dfe7fa", height: "100%" }}>
      <View style={{ backgroundColor: "#6739B7" }}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.userDetails}>
              <Image
                style={styles.userImg}
                source={{
                  uri: "https://media.gettyimages.com/id/1398211731/photo/maverick-the-royal-film-performance-arrivals.jpg?s=1024x1024&w=gi&k=20&c=P9d3khX3i-61gLngk6PWgMzbYgHDNDDVzxhyWhsoUX0=",
                }}
              />
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 7,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: 600 }}
                  >
                    Add Address
                  </Text>
                  <AntDesign name="caretdown" size={10} color="white" />
                </View>
                <Text style={{ color: "white", fontSize: 12, marginTop: 5 }}>
                  Phulambri, Aurangabad
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 120,
              }}
            >
              <TouchableOpacity>
                <MaterialIcons name="qr-code-scanner" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="bell" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="question-circle" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}
      >
        <MoneyTransfer />
        <ReceiveMoney />
        <RewardCard />
        <LessPayment />
        <RechargeAndBills />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6739B7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  userDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImg: {
    width: 45,
    height: 45,
    borderRadius: 18,
    resizeMode: "cover",
  },
});
