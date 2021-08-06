import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useParams,
} from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReviews from './MyReviews';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  const location = useLocation();

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/my_reviews'>
          <MyReviews />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/create_review'>
          <CreateReview />
        </Route>
        <Route path='/repository/:id'>
          <SingleRepository />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
