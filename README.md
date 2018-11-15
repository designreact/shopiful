# Shopiful
Shopify Buy SDK meets ~~Contentful~~* GraphCMS API

\**[Contentful](https://www.contentful.com/) want $879 pcm for access to GraphQL, that won't really work for this boilerplate project so we've switched to [GraphCMS](https://graphcms.com/) which has a free tier* :thumbsup:

For enterprise, given bothe APIs aupport GraphQL queries and mutations etc. it should be relatively easy to port from GraphCMS over to Contentful.

#### Overview

Shopiful GraphQL server `./server/graphql` utilises Apollo server to interface with Shopify and GraphCMS APIs combining their respective schema into a master schema for use with the Shopiful client `./client`.

The `./shared` folder contains shared code used by the servers GraphQL middleware, React middleware `./server/react` and Frontend client.

#### But WHY?!

Paying for only the basic $9.99 pcm package it should pan out to be cheaper than running a full Shopify package as a storefront.

It will be more customisable than running a Shopify storefront. For example we may want a mobile first progressive web app with GrapQL subscriptions for stock, dispatch or promotion push notifications.

Its an interesting challenge so why not?

# Getting Started

*TODO...*
