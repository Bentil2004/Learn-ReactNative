import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue , placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value= {value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 15,

    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
export default CustomInput;