import React from 'react';

import { Text, Pressable, View } from 'react-native';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';

const CreateReview = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();

  const onSubmit = async values => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      if (data.createReview.repositoryId) {
        history.push(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Owner username is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().required('Rating is required').min(0).max(10),
    text: yup.string().max(2000),
  });

  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '0',
        text: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={{ backgroundColor: 'white' }}>
          <FormikTextInput name='ownerName' placeholder='ownerName' />
          <FormikTextInput name='repositoryName' placeholder='repositoryName' />
          <FormikTextInput type='number' name='rating' placeholder='rating' />
          <FormikTextInput name='text' placeholder='text' multiline={true} />
          <View
            style={{
              borderRadius: 3,
              alignItems: 'center',
              padding: 10,
              margin: 10,
              backgroundColor: theme.colors.primary,
            }}
          >
            <Pressable onPress={handleSubmit}>
              <Text style={{ color: 'white' }}>Submit</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CreateReview;
