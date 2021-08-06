import React from 'react';
import { useHistory } from 'react-router-native';

import Text from './Text';

import { Pressable, View } from 'react-native';

import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'minimum 5 chars')
    .max(30, 'maxi 30 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'min 5 chars')
    .max(50, 'max 50 chars'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required')
    .min(5, 'min 5 chars')
    .max(50, 'max 50 chars'),
});

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
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
          <FormikTextInput
            testID='passwordConfirmationField'
            name='passwordConfirmation'
            placeholder='passwordConfirmation'
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

const SignUp = () => {
  const history = useHistory();
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();

  const onSubmit = async values => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      console.log(data);
      if (data.createUser.id) {
        const response = await signIn({ username, password });
        history.push('/');
      } else {
        throw Error('Error during signUp');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
