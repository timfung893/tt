import * as contentful from 'contentful';

// export const client = contentful.createClient({
//     space: process.env.REACT_APP_SPACE_ID,
//     accessToken: process.env.REACT_APP_CONTENT_DELIVERY_TOKEN
// })

// export const previewClient = contentful.createClient({
//     space: process.env.REACT_APP_SPACE_ID,
//     accessToken: process.env.REACT_APP_CONTENT_PREVIEW_TOKEN,
//     host: 'preview.contentful.com'
// })

export const client = contentful.createClient({
    space: '4sjfa4379klp',
    accessToken: 'ILGrdjZKKEzcWmZf6GLtS9j2PxvA0bNIKVv162eqwTA'
})

export const previewClient = contentful.createClient({
    space: '4sjfa4379klp',
    accessToken: '6D6ZKP-awia0NXraA_dqxB8N2Dn0K78MYp6Epf0nWsQ',
    host: 'preview.contentful.com'
})