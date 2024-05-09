import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer 63d948ac6a9ed236280ad3c0604d456d292a3a1078442f58145912e87f115ae6e0d605f6a860bd1ffb94edf624115132e17668d5eb2527093b7440ae503b50d98c03bd446dc445f6f89a36e26c7a24d4bdb2d23a10b72b40c98ab36bc575f338dfe9c4409f4972eecd23b7fef1474ec12cda580647cdf7e9795ca678c213b058",
  },
});
