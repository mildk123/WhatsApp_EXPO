import React from "react";
import Navigator from './navigation/navigator'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Navigator />
      );
  }
}
