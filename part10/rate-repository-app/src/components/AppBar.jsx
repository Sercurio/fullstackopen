import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to='/signin'>
          <Text style={styles.barText}>Signin</Text>
        </Link>
        <Link to='/'>
          <Text style={styles.barText}>Repositories</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

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
