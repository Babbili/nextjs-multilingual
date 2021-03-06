# Next Js Internationalized Routing ( Multilingual Feature )

<img src="./public/103207nexti18n.png" width="100%" height="auto" alt="nextjs-i18n">

><small>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest --ts`](https://nextjs.org/docs/basic-features/typescript)  with TypeScript support</small>

<br />

Next.js has built-in support for [internationalized (i18n) routing](https://nextjs.org/docs/advanced-features/i18n-routing) via `next/router`


Add the i18n config to your `next.config.js` file
```js
module.exports = {
  i18n: {
    locales: ['en', 'fr'], // include all configured locales
    defaultLocale: 'en',
  },
}
```

With the above configuration `en`, `fr` will be available to be routed to, and `en` is the default locale ( Next Js auto detect user's prefered locale in `Accept-Language` header ). If you have a `pages/blog.tsx` the following urls would be available:
```
  /blog
  /fr/blog
```

Access the locale information from `NextRouter`
```jsx
import useRouter from 'next/router'
const { locale, locales, defaultLocale } = useRouter()
```


Create a **`locales`** folder in the root directory and add `en.json` and `fr.json` files to include all your translations for each language in JSON format
```jsx
import en from '../locales/en.json'
import fr from '../locales/fr.json'

// assign t as either of the translation json files localted in '../locales' according to the current locale
let t = locale === 'en' ? en : fr

return(
  <h1>{ t.title }</h1>
)
```

### `useContext` hook approach

It's better and more scalable to createContext with `t` or the user preferred locale and import this value from context provider anywhere across the app
```jsx
//   context/AppContext.tsx

import React, { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

// create context provider 
export const ContextProvider = ({ children }) => {
  // import current locale from NextRouter
  const { locale } = useRouter()

  // assign t as either of the translation json files localted in '../locales' according to the current locale
  let t = locale === 'en' ? en : fr
  
  // create app context to retrieve t value across the app 
  const Context = createContext(t )

  return (
    <Context.Provider value={t}>{children}</Context.Provider>
  )
}

export function useAppContext() {
  const { locale } = useRouter()
  let t = locale === 'en' ? en : fr
  
  // create app context to retrieve t value across the app 
  const Context = createContext(t )
  
  return useContext(Context)
}
```
Create a [Custom App](https://nextjs.org/docs/advanced-features/custom-app) and wrap your application with the `ContextProvider`
```tsx
//   pages/_app.tsx

import { ContextProvider } from '../context/AppContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
```
now you can import `t` from App Context anywhere in the app
```tsx
import { useAppContext } from '../context/AppContext'

const Page = () => {
  // import t from AppContext
  const t  = useAppContext()

  return(
    <h1>{ t.title }</h1>
  )
}

export default Page
```


<br />


## Getting Started

First, install dependencies then run the development server:
```
npm install
```
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
