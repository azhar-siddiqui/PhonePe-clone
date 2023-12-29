import { Text, View } from "react-native";
import React from "react";

const Box = ({ children }) => {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 15,
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
      {children}
    </View>
  );
};

export default Box;
