import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Box from "./Box";

const ReceiveMoney = () => {
  return (
    <Box>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.cardHeading}>Receive Money</Text>
          <View style={styles.upiIdCardContainer}>
            <Ionicons name="qr-code-outline" size={12} color="gray" />
            <Text style={styles.upiId}>UPI ID : azhartsayyed1@ybl</Text>
          </View>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </View>
    </Box>
  );
};

export default ReceiveMoney;

const styles = StyleSheet.create({
  cardHeading: {
    fontWeight: "700",
  },
  upiIdCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  upiIdCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upiId: {
    color: "gray",
    fontSize: 13,
  },
});
