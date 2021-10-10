import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class TestChild extends Component {
  constructor() {
    super();
    this.state = {};
    console.log('Child constructor called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Child getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Child componentDidMount called');
  }

  //..............................

  shouldComponentUpdate() {
    console.log('Child shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Child getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate called');
  }

  //..............................

  componentWillUnmount() {
    console.log('Parent componentWillUnmount called');
  }

  //..............................

  render() {
    console.log('Child render called');
    return (
      <SafeAreaView>
        <View>
          <Text>Counter : {this.props.count}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default TestChild;
