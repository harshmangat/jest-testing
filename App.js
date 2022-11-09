import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    }
  }
  getData(x) {
  this.setState({counter: this.state.counter + x})
  }
  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
      </View>
    )
  }
}

export default App