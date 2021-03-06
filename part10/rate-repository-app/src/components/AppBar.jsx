import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import { AUTHORIZED_USER } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const { loading, error, data } = useQuery(AUTHORIZED_USER);

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const renderSignTab = () => {
    if (data && !data.authorizedUser)
      return (
        <Link to='/signin'>
          <Text style={styles.barText}>SignIn</Text>
        </Link>
      );
    else
      return (
        <Pressable onPress={signOut}>
          <Text style={styles.barText}>SignOut</Text>
        </Pressable>
      );
  };

  const renderSignupTab = () => {
    if (data && !data.authorizedUser)
      return (
        <Link to='/signup'>
          <Text style={styles.barText}>SignUp</Text>
        </Link>
      );
    else return <></>;
  };

  const renderMyReviewTab = () => {
    if (data && data.authorizedUser)
      return (
        <Link to='/my_reviews'>
          <Text style={styles.barText}>My Reviews</Text>
        </Link>
      );
    else return <></>;
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {renderSignTab()}
        {renderSignupTab()}
        {renderMyReviewTab()}
        <Link to='/create_review'>
          <Text style={styles.barText}>Create Review</Text>
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
