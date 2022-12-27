import { Divider } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import SingleComputer from './SingleComputer'

function ComputerOffer() {
    return (
        <div className="computer-offer-component">
            <div className="computer-commercial">
                <Image layout="fill" src={'/racunarizonera.png'} />
            </div>
            <div className="computer-products">
                <div className="computer-products-1">
                    <SingleComputer
                        price={'900,00 KM'}
                        src={'/aspire.png'}
                        name={'Acer Aspire 3'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                </div>
                <div className="computer-products-2">
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                    <SingleComputer
                        price={'2000,00 KM'}
                        src={'/air.jpeg'}
                        name={'Macbook Air M1'}
                    />
                </div>
            </div>
        </div>
    )
}

export default ComputerOffer
