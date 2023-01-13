import React from 'react'

import CartComponent from '../CartComponents/CartComponent'
import ComputerOfferComponent from '../ComputerOfferComponents/ComputerOfferComponent'
import PhoneOfferComponent from '../PhoneOfferComponents/PhoneOfferComponent'
import QuickMenu from '../QuickMenuComponents/QuickMenu'
import Categories from '../SponsoredComponents/Categories'
import FeatureList from '../SponsoredComponents/FeatureList'
import SponsArticle from '../SponsoredComponents/SponsArticle'

import SponsoredProducts from '../SponsoredComponents/SponsoredProducts'

function Home() {
    return (
        <div className="home-wrapper container">
            <FeatureList klasa="mobile" />
            <SponsArticle klasa="mobile" />
            <Categories klasa="mobile" />
            <SponsoredProducts />
            <QuickMenu />
            <ComputerOfferComponent />
            <PhoneOfferComponent />
        </div>
    )
}

export default Home
