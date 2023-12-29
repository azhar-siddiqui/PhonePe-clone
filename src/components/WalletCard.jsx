import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";

const WalletCard = ({ children }) => {
  return (
    <View
      style={{
        position: "relative",
        padding: 10,
        backgroundColor: "#7697f8",
        borderRadius: 10,
        marginTop: 10,
        width: "31.33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({});
