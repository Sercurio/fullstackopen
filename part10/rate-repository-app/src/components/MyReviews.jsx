import { useQuery } from '@apollo/client';
import React from 'react';
import { Text, FlatList, View, Pressable, Alert } from 'react-native';
import { AUTHORIZED_USER_COMPLETE } from '../graphql/queries';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import useDeleteReview from '../hooks/useDeleteReview';

const MyReviews = () => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();
  const { data, loading, error, refetch } = useQuery(AUTHORIZED_USER_COMPLETE);

  if (loading) return <Text>Loading</Text>;

  const ItemSeparator = () => <View style={{ height: 10 }} />;

  const reviewNodes = data.authorizedUser.reviews
    ? data.authorizedUser.reviews.edges.map(edge => {
        return { ...edge.node, key: edge.node.id };
      })
    : [];

  const deleteItem = repositoryId => {
    refetch();
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={{ backgroundColor: 'white' }}>
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
            <Text style={{ color: 'blue' }}>{item.rating}</Text>
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
            <Text style={{ fontWeight: 'bold' }}>{item.user.username}</Text>
            <Text style={{ color: 'grey' }}>
              {format(new Date(item.createdAt), 'yyyy.MM.dd')}
            </Text>
            <Text>{item.text}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Pressable
            onPress={() => {
              history.push({
                pathname: `/repository/${item.repositoryId}`,
              });
            }}
            style={{
              backgroundColor: 'blue',
              alignItems: 'center',
              flexGrow: 1,
              padding: 15,
              margin: 10,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={{
              margin: 10,
              padding: 15,
              backgroundColor: 'red',
              alignItems: 'center',
              flexGrow: 1,
            }}
            onPress={() => {
              Alert.alert('Delete', `Are you sur to delete ${item.id} ?`, [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    console.log('OK Pressed');
                    deleteReview({ reviewId: item.id });
                    refetch();
                  },
                },
              ]);
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Delete review
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default MyReviews;
