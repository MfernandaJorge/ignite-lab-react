// CONFIGURAÇÕES DO APOLLO
// Será utilizado para integrar o setup do projeto, permitindo fazer controle de cache das requisições e ter uma melhor disposição do cód.

import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache() // Por padrão fará um cache na memória da aplicação como variáveis
})


