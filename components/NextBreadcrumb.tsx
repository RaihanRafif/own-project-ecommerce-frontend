// /components/NextBreadcrumb.tsx
'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean,
    productName?: string,
    isNotFound?: boolean
}

const NextBreadcrumb = ({
    homeElement,
    separator,
    containerClasses = '',
    listClasses = '',
    activeClasses = '',
    capitalizeLinks = false,
    productName = '',
    isNotFound = false
}: TBreadCrumbProps) => {
    const paths = usePathname()
    const pathNames = paths ? paths.split('/').filter(path => path) : []

    return (
        <div>
            <ul className={`flex bg-none pl-[135px] px-[135px] mt-8 mb-8 ${containerClasses}`}>
                <li className={`text-[#7D8184] mr-2`}>
                    <Link href='/'>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && '/'}
                {
                    pathNames.map((link, index) => {
                        const href = link === 'product' ? '/' : `/${pathNames.slice(0, index + 1).join('/')}`
                        const isLast = index === pathNames.length - 1
                        const itemClasses = isLast ? `${'text-[#7D8184] mr-2 ml-2'} ${activeClasses} font-bold` : 'text-[#7D8184] mr-2 ml-2'
                        const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link
                        let displayText = isLast && productName ? productName : itemLink

                        displayText == "Account" ? displayText = "My Account" : ''
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>
                                    {isLast ? (
                                        <span className='text-black'>{isNotFound ? 'Not Found' : displayText}</span>
                                    ) : (
                                        <Link href={href}>{displayText}</Link>
                                    )}
                                </li>
                                {pathNames.length !== index + 1 && '/'}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NextBreadcrumb
