import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/apollo',
    ],
    apollo: {
        options: {},
        serialize: null,
        clientConfigs: {
            default: {
                httpEndpoint: 'https://hasura-dash.herokuapp.com/v1/graphql',
            }
        }
    }
})

