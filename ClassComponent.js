import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  getData(x) {
    this.state({counter: x * 20});
  }
  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.setState(this.state.counter + 1);
          }}>
          ClassComponent
        </Text>
      </View>
    );
  }
}

export default ClassComponent;
