import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import WalletCard from "./WalletCard";

const RewardCard = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // gap: 10,
      }}
    >
      <WalletCard>
        <AntDesign name="wallet" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>
          PhonePe Wallet
        </Text>
      </WalletCard>
      <WalletCard>
        <MaterialCommunityIcons name="gift-outline" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>
          Rewards
        </Text>
      </WalletCard>
      <WalletCard>
        <AntDesign name="sound" size={30} color="white" />
        <View
          style={{
            padding: 1,
            height: 20,
            width: 20,
            backgroundColor: "green",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -5,
            right: 20,
            borderColor: "white",
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            1
          </Text>
        </View>
        <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>
          Refer & Get ₹100
        </Text>
      </WalletCard>
    </View>
  );
};

export default RewardCard;

const styles = StyleSheet.create({});
