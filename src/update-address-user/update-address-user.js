import { PolymerApolloMixin } from 'polymer-apollo';
import { apolloClient } from '../client';
// не забываем заимпортить все необходимые запросы
import { 
    getUserInfoQuery,
    updateAddressAndUserMutation
} from '../models/user';

class UpdateAddressUser extends PolymerApolloMixin({ apolloClient }, Polymer.Element) {

    static get is() { return 'update-address-user'; }

    static get properties() {
        return {
            user: {
                type: Object,
                value: {},
                // observer это метод
                // что будет вызываться при изменении
                // свойства
                // зачем это нужно читаем ниже
                observer: "_updateProperties",
            },

            // перечислим тут все наши поля
            // данные свойства работают в обе
            // стороны, т.е. при изменении полей
            // в шаблоне, они будут изменяться
            // в объекте
            zip: { type: String, value: "" },
            street: { type: String, value: "" },
            firstname: { type: String, value: "" },
            lastname: { type: String, value: "" },
        };
    }

    get apollo() {
        return {
            getUserInfo: {
                query: getUserInfoQuery
            }
        };
    }

    _updateProperties() {
        // все что делаем в этом методе
        // это парсим все необходимые значения
        // из объекта в отдельные
        // свойства.
        // нужно это по той причине
        // что изменить из шаблона
        // аттрибуты внутри объекта
        // (user = {...}) невозможно
        if (this.user.firstname != undefined) {
            // использовать индексы плохая практика
            // не делайте так
            this.zip = this.user.addresses[0].zip;
            this.street = this.user.addresses[0].street;
            this.firstname = this.user.firstname;
            this.lastname = this.user.lastname;
        }
    }

    // ну и собственно наш виновник торжества
    // (вариант очень базовый, за более широкими
    // возможностями почитайте документацию к polymer-apollo
    // (https://github.com/aruntk/polymer-apollo#mutations)
    _sendAddressUserMutation() {
        this.$apollo.mutate({
            mutation: updateAddressAndUserMutation,
            // то, чего вы так ждали
            // да, это они
            variables: {
                id: 1,
                zip: this.zip,
                street: this.street,
                firstname: this.firstname,
                lastname: this.lastname,
            },
        }).then((data) => {
            // тут можно проверить что же нам пришло
            // но мы этого делать, конечно же,
            // не будем

            // вызовем обновление компонента
            // который выведет наши изменения
            document.getElementById('view-block').dispatchEvent(new CustomEvent('refetch'));
        })
    }

}

window.customElements.define(UpdateAddressUser.is, UpdateAddressUser);