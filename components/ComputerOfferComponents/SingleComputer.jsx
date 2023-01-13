import { Button, Icon, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'

function SingleComputer({ name, price, src, klasa }) {
    return (
        <div
            className={
                klasa
                    ? 'single-computer-holder mobile'
                    : 'single-computer-holder'
            }
        >
            <div className="single-computer-header">
                <Text fontSize={'xl'} color={'#f89a20'}>
                    {name}
                </Text>
            </div>
            <div className="single-computer-image">
                <Image width={100} height={100} src={src} alt="proizvod" />
            </div>
            <div className="single-computer-price">
                <Text fontSize={'xl'} textAlign="center" color={'#f89a20'}>
                    {price}
                </Text>
                <Button
                    _hover={{
                        backgroundColor: '#f89a2099',
                    }}
                    _active={{
                        backgroundColor: '#f89a20',
                    }}
                    backgroundColor={'#f89a20'}
                    color={'#fff'}
                >
                    Dodaj <Icon as={FaShoppingCart} />
                </Button>
            </div>
            <Text fontSize={'lg'} className="single-computer-garanty">
                GARANCIJA
            </Text>
        </div>
    )
}

export default SingleComputer
