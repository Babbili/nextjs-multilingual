import React, { createContext, useContext } from 'react'
// next/router  https://nextjs.org/docs/api-reference/next/router
import { useRouter } from 'next/router'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import { tType } from '../types'

const router = useRouter()
// import current locale from NextRouter
const { locale } = router

// assign t as either of the translation json files localted in '../locales' according to the current locale
let t: tType = locale === 'en' ? en : fr

// create app context to retrieve t value across the app 
const Context: React.Context<tType> = createContext<tType>(t )

// create context provider 
export const ContextProvider: React.FC<any> = ({ children }) => {

    return (
      <Context.Provider value={t}>{children}</Context.Provider>
    )
}


export function useAppContext() {
  return useContext(Context)
}

