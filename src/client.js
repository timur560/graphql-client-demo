import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

// Создаем GraphQL клиент
export const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        // здесь заменяем URL на необходимый
        uri: 'http://localhost:8080/graphql',
        transportBatching: true,
    })
});