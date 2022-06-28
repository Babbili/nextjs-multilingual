import React from 'react'
import { layoutPropsType } from '../types'
// import app context
import { useAppContext } from '../context/AppContext'
import { ContextProvider } from '../context/AppContext'
import Header from './Header'
import styles from '../styles/Home.module.css'

const Layout: React.FC<any> = ({ children }) => {

    // import t from AppContext
    const { t } = useAppContext()
  
    const layoutProps: layoutPropsType = {
      t,
      styles
    }

    return(
        <ContextProvider>
            <div className={styles.app}>
                <Header {...layoutProps} />
                <main>{ children }</main>
                <footer></footer>
            </div>
        </ContextProvider>
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