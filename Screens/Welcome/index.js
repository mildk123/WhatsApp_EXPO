import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { Text, Button } from "react-native-elements";

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 35 }}>
          <Text h4 style={styles.welcome}>
            Welcome to WhatsApp
          </Text>
        </View>

        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/backWel.png")}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.textContainer}>
            Read our <Text style={styles.spanLinks}>Privacy Policy</Text>, Tap
            "Agree and continue" to accept the
            <Text style={styles.spanLinks}>Terms of Service</Text>.
          </Text>
          <Button
            onPress={() => {this.props.navigation.navigate('verifyPhone') }}
            title="AGREE AND CONTINUE"
            backgroundColor="#25D366"
            borderRadius={2}
          />
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  welcome: {
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
    padding: 20,
    fontSize: 12
  },
  spanLinks: {
    fontSize: 12,
    color: "#34B7F1"
  }
});
