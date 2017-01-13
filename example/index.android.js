import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import LoadingCat from 'react-native-loading-cat';

const styles = StyleSheet.create({
  viewport: {
    flex: 1,
    backgroundColor: 'rgb(230, 220, 220)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class example extends Component {
  render() {
    return (
      <View style={styles.viewport}>
        <LoadingCat />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);
