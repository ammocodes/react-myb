import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_IS_PREVIEW === "true" ?
    process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN :
    process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN
});

export default client;
