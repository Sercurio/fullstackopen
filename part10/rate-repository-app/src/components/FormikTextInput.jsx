import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  errorInput: {
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d73a4a',
  },
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={{ margin: 10 }}>
      <View>
        <TextInput
          style={showError ? styles.errorInput : styles.textInput}
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </View>
      {showError && (
        <Text style={[styles.errorText, { fontFamily: theme.fonts.main }]}>
          {meta.error}
        </Text>
      )}
    </View>
  );
};

export default FormikTextInput;
