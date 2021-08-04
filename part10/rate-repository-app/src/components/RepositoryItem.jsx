import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from 'react-native';
import { useHistory } from 'react-router-native';

const RepositoryItem = ({ item }) => {
  const history = useHistory();

  return (
    <Pressable
      onPress={() => {
        history.push({
          pathname: `/repository/${item.id}`,
        });
      }}
    >
      <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
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
              source={{ uri: item.ownerAvatarUrl }}
            />
          </View>
          <View style={{ padding: 10 }}>
            <Text testID='fullnameText' style={{ fontWeight: 'bold' }}>
              {item.fullName}
            </Text>
            <Text testID='descriptionText'>{item.description}</Text>
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
              {item.language}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={{ alignItems: 'center' }}>
            <Text testID='forksCountText' style={{ fontWeight: 'bold' }}>
              {kFormatter(item.forksCount)}
            </Text>
            <Text>forks</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text testID='stargazersCountText' style={{ fontWeight: 'bold' }}>
              {kFormatter(item.stargazersCount)}
            </Text>
            <Text>stars</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text testID='ratingAverageText' style={{ fontWeight: 'bold' }}>
              {kFormatter(item.ratingAverage)}
            </Text>
            <Text>rating</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text testID='reviewCountText' style={{ fontWeight: 'bold' }}>
              {kFormatter(item.reviewCount)}
            </Text>
            <Text>reviews</Text>
          </View>
        </View>
      </View>
    </Pressable>
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
export default RepositoryItem;
