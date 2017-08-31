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
                city {
                    name
                }
            }
        }
    }
`;
