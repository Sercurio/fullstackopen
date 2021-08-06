import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';

import { Picker } from '@react-native-picker/picker';

import { Searchbar } from 'react-native-paper';

import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories, fetchMore }) => {
  const ItemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => {
        return { ...edge.node, key: edge.node.id };
      })
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [searchKeyword] = useDebounce(searchQuery, 500);

  const [selectedOrder, setSelectedOrder] = useState({});

  const { repositories, fetchMore } = useRepositories(
    {
      first: 5,
    },
    selectedOrder,
    searchKeyword
  );

  return (
    <>
      <Searchbar
        placeholder='Search Repository'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Picker
        style={{ height: 30 }}
        selectedValue={selectedOrder.label}
        onValueChange={(itemValue, itemIndex) => {
          switch (itemValue) {
            case 'latest':
              setSelectedOrder({
                label: 'Latest repositories',
                orderBy: 'CREATED_AT',
                orderDirection: 'DESC',
              });
              break;
            case 'high':
              setSelectedOrder({
                label: 'Hightest rated',
                orderBy: 'RATING_AVERAGE',
                orderDirection: 'DESC',
              });
              break;
            case 'low':
              setSelectedOrder({
                label: 'Lowest rated',
                orderBy: 'RATING_AVERAGE',
                orderDirection: 'ASC',
              });
              break;
          }
        }}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated' value='high' />
        <Picker.Item label='Lowest rated' value='low' />
      </Picker>
      <RepositoryListContainer
        repositories={repositories}
        fetchMore={fetchMore}
      />
    </>
  );
};

export default RepositoryList;
