import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import firebase from "../../Config/Firebase";

import { Text, Button } from "react-native-elements";
import { TextField } from "react-native-material-textfield";

class verifyPhone extends Component {
  constructor() {
    super();
    this.state = {
      phone: null
    };
  }

  static navigationOptions = {
    header: null
  };

  _verifyPhone = () => {
    firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function(response) {
          console.log(response)
        }
      }
    );

    // if (this.state.phone.length !== 10) {
    //   alert("Invalid Number");
    // } else {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if ( user ){
    //       console.log(user.uid)
    //     }else{
    //       console.log('not logged in')
    //     }
    //   })
    // }
  };

  _onchange = phone => {
    this.setState({
      phone
    });
  };

  render() {
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
          <TextField
            prefix="+92"
            style={{ width: 700 }}
            fontSize={20}
            inputContainerPadding={12}
            tintColor="#25D366"
            label="Phone number"
            onChangeText={phone => this._onchange(phone)}
          />
        </View>

        <View style={{ position: "absolute", bottom: 55 }}>
          <Button
            large
            title="Next"
            onPress={this._verifyPhone}
            backgroundColor="#25D366"
            containerViewStyle={{ width: 100 }}
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
