import React, { useEffect, useState } from 'react'
import { headerPropsType, tType } from '../types'
// next/router  https://nextjs.org/docs/api-reference/next/router
import { useRouter } from 'next/router'
// next/link  https://nextjs.org/docs/api-reference/next/link
import Link from 'next/link'


const Header: React.FC<headerPropsType> = ( headerProps: headerPropsType) => {

    const { t } = headerProps

    const router = useRouter()
    // import current locale, all configured locales from NextRouter
    const { locale, locales } = router
    
    let otherLocales: string[] | undefined = locales?.filter(elem => elem != locale && elem != undefined)


    return(
        <header>
            <h3>{t.title}</h3>
            <ul>
                <li>
                    <Link href={'/'} locale={locale}>
                        <a>{locale}</a>
                    </Link>
                </li>
                {
                    otherLocales?.map(elem => {
                        return(
                            <li key={elem}>
                                <Link href={'/'} locale={elem}>
                                    <a>{elem}</a>
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