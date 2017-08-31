import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

// Создаем GraphQL клиент
export const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        // заменяем URL на необходимый
        uri: 'http://graphql.server.demo/api/graphql',
        transportBatching: true,
    })
});