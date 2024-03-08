import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer 66b809d34f4beb2bc2e41c34d7403f08fa6d6ab477d227fd86698a9c52d70600d8dedd22e18f74ff73038e5da9701c8e19c9f926109c75e3bdeee4c8a1bed3c287e627a0ea2b8ae56462f3e2214d24a7f07b2241538a542ca7884b555fd781189bb9a79f6a260802830c9022fed4e7db40e8c886abf95106186ef68e73278d27",
  },
});
