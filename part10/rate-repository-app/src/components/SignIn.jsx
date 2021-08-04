import React from 'react';
import { useHistory } from 'react-router-native';

import Text from './Text';

import { Pressable, View } from 'react-native';

import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={{ backgroundColor: 'white' }}>
          <FormikTextInput
            testID='usernameField'
            name='username'
            placeholder='username'
          />
          <FormikTextInput
            testID='passwordField'
            name='password'
            placeholder='password'
            secureTextEntry={true}
          />

          <View
            style={{
              borderRadius: 3,
              alignItems: 'center',
              padding: 10,
              margin: 10,
              backgroundColor: theme.colors.primary,
            }}
          >
            <Pressable testID='submitButton' onPress={handleSubmit}>
              <Text style={{ color: 'white' }}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async values => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: '',
    password: '',
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
