import useAuthStorage from '../hooks/useAuthStorage';

import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const credentials = { credentials: { username, password } };
    const response = await mutate({ variables: credentials });
    if (response.data.authorize.accessToken) {
      authStorage.setAccessToken(response.data.authorize.accessToken);
      apolloClient.resetStore();
    }
    return response;
  };

  return [signIn, result];
};

export default useSignIn;
