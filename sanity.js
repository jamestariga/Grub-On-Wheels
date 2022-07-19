import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { REACT_APP_SANITY_KEY } from '@env'

const client = sanityClient({
  projectId: REACT_APP_SANITY_KEY,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
