import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {
  FontAwesome5,
  Octicons,
  MaterialCommunityIcons,
  EvilIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

import Box from "./Box";

const RechargeAndBills = () => {
  return (
    <Box>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Recharge & Pay Bills</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#D8d7d9",
            backgroundColor: "#E9e1f4",
            paddingVertical: 5,
            paddingHorizontal: 11,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: "gray", fontWeight: 600 }}>My Bills</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <Octicons name="device-mobile" size={40} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Mobile Recharge
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <FontAwesome5 name="satellite-dish" size={40} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 10 }}>DTH</Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <FontAwesome5 name="lightbulb" size={40} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Electricity
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <EvilIcons name="credit-card" size={50} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Credit Card Bill Payment
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <FontAwesome5 name="money-check" size={35} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Rent Payment
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <MaterialIcons name="receipt-long" size={40} color="#6739B7" />
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Loan Repayment
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <MaterialCommunityIcons
            name="gas-cylinder"
            size={40}
            color="#6739B7"
          />
          <Text style={{ textAlign: "center", marginTop: 5 }}>
            Book A Cylinder
          </Text>
        </View>
        <View
          style={{
            width: 90 / 4 + "%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#6739B7",
              borderRadius: 15,
              padding: 3,
            }}
          >
            <Feather name="chevron-right" size={40} color="white" />
          </View>
          <Text style={{ textAlign: "center", marginTop: 5 }}>See All</Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default RechargeAndBills;
