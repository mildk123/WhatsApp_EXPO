import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";

import { Text, Button } from "react-native-elements";

class verifyPhone extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 40 }}>
          <Text h4 style={styles.verify}>
            Verify your phone number
          </Text>
        </View>

        <View style={{ alignContent: "center", justifyContent: "center" }}>
          <Text style={styles.textContainer}>
            WhatsApp will send an SMS message (carrier charges may apply) to
            verify your phone number. Enter your country code and phone number:
          </Text>

          <View>
            <Picker
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

export default verifyPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  verify: {
    color: "#25D366"
  },
  image: {
    width: 420,
    height: "100%",
    maxHeight: 520,
    borderRadius: 100
  },
  textContainer: {
    color: "grey",
    textAlign: "center",
    fontSize: 13,
    padding: 25,
    paddingTop: 0
  },
  spanLinks: {
    fontSize: 12,
    color: "#34B7F1"
  }
});
