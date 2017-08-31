import { PolymerApolloMixin } from 'polymer-apollo';
import { apolloClient } from '../client';
// заимпортим все необходимые запросы
// (пока что он у нас один)
import { getUserInfoQuery } from '../models/user';

class GraphqlClientDemoApp extends PolymerApolloMixin({ apolloClient }, Polymer.Element) {

    static get is() { return 'graphql-client-demo-app'; }

    static get properties() {
        return {
            appName: {
                type: String,
                value: 'GraphQL Client Demo'
            },

            // ВАЖНО!!!
            // постарайтесь хорошо запомнить,
            // что имя property должно в 
            // точности соответствовать названию
            // корнегово поля запроса
            // т.е. в данном случае наш запрос 
            // будет выгдядеть так:
            // query { user { ... } }
            user: {
                type: Object,
                value: {}
            }
        };
    }

    // ну а здесь и будут наши запросы
    get apollo() {
        return {
            getUserInfo: {
                // наш запрос, который мы
                // заимпортили из моделей
                // нужно понимать, что этот запрос
                // дернется сразу же при инициализации
                // компонента
                // можно ли этого избежать, 
                // я пока не разобрался
                // разве что вызовом отдельной функции
                query: getUserInfoQuery
            }
        };
    }
}

window.customElements.define(GraphqlClientDemoApp.is, GraphqlClientDemoApp);