import React, { useRef } from 'react'
import { layoutPropsType, tType } from '../types'
// next/router  https://nextjs.org/docs/api-reference/next/router
import { useRouter } from 'next/router'
// next/link  https://nextjs.org/docs/api-reference/next/link
import Link from 'next/link'


const Header: React.FC<layoutPropsType> = ( layoutProps: layoutPropsType) => {
    // import t, styles from layout props
    const { t, styles } = layoutProps

    const langSelector = useRef<HTMLUListElement>(null)
    const otherlang = useRef<HTMLAnchorElement>(null)

    const router = useRouter()
    // import current locale, all configured locales from NextRouter
    const { locale, locales } = router
    
    let otherLocales: string[] | undefined = locales?.filter(elem => elem != locale && elem != undefined)

    // show/hide language selector handlers
    function showLangSelector() {
        otherlang?.current?.classList.remove('hide')
        otherlang?.current?.classList.add('selected')
        langSelector?.current?.classList.add('selector__clicked')
    }
    function hideLangSelector() {
        setTimeout(() => {
            otherlang?.current?.classList.add('hide')
            otherlang?.current?.classList.remove('selected')
            langSelector?.current?.classList.remove('selector__clicked')
        }, 400)
    }


    return(
        <header className={`${styles.header} ${styles.container}`}>
            <Link href={'https://github.com/Babbili/nextjs-multilingual'}>
                <a>
                    <h3>{t.logo}</h3>
                </a>
            </Link>
            <ul className={styles.lang__selector} ref={langSelector} onMouseEnter={()=> showLangSelector()} onMouseLeave={() => hideLangSelector()}>
                <li className={styles.lang__selector__item}>
                    <Link href={'/'} locale={locale}>
                        <a className={`${styles.lang} selected`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--text-color)"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>{locale}</a>
                    </Link>
                </li>
                {
                    otherLocales?.map(elem => {
                        return(
                            <li className={styles.lang__selector__item} key={elem}>
                                <Link href={'/'} locale={elem}>
                                    <a className={`${styles.lang} hide`} ref={otherlang}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--text-color)"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>{elem}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}
export default Header