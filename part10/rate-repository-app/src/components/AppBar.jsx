import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('You pressed the text!')}>
        <Text style={styles.barText}>Repositories</Text>
      </Pressable>
    </View>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  appBarText: {
    color: 'red',
  },
});
*/

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: '#24292e',
  },
  barText: {
    padding: 20,
    fontSize: 22,
    color: 'white',
  },
});

export default AppBar;
