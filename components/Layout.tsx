import React from 'react'
// next/router  https://nextjs.org/docs/api-reference/next/router
import { useRouter } from 'next/router'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import { tType } from '../types'
import { layoutPropsType } from '../types'
import Header from './Header'
import styles from '../styles/Home.module.css'

const Layout: React.FC<any> = ({ children }) => {

    const router = useRouter()
    // import current locale from NextRouter
    const { locale } = router
  
    // assign t as either of the translation json files localted in '../locales' according to the current locale
    let t: tType = locale === 'en' ? en : fr
  
    const layoutProps: layoutPropsType = {
      t,
      styles
    }

    return(
        <div className={styles.app}>
            <Header {...layoutProps} />
            <main>{ children }</main>
            <footer></footer>
        </div>
    )
}
export default Layout




// ** AppContext.tsx **
// import { createContext, useContext, useState } from "react";

// const Context = createContext();

// export function ContextProvider({ children }) {
//   const [appState, setAppState] = useState();
//   return (
//     <Context.Provider value={[appState, setAppState]}>{children}</Context.Provider>
//   );
// }

// export function useAppStateContext() {
//   return useContext(Context);
// }


// ** _app.tsx **
// import { ContextProvider } from "../context/AppContext";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <ContextProvider>
//       <Component {...pageProps} />
//     </ContextProvider>
//   );
// }

// ** page.tsx **
// export default function Page() {
//     const { appState } = useAppStateContext()
//     // maybe const [appState, setAppState] = useAppStateContext()
//     return (
//       <p>
//         {appState} is here! 🎉
//       </p>
//     )
//   }