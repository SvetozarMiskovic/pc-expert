import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Crumb({ href, title, last = false }) {
    if (last) {
        return <p>{title}</p>
    }
    const text = title + ' ' + '/' + ' '
    return (
        <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={href}>
                {`${text}`}
            </BreadcrumbLink>
            <BreadcrumbSeparator />
        </BreadcrumbItem>
    )
}

export default Crumb
