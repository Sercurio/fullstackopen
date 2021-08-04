import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Linking,
  FlatList,
} from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';

import { format } from 'date-fns';

import theme from '../theme';

const RepositoryItemDetails = ({ repository }) => {
  return (
    <View
      style={{ backgroundColor: 'white', paddingBottom: 20, marginBottom: 15 }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignSelf: 'flex-start',
          padding: 1,
        }}
      >
        <View style={{ padding: 10 }}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: repository.ownerAvatarUrl }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text testID='fullnameText' style={{ fontWeight: 'bold' }}>
            {repository.fullName}
          </Text>
          <Text testID='descriptionText'>{repository.description}</Text>
          <Text
            testID='languageText'
            style={{
              alignSelf: 'flex-start',
              padding: 4,
              borderRadius: 1,
              backgroundColor: '#0366d6',
              color: 'white',
            }}
          >
            {repository.language}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center' }}>
          <Text testID='forksCountText' style={{ fontWeight: 'bold' }}>
            {kFormatter(repository.forksCount)}
          </Text>
          <Text>forks</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text testID='stargazersCountText' style={{ fontWeight: 'bold' }}>
            {kFormatter(repository.stargazersCount)}
          </Text>
          <Text>stars</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text testID='ratingAverageText' style={{ fontWeight: 'bold' }}>
            {kFormatter(repository.ratingAverage)}
          </Text>
          <Text>rating</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text testID='reviewCountText' style={{ fontWeight: 'bold' }}>
            {kFormatter(repository.reviewCount)}
          </Text>
          <Text>reviews</Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 3,
          alignItems: 'center',
          padding: 10,
          margin: 10,
          backgroundColor: theme.colors.primary,
        }}
      >
        <Pressable
          onPress={() => {
            Linking.openURL(repository.url);
          }}
        >
          <Text style={{ color: 'white' }}>Open in Github</Text>
        </Pressable>
      </View>
    </View>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View
      style={{
        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          width: 30,
          height: 30,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          flexShrink: 0,
        }}
      >
        <Text style={{ color: 'blue' }}>{review.rating}</Text>
      </View>
      <View></View>
      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 5,
          paddingRight: 25,
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
        <Text style={{ color: 'grey' }}>
          {format(new Date(review.createdAt), 'yyyy.MM.dd')}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  const ItemSeparator = () => <View style={{ height: 10 }} />;

  if (loading) return <Text>Loading...</Text>;
  const repository = data.repository;
  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map(edge => {
        return { ...edge.node, key: edge.node.id };
      })
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => {
        return <ReviewItem review={item} />;
      }}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItemDetails repository={repository} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      // ...
    />
  );
};

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}

const styles = StyleSheet.create({
  container: {},
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default SingleRepository;
