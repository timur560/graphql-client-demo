import { PolymerApolloMixin } from 'polymer-apollo';
import { apolloClient } from '../client.js';

class GraphqlClientDemoApp extends PolymerApolloMixin({ apolloClient }, Polymer.Element) {

    static get is() { return 'graphql-client-demo-app'; }

    static get properties() {
        return {
            appName: {
                type: String,
                value: 'GraphQL Client Demo'
            },

            user: {
                type: Object,
                value: {}
            }
        };
    }

    get apollo() {
        // Apollo specific options
    }
}

window.customElements.define(GraphqlClientDemoApp.is, GraphqlClientDemoApp);