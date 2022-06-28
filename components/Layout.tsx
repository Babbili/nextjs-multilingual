import React from 'react'
import { layoutPropsType } from '../types'
// import app context
import { useAppContext } from '../context/AppContext'
import { ContextProvider } from '../context/AppContext'
import Header from './Header'
import styles from '../styles/Home.module.css'

const Layout: React.FC<any> = ({ children }) => {

    // import t from AppContext
    const t  = useAppContext()
  
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