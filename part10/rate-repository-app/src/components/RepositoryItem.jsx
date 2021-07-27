import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
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
          <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text
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
          <Text style={{ fontWeight: 'bold' }}>
            {kFormatter(item.forksCount)}
          </Text>
          <Text>forks</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {kFormatter(item.stargazersCount)}
          </Text>
          <Text>stars</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {kFormatter(item.ratingAverage)}
          </Text>
          <Text>rating</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {kFormatter(item.reviewCount)}
          </Text>
          <Text>reviews</Text>
        </View>
      </View>
    </View>
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
