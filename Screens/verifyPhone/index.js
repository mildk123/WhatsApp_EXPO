import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Text, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import { TextField } from "react-native-material-textfield";

class verifyPhone extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let data = [
      {
        value: "Banana"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "123123"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      },
      {
        value: "Mango"
      },
      {
        value: "Pear"
      }
    ];

    return (
      <View style={styles.container}>
        <View style={{ padding: 40 }}>
          <Text h4 style={styles.verify}>
            Verify your phone number
          </Text>
        </View>

        <Text style={styles.textContainer}>
          WhatsApp will send an SMS message (carrier charges may apply) to
          verify your phone number. Enter your country code and phone number:
        </Text>

        <View style={{ alignContent: "center", width: "60%" }}>
          <Dropdown itemCount={35} data={data} />
          <TextField
            prefix="+92"
            style={{ width: 700 }}
            fontSize={20}
            inputContainerPadding={12}
            tintColor="#25D366"
            label="Phone number"
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{position: 'absolute', bottom: 55}}>
          <Button 
          large
          title="Next" 
          backgroundColor="#25D366" 
          containerViewStyle={{width: 100}}
          borderRadius={2} 
          />
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
