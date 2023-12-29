import { Image,  Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LessPayment = () => {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        width: "100%",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/UPI-Color.png")}
            style={{ width: 48, height: 48, objectFit: "contain" }}
          />
          <Text
            style={{
              color: "gray",
              fontWeight: 600,
              paddingBottom: 6,
              paddingLeft: 2,
              fontSize: 10,
            }}
          >
            LITE
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderLeftWidth: 1,
            paddingLeft: 10,
            borderColor: "#E9ebee",
          }}
        >
          <Text style={{ fontWeight: 600 }}>PIN-less Payments</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#6739B7",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 16,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 600 }}>TRY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LessPayment;
