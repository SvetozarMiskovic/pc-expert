import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import FirstComponent from './FirstComponent'

import PreFooter from './PreFooter'
import MobileMenu from '../MobileComponents/MobileMenu'
import MobileSearch from '../MobileComponents/MobileSearch'
import NavbarComponent from './NavbarComponent'
import BreadCrumbComponent from '../BreadCrumbComponents/BreadCrumbComponent'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter()
    const { pathname } = router
    return (
        <div className="layout">
            <Head>
                <title>PC Expert Shop</title>
            </Head>
            <header>
                <FirstComponent />
                <NavbarComponent />
                <MobileSearch />
                <MobileMenu />
            </header>
            {pathname === '/' ? '' : <BreadCrumbComponent />}

            <main>{children}</main>
            <footer>
                <PreFooter />
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
