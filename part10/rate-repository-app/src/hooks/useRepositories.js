import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ first }, selectedOrder, searchKeyword) => {
  const { data, error, loading, refetch, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        orderBy: selectedOrder.orderBy,
        orderDirection: selectedOrder.orderDirection,
        searchKeyword,
        first,
      },
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    const variables = {
      after: data.repositories.pageInfo.endCursor,
      first,
      orderBy: selectedOrder.orderBy,
      orderDirection: selectedOrder.orderDirection,
      searchKeyword,
    };
    console.log(variables);
    fetchMore(variables);
  };

  const [repositories, setRepositories] = useState();

  useEffect(() => {
    refetch();
  }, [selectedOrder, searchKeyword]);

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    } else if (error) {
      console.log(error);
    }
  }, [data, error]);

  return {
    repositories: repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
