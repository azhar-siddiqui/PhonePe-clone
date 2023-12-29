import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Box from "./Box";

const MoneyTransfer = () => {
  return (
    <Box>
      <Text style={styles.cardHeading}>Money Transfers</Text>
      <View style={styles.transferView}>
        <TouchableOpacity style={[styles.transferTab]}>
          <View style={styles.transferCard}>
            <AntDesign name="user" size={30} color="white" />
          </View>
          <Text style={styles.transferText}>To Mobile Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={styles.transferCard}>
            <MaterialCommunityIcons name="bank" size={30} color="white" />
          </View>
          <Text style={styles.transferText}>To Bank/ UPI ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={styles.transferCard}>
            <SimpleLineIcons name="arrow-down-circle" size={30} color="white" />
          </View>
          <Text style={styles.transferText}>To Self Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={styles.transferCard}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={30}
              color="white"
            />
          </View>
          <Text style={styles.transferText}>Check Balance</Text>
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default MoneyTransfer;

const styles = StyleSheet.create({
  cardHeading: {
    fontWeight: "700",
  },
  transferView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  transferTab: {
    width: "21%",
    justifyContent: "center",
    alignItems: "center",
  },
  transferCard: {
    width: 45,
    height: 45,
    borderRadius: 16,
    backgroundColor: "#6739B7",
    alignItems: "center",
    justifyContent: "center",
  },
  transferText: {
    textAlign: "center",
    marginTop: 5,
  },
});
