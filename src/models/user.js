// чтобы мы могли писать наши запросы подключаем
import gql from 'graphql-tag';

// важно писать именованные запросы
// (т.е. запросы с алиасом: query getUserInfo { ... })
// в дальнейшем это нам поможет при отладке
export const getUserInfoQuery = gql`
    query getUserInfo {
        user(id: 1) {
            firstname
            lastname
            createDate(format: "d M, H:i")
            addresses {
                zip
                street
                city {
                    name
                }
            }
        }
    }
`;

// не забываем присваивать алиасы
// мутациям они тоже необходимы
export const updateAddressAndUserMutation = gql`
    mutation updateAddressAndUser(
        $id: Int!, 
        $zip: String, 
        $street: String, 
        $firstname: String, 
        $lastname: String
    ) {
        address(id: $id) {
            update(zip: $zip, street: $street)
            user {
                update(
                    firstname: $firstname, 
                    lastname: $lastname
                )
            }
        }
    }
`;