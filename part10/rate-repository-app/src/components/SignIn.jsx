import React from 'react';

import Text from './Text';

import { Pressable, View } from 'react-native';

import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <FormikTextInput name='username' placeholder='username' />
      <FormikTextInput
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
        <Pressable onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
